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
            }
        }
    }
})