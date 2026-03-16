import { doc, getDoc, setDoc  } from "firebase/firestore";
import { FirebaseError } from "firebase/app";

export async function getPublicMain() {
    try {
        const { $firestore } = useNuxtApp();
        const staticStore = useStaticStore();
        const errorMessages = staticStore.errors.messages;
        
        // Validate firestore instance
        if (!$firestore) {
            throw new Error(errorMessages.firestore.notInitialized);
        }
        
        const collectionName = staticStore?.firebase?.firestore?.collections?.public;
        const documentName = staticStore?.firebase?.firestore?.documents?.main;

        
        if (!collectionName || !documentName) {
            throw new Error(errorMessages.firestore.configNotSet);
        }
        
        const docRef = doc($firestore, collectionName, documentName);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            console.log(docSnap.data());
            return docSnap.data();
        } else {
            console.warn(errorMessages.firestore_get.documentNotFound);
            return null;
        }
    } catch (error) {
        const errorMessages = useStaticStore().errors.messages;
        if (error instanceof FirebaseError) {
            console.error(errorMessages.firestore_get.firebaseError, {
                code: error.code,
                message: error.message,
            });
        } else if (error instanceof Error) {
            console.error(errorMessages.firestore_get.error, error.message);
        } else {
            console.error(errorMessages.firestore_get.unknownError, error);
        }
        throw error;
    }
}

export async function writePublicMain(data: Record<string, any>, options?: { merge?: boolean }) {
    try {
        const staticStore = useStaticStore();
        const errorMessages = staticStore.errors.messages;
        
        // Validate input
        if (!data || typeof data !== "object") {
            throw new Error(errorMessages.firestore.invalidData);
        }
        
        const { $firestore } = useNuxtApp();
        
        // Validate firestore instance
        if (!$firestore) {
            throw new Error(errorMessages.firestore.notInitialized);
        }
        
        const collectionName = staticStore?.firebase?.firestore?.collections?.public;
        const documentName = staticStore?.firebase?.firestore?.documents?.main;
        
        if (!collectionName || !documentName) {
            throw new Error(errorMessages.firestore.configNotSet);
        }
        
        const docRef = doc($firestore, collectionName, documentName);
        await setDoc(docRef, data, { merge: options?.merge ?? true });
        return { success: true };
    } catch (error) {
        const errorMessages = useStaticStore().errors.messages;
        if (error instanceof FirebaseError) {
            console.error(errorMessages.firestore_write.firebaseError, {
                code: error.code,
                message: error.message,
            });
        } else if (error instanceof Error) {
            console.error(errorMessages.firestore_write.error, error.message);
        } else {
            console.error(errorMessages.firestore_write.unknownError, error);
        }
        throw error;
    }
}