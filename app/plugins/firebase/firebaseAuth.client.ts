// // Importing Types
// import type { FirebaseApp } from "firebase/app";
// import type { Auth } from "firebase/auth";
// import type { Firestore } from "firebase/firestore";
// import type { FirebaseStorage } from "firebase/storage";

// // Importing Firebase Modules
// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// export default defineNuxtPlugin(() => {
//   const firebaseConfig = {
//     apiKey: "AIzaSyD-GYPMIhZTf91XgLVrlGUfTVjlKYxM7og",
//     authDomain: "spectrum-realestate.firebaseapp.com",
//     projectId: "spectrum-realestate",
//     storageBucket: "spectrum-realestate.firebasestorage.app",
//     messagingSenderId: "147859789790",
//     appId: "1:147859789790:web:96d7199d5179671f416f4f",
//     measurementId: "G-VCQ2KV7GGS",
//   };

//   // Prevent double initialization (very important in Nuxt)
//   const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
//   const auth = getAuth(app);
//   const db = getFirestore(app);
//   const storage = getStorage(app);

//   return {
//     provide: {
//       firebaseApp: app as FirebaseApp,
//       firebaseAuth: auth as Auth,
//       firebaseFirestore: db as Firestore,
//       firebaseStorage: storage as FirebaseStorage,
//     },
//   };
// });
