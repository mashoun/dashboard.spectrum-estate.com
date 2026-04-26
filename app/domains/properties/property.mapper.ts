import type { Property } from '~/types/property.types'
import type { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore'

// Firestore → App
export function fromFirestore(doc: QueryDocumentSnapshot<DocumentData>): Property {
    const data = doc.data()
    return {
        id: doc.id,
        title: data.title,
        slug: data.slug,
        type: data.type,
        listingType: data.listingType,
        price: data.price,
        currency: data.currency,
        city: data.city,
        country: data.country,
        district: data.district,
        address: data.address,
        description: data.description,
        area: data.area,
        bedrooms: data.bedrooms,
        bathrooms: data.bathrooms,
        parking: data.parking,
        media: data.media,
        createdAt: data.createdAt?.toDate?.() ?? new Date(),
        updatedAt: data.updatedAt?.toDate?.() ?? new Date(),
        status: data.status,
    }
}

// App → Firestore
export function toFirestore(property: Omit<Property, 'id'>) {
    return {
        title: property.title,
        slug: property.slug,
        type: property.type,
        listingType: property.listingType,
        price: property.price,
        currency: property.currency,
        city: property.city,
        country: property.country,
        district: property.district,
        address: property.address,
        description: property.description,
        area: property.area,
        bedrooms: property.bedrooms,
        bathrooms: property.bathrooms,
        parking: property.parking,
        media: property.media,
        createdAt: property.createdAt,
        updatedAt: property.updatedAt,
        status: property.status,
    }
}