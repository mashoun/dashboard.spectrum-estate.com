// Firebase logic only, return raw data
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, } from 'firebase/firestore'

const COLLECTION = 'properties'

function getDb() {
    const { $firestore } = useNuxtApp()
    if (!$firestore) {
        throw new Error('Firestore is not initialized')
    }

    return $firestore
}

export async function getAllProperties() {
    const db = getDb()
    const snapshot = await getDocs(collection(db, COLLECTION))
    return snapshot.docs
}

export async function getPropertyById(id: string) {
    const db = getDb()
    const ref = doc(db, COLLECTION, id)
    const snapshot = await getDoc(ref)
    return snapshot
}

export async function createProperty(data: any) {
    const db = getDb()
    return addDoc(collection(db, COLLECTION), data)
}

export async function updateProperty(id: string, data: any) {
    const db = getDb()
    const ref = doc(db, COLLECTION, id)
    return updateDoc(ref, data)
}

export async function deleteProperty(id: string) {
    const db = getDb()
    const ref = doc(db, COLLECTION, id)
    return deleteDoc(ref)
}