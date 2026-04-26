export type PropertyType = 'apartment' | 'house' | 'villa' | 'land' | 'office' | 'warehouse'
export type PropertyListing = 'sale' | 'rent'
export type PropertyStatus = 'available' | 'unavailable' | 'sold' | 'rented'
export type PropertyCurrency = 'USD' | 'EUR' | 'LBP'

export type PropertyMedia = {
    src: string,
    type: 'img' | 'video'
    caption?: string, // optional caption for the media
}

export type Property = {
    id: string,
    title: string,
    slug: string, // used only in urls
    type: PropertyType,
    listingType: PropertyListing,
    price: number,
    currency: PropertyCurrency,
    city: string, // ex: Beirut, Tripoli, etc.
    country: string, // ex: Lebanon, Syria, etc.
    district: string, // ex: Ashrafieh, Sin El Fil, etc.
    address: string, // ex: 123 Main St, X Building, etc.
    description: string,
    area: number, // in square meters
    bedrooms: number,
    bathrooms: number,
    parking: number, // number of parking spaces
    media: PropertyMedia[],
    createdAt: Date,
    updatedAt: Date,
    status: PropertyStatus,
}