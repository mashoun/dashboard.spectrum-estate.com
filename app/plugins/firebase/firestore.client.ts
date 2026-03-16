// Importing types
import type { Firestore } from "firebase/firestore";

// Importing necessary functions and types from Firebase and our utility function to get the Firebase app instance
import { getFirebaseApp } from "~/utils/firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { checkEmulatorStatus } from "~/utils/firebase/emulator";

export default defineNuxtPlugin(() => {
    const app = getFirebaseApp();
    const firestore: Firestore = getFirestore(app);
    if (checkEmulatorStatus()) {
        connectFirestoreEmulator(firestore, '127.0.0.1', 8080);
    }
    return {
        provide: {
            firestore: firestore
        }
    }
});