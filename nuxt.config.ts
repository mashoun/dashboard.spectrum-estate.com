// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  ssr: false,
  modules: ['@pinia/nuxt', '@nuxt/ui', '@sentry/nuxt/module'],
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
      },
      firebaseEmulator: {
        isActive: 'false',
      },
      sentry:{
        dsn: '',
      }
    }
  },

  plugins: [
    '~/plugins/firebase/auth.client.ts',
    '~/plugins/firebase/firestore.client.ts'
  ],

  sentry: {
    org: 'spectrum-estate',
    project: 'spectrum-dashboard',
  },

  sourcemap: {
    client: 'hidden',
  },
})