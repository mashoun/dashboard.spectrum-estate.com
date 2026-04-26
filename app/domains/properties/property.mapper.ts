/*

“How do I translate Firebase data → my app model?”

Firestore ≠ your app shape
Converts timestamps, ids, etc.
purpose of this file is to fetch data from the backend ( firestore ) and map it to the frontend data

*/

import type { Property } from './property.model'
import type { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore'

// Firestore → App
export function fromFirestore(
    doc: QueryDocumentSnapshot<DocumentData>
): Property {
    const data = doc.data()

    return {
        id: doc.id,
        title: data.title,
        price: data.price,
        location: data.location,
        featured: data.featured ?? false,
        createdAt: data.createdAt?.toDate?.() ?? new Date(),
    }
}

// App → Firestore
export function toFirestore(property: Omit<Property, 'id'>) {
    return {
        title: property.title,
        price: property.price,
        location: property.location,
        featured: property.featured,
        createdAt: property.createdAt,
    }
}