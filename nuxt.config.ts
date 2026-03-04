// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  ssr: false,
  modules: ['@pinia/nuxt', '@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      // Firebase configuration schema - do not modify or remove the empty strings
      firebaseConfig: {
        apiKey: '',
        authDomain: '',
        projectId: '',
        storageBucket: '',
        messagingSenderId: '',
        appId: '',
        measurementId: ''
      },
      firebaseUser: {
        email: '',
        password: ''
      }
    }
  },
  plugins: [
    '~/plugins/firebase/auth.client.ts',
    '~/plugins/firebase/firestore.client.ts'
  ],
})
