// Importing types
import type { Firestore } from "firebase/firestore";

// Importing necessary functions and types from Firebase and our utility function to get the Firebase app instance
import { getFirebaseApp } from "~/utils/firebase/app";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin(() => {
    const app = getFirebaseApp();
    const firestore: Firestore = getFirestore(app);
    return {
        provide: {
            firestore: firestore
        }
    }
});