import {
  collection,
  addDoc,
  getDocs,
  where,
  query,
  QuerySnapshot,
  CollectionReference,
  DocumentData,
  Query,
} from "firebase/firestore";
import { firestore } from "@/infrastructure/firebase.config";
import { Order, OrderStatus, StatusTracking } from "@/redux/constants/order";
import { CartItem } from "@/redux/constants/cart";

interface FirebaseOrderType {
  pd: CartItem[];
  t: number;
  st: number;
  x: number;
  dy: number;
  q: number;
  ds: number;
  ad: {
    fulladdress: string;
    pincode: number;
  };
  pm: number;
  s: StatusTracking[];
  n: string;
  p: number;
  u: string;
  cs: OrderStatus;
}

const fromOrderToFirebase = (orderData: Order): FirebaseOrderType => ({
  pd: orderData.items,
  t: orderData.total,
  st: orderData.subtotal,
  x: orderData.tax,
  dy: orderData.delivery,
  q: orderData.qty,
  ds: orderData.discount,
  ad: orderData.customerAddress,
  pm: orderData.paymentMethod,
  s: orderData.statuses,
  n: orderData.customerName,
  p: orderData.customerPhone,
  u: orderData.uid,
  cs: orderData.currentStatus,
});

const fromFirebaseToOrder = (
  firebaseData: FirebaseOrderType,
  orderId: string
): Order => ({
  uid: firebaseData.u,
  id: orderId,
  statuses: firebaseData.s,
  currentStatus: firebaseData.cs,
  customerName: firebaseData.n,
  customerPhone: firebaseData.p,
  customerAddress: {
    fulladdress: firebaseData.ad.fulladdress,
    pincode: firebaseData.ad.pincode,
  },
  items: firebaseData.pd,
  total: firebaseData.t,
  subtotal: firebaseData.st,
  tax: firebaseData.x,
  delivery: firebaseData.dy,
  qty: firebaseData.q,
  discount: firebaseData.ds,
  paymentMethod: firebaseData.pm,
});

const ordersRef = (): CollectionReference<DocumentData> =>
  collection(firestore, "or84r");

const ordersWithIDAndUIDRef = ({
  orderId,
  uid,
}: {
  orderId?: string;
  uid: string;
}): Query<DocumentData> => {
  if (!orderId && uid) {
    return query(ordersRef(), where("u", "==", uid));
  }
  return query(
    ordersRef(),
    where("__name__", "==", orderId),
    where("u", "==", uid)
  );
};

export async function generateOrderAPI(orderData: Order): Promise<Order> {
  try {
    const docRef = await addDoc(ordersRef(), fromOrderToFirebase(orderData));
    return { ...orderData, id: docRef.id };
  } catch (error) {
    console.error("Failed to generate order:", error);
    throw new Error("Failed to generate order.");
  }
}

export async function loadAllOrdersAPI(uid: string): Promise<Order[]> {
  if (!uid) throw new Error("User ID is required.");

  try {
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(
      ordersWithIDAndUIDRef({ uid })
    );

    const orders: Order[] = querySnapshot.docs.map((doc) =>
      fromFirebaseToOrder(doc.data() as FirebaseOrderType, doc.id)
    );

    console.log("Loaded all orders => ", orders);
    return orders;
  } catch (error) {
    console.error("Failed to load all orders:", error);
    throw new Error("Failed to load all orders.");
  }
}

export async function loadSingleOrderAPI(
  orderId: string,
  uid: string
): Promise<Order | null> {
  if (!orderId) throw new Error("Order ID is required.");
  if (!uid) throw new Error("User ID is required.");

  try {
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(
      ordersWithIDAndUIDRef({ orderId, uid })
    );

    if (!querySnapshot.empty) {
      const docSnap = querySnapshot.docs[0];
      const order = fromFirebaseToOrder(
        docSnap.data() as FirebaseOrderType,
        docSnap.id
      );
      console.log("Loaded single order with ID:", orderId);
      return order;
    } else {
      throw new Error("Order not found or unauthorized access.");
    }
  } catch (error) {
    console.error("Failed to load order:", error);
    throw new Error("Failed to load order.");
  }
}
