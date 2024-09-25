import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
} from "firebase/firestore";
import { firestore } from "@/infrastructure/firebase.config";

export async function getProducts() {
  const productsRef = collection(firestore, "p34ducts");
  const q = query(productsRef, limit(4));
  const querySnapshot = await getDocs(q);

  const newData = [];
  querySnapshot.forEach((doc) => {
    newData.push(doc.data());
  });

  return newData;
}

export async function getProductBySlug({ slug, setIsLoading }) {
  if (slug) {
    try {
      setIsLoading(true);
      const docRef = doc(firestore, "p34ducts", slug);
      const docSnap = await getDoc(docRef);
      setIsLoading(false);
      if (docSnap.exists()) {
        return {
          status: true,
          data: docSnap.data(),
        };
      } else {
        return {
          status: false,
          data: null,
        };
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      return {
        status: false,
        data: null,
      };
    }
  }
}
