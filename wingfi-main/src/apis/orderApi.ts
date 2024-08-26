import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  where,
  query,
  QuerySnapshot,
} from "firebase/firestore";

import { firestore } from "@/infrastructure/firebase.config";
import { Order } from "@/redux/constants/order";

export async function generateOrderAPI({
  customerAddress,
  statuses,
  items,
  customerName,
  customerPhone,
  total,
  uid,
  subtotal,
  tax,
  delivery,
  qty,
  discount,
  paymentMethod,
  currentStatus,
}: Order): Promise<Order> {
  const order = {
    pd: items,
    t: total,
    st: subtotal,
    x: tax,
    dy: delivery,
    q: qty,
    ds: discount,
    ad: customerAddress,
    pm: paymentMethod,
    s: statuses,
    n: customerName,
    p: customerPhone,
    u: uid,
    cs: currentStatus,
  };

  const docRef = await addDoc(collection(firestore, "or84r"), order);

  // console.log("Document written with ID: ", docRef.id);

  return {
    items,
    total,
    subtotal,
    tax,
    delivery,
    qty,
    discount,
    customerAddress,
    paymentMethod,
    statuses,
    customerName,
    customerPhone,
    uid,
    id: docRef.id,
    currentStatus,
  };
}

export async function loadAllOrdersAPI(): Promise<Order[]> {
  const querySnapshot = await getDocs(collection(firestore, "or84r"));

  const orders: Order[] = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      items: data.pd,
      total: data.t,
      subtotal: data.st,
      tax: data.x,
      delivery: data.dy,
      qty: data.q,
      discount: data.ds,
      customerAddress: data.ad,
      paymentMethod: data.pm,
      statuses: data.s,
      customerName: data.n,
      customerPhone: data.p,
      uid: data.uid,
      id: doc.id,
      currentStatus: data.cs,
    };
  });

  console.log("Loaded all orders");
  return orders;
}

export async function loadSingleOrderAPI(
  orderId: string,
  uid: string
): Promise<Order | null> {
  if (!orderId) throw new Error("No Order ID is provided!");
  if (!uid) throw new Error("No User ID is provided!");

  console.log(orderId, " => ", uid);

  const ordersRef = collection(firestore, "or84r");
  const q = query(
    ordersRef,
    where("__name__", "==", orderId),
    where("u", "==", uid)
  );
  const querySnapshot: QuerySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const docSnap = querySnapshot.docs[0];
    const data = docSnap.data();

    const order: Order = {
      items: data.pd,
      total: data.t,
      subtotal: data.st,
      tax: data.x,
      delivery: data.dy,
      qty: data.q,
      discount: data.ds,
      customerAddress: data.ad,
      paymentMethod: data.pm,
      statuses: data.s,
      customerName: data.n,
      customerPhone: data.p,
      uid: data.uid,
      id: docSnap.id,
      currentStatus: data.cs,
    };

    console.log("Loaded single order with ID: ", orderId);
    return order;
  } else {
    console.error("Order not found or unauthorized access with ID: ", orderId);
    return null;
  }
}
