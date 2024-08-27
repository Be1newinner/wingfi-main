import { firestore } from "@/infrastructure/firebase.config";
import { collection, doc, getDoc } from "firebase/firestore";

export default async function getProductFromURL({ slug }) {
  if (!slug)
    return { error: "Invalid slug!", errorCode: 401, data: null, slug };

  try {
    let Product = {};

    const docRef = doc(collection(firestore, "p34ducts"), slug);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();

      Product = {
        capacity: data.ca || 0,
        model: data.mo || "",
        otherImages: data.o || [],
        inputPorts: data.poi || 0,
        outputPorts: data.pou || 0,
        variants: data.v || [],
        color: data.c,
      };
    } else {
      const response = {
        error: "Document not Found!",
        errorCode: 404,
        data: null,
        slug,
      };
      return response;
    }

    let docRef1 = doc(collection(firestore, "p43duc"), slug);

    const docSnap1 = await getDoc(docRef1);

    if (docSnap1.exists()) {
      const data = docSnap1.data();
      const slug = docSnap1.id;

      Product = {
        ...Product,
        title: slug.replaceAll("-", " "),
        price: data.p,
        mrp: data.m,
        slug: slug,
        image: data.i,
        rating: data.r,
        sku: data.sk,
        special: data?.s || 0,
      };
      if (data?.i) Product.images = [data?.i, ...Product?.otherImages];
      else Product.images = Product?.otherImages;
    } else {
      const response = {
        error: "Document not Found!",
        errorCode: 404,
        data: null,
        slug,
      };
      return response;
    }

    const response = {
      error: null,
      errorCode: null,
      data: Product,
      slug,
    };
    return response;
  } catch (error) {
    console.warn(error);
    return null;
  }
}
