import { firestore } from "@/infrastructure/firebase.config";
import { collection, addDoc } from "firebase/firestore";

interface propType {
  address: {
    fullAddress: string;
    pincode: number;
  };
  status: {
    s0: {
      date: number;
    };
  };
  products: {
    category: number;
    image: string;
    name: string;
    price: number;
    quantity: number;
  }[];
  name: string;
  phone: string;
  total: number;
}

export default async function generateOrderAPI({
  address,
  status,
  products,
  name,
  phone,
  total,
}: propType) {
  const docRef = await addDoc(collection(firestore, "or84r"), {
    ad: address,
    s: status,
    pd: products,
    n: name,
    p: phone,
    t: total,
  });

  console.log("Document written with ID: ", docRef.id);
}
