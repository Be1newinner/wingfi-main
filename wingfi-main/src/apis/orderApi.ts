import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";

import { firestore } from "@/infrastructure/firebase.config";
import { Order } from "@/redux/constants/order";

export async function generateOrderAPI({
  address,
  status,
  items,
  name,
  phone,
  total,
  uid,
  subtotal,
  tax,
  delivery,
  qty,
  discount,
  paymentMethod,
}: Order): Promise<string> {
  // throw new Error("CUSTOM ERROR!");
  // const docRef = await addDoc(collection(firestore, "or84r"), {
  //   pd: items,
  //   t: total,
  //   st: subtotal,
  //   x: tax,
  //   dy: delivery,
  //   q: qty,
  //   ds: discount,
  //   ad: address,
  //   pm: paymentMethod,
  //   s: status,
  //   n: name,
  //   p: phone,
  //   u: uid,
  // });

  // console.log("Document written with ID: ", docRef.id);

  // return docRef.id;
  return new Promise((res, rej) => {
    try {
      setTimeout(() => {
        res("ABCDEFGH");
        console.log("API SUCCESS");
      }, 5000);
    } catch (error) {
      rej(error);
    }
  });
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
      address: data.ad,
      paymentMethod: data.pm,
      status: data.s,
      name: data.n,
      phone: data.p,
      uid: data.uid,
      id: doc.id,
    };
  });

  console.log("Loaded all orders");
  return orders;
}

export async function loadSingleOrderAPI(
  orderId: string
): Promise<Order | null> {
  const docRef = doc(firestore, "or84r", orderId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();

    const order: Order = {
      items: data.pd,
      total: data.t,
      subtotal: data.st,
      tax: data.x,
      delivery: data.dy,
      qty: data.q,
      discount: data.ds,
      address: data.ad,
      paymentMethod: data.pm,
      status: data.s,
      name: data.n,
      phone: data.p,
      uid: data.uid,
      id: docSnap.id,
    };

    console.log("Loaded single order with ID: ", orderId);
    return order;
  } else {
    console.error("Order not found with ID: ", orderId);
    return null;
  }
}
