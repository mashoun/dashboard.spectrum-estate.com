/*
“How do I talk to Firebase?”

Only Firestore logic
No business logic
Returns raw data (or lightly processed)
*/

import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from 'firebase/firestore'
const db = useNuxtApp().$firestore

const COLLECTION = 'properties'

export async function getAllProperties() {
    const snapshot = await getDocs(collection(db, COLLECTION))
    return snapshot.docs
}

export async function getPropertyById(id: string) {
    const ref = doc(db, COLLECTION, id)
    const snapshot = await getDoc(ref)
    return snapshot
}

export async function createProperty(data: any) {
    return addDoc(collection(db, COLLECTION), data)
}

export async function updateProperty(id: string, data: any) {
    const ref = doc(db, COLLECTION, id)
    return updateDoc(ref, data)
}

export async function deleteProperty(id: string) {
    const ref = doc(db, COLLECTION, id)
    return deleteDoc(ref)
}