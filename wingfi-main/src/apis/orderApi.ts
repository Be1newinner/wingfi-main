import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";

import { firestore } from "@/infrastructure/firebase.config";
import { Order } from "@/redux/constants/order";

export async function generateOrderAPI({
  address,
  status,
  products,
  name,
  phone,
  total,
}: Order): Promise<string> {
  const docRef = await addDoc(collection(firestore, "orders"), {
    ad: address,
    s: status,
    pd: products,
    n: name,
    p: phone,
    t: total,
  });

  console.log("Document written with ID: ", docRef.id);

  return docRef.id;
}

export async function loadAllOrdersAPI(): Promise<Order[]> {
  const querySnapshot = await getDocs(collection(firestore, "orders"));

  const orders: Order[] = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      address: data.ad,
      status: data.s,
      products: data.pd,
      name: data.n,
      phone: data.p,
      total: data.t,
    };
  });

  console.log("Loaded all orders");
  return orders;
}

export async function loadSingleOrderAPI(
  orderId: string
): Promise<Order | null> {
  const docRef = doc(firestore, "orders", orderId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();

    const order: Order = {
      id: docSnap.id,
      address: data.ad,
      status: data.s,
      products: data.pd,
      name: data.n,
      phone: data.p,
      total: data.t,
    };

    console.log("Loaded single order with ID: ", orderId);
    return order;
  } else {
    console.error("Order not found with ID: ", orderId);
    return null;
  }
}
