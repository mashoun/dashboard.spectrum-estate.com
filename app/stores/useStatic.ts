import { defineStore } from 'pinia'

export const useStaticStore = defineStore('static', {
    state: () => {
        return {
            developer: {
                name: 'Mahmoud Mashoun',
                email: 'mashoun.dev@gmail.com',
                tagline: 'Developed by Mashoun'
            },
            app: {
                owner: 'Rodolphe',
                title: 'Spectrum Real Estate',
            },
            firebase: {
                firestore: {
                    collections: {
                        public: 'public'
                    },
                    documents: {
                        main: 'main'
                    }
                }
            },
            errors: {
                messages: {
                    firestore: {
                        notInitialized: "Firestore instance not initialized",
                        configNotSet: "Firestore collection or document name not configured",
                        invalidData: "Data must be a valid object",
                    },
                    firestore_get: {
                        documentNotFound: "Public main document does not exist",
                        firebaseError: "Firebase error fetching public main",
                        error: "Error fetching public main",
                        unknownError: "Unknown error fetching public main",
                    },
                    firestore_write: {
                        firebaseError: "Firebase error writing public main",
                        error: "Error writing public main",
                        unknownError: "Unknown error writing public main",
                    }
                }
            }
        }
    }
})