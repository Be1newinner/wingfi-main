import { firestore } from "@/infrastructure/firebase.config";
import { doc, getDoc } from "firebase/firestore";

export default async function getVerificationByID({ slug, setIsLoading }) {
    setIsLoading(true);
    const docRef = doc(firestore, "reg", slug);
    const docSnap = await getDoc(docRef);
    setIsLoading(false);

    if (docSnap.exists()) {
        console.log(docSnap.data())
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
}