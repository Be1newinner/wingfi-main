import {
  collection,
  query,
  getDocs,
  limit,
  where,
  orderBy,
} from "firebase/firestore";
import { firestore } from "@/infrastructure/firebase.config";

interface ProductsProps {
  lim: number;
  order: string;
  coll: string;
  whereType: string;
}

export async function ProductsData({
  lim,
  order,
  coll,
  whereType,
}: ProductsProps) {
  const AllPromise = await new Promise(async (resolve, reject) => {
    try {
      const AllProducts: Array<object> = [];

      let ProductsQuery = null;
      const productsRef = collection(firestore, coll);

      if (whereType) {
        ProductsQuery = query(
          productsRef,
          where("s", "==", whereType),
          limit(lim || 4),
          orderBy(order, "asc")
        );
      } else {
        ProductsQuery = query(
          collection(firestore, coll),
          limit(lim || 4),
          orderBy(order, "asc")
        );
      }

      const ProductSnapshot = await getDocs(ProductsQuery);

      ProductSnapshot.forEach((doc) => {
        const data = doc.data();
        const slug = doc.id;

        const modifiedData = {
          title: data.l,
          price: data.p,
          mrp: data.m,
          slug: slug,
          image: data.i,
          rating: data.r,
          sku: data.sk,
          special: data?.s || 0,
        };

        AllProducts.push(modifiedData);
      });

      resolve(AllProducts);
    } catch (error) {
      reject(error);
    }
  });
  return AllPromise;
}
