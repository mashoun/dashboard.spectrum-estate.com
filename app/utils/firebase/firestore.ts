import { doc, getDoc  } from "firebase/firestore";
export async function getPublicMain() {
    const { $firestore } = useNuxtApp();
    
    const docRef = doc($firestore, "public", "main");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data();
    } else {
        console.log("No such document!");
        return null;
    }
}   