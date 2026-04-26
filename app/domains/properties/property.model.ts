/*
“What is a Property in my app?”

Pure TypeScript
No Firebase
Clean and predictable
*/

export interface Property {
    id: string
    title: string
    price: number
    location: string
    featured: boolean
    createdAt: Date
}