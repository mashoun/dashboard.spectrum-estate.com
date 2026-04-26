/*
“How does my app USE properties?”

This is your brain layer
Combines API + Mapper
Used by UI
*/

import { ref } from 'vue'
import type { Property } from './property.model'

import {
    getAllProperties,
    getPropertyById,
    createProperty,
    updateProperty,
    deleteProperty,
} from './property.api'

import { fromFirestore, toFirestore } from './property.mapper'

export function usePropertyManager() {
    const properties = ref<Property[]>([])
    const loading = ref(false)

    // 🔹 GET ALL
    async function fetchAll() {
        loading.value = true

        const docs = await getAllProperties()
        properties.value = docs.map(fromFirestore)

        loading.value = false
    }

    // 🔹 GET ONE
    async function fetchById(id: string): Promise<Property | null> {
        const doc = await getPropertyById(id)

        if (!doc.exists()) return null

        return fromFirestore(doc as any)
    }

    // 🔹 CREATE
    async function create(property: Omit<Property, 'id'>) {
        const data = toFirestore(property)
        await createProperty(data)
        await fetchAll()
    }

    // 🔹 UPDATE
    async function update(id: string, property: Partial<Property>) {
        const data = toFirestore({
            ...property,
            createdAt: property.createdAt ?? new Date(),
        } as any)

        await updateProperty(id, data)
        await fetchAll()
    }

    // 🔹 DELETE
    async function remove(id: string) {
        await deleteProperty(id)
        properties.value = properties.value.filter(p => p.id !== id)
    }

    return {
        properties,
        loading,
        fetchAll,
        fetchById,
        create,
        update,
        remove,
    }
}