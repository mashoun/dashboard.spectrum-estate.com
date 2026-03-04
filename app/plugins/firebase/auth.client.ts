// Importing Types
import type { Auth } from "firebase/auth";

// Importing Firebase Modules
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirebaseApp } from "~/utils/firebase/app";

export default defineNuxtPlugin(() => {
  const app = getFirebaseApp();
  const auth: Auth = getAuth(app);
  const authStore = useAuth();

  if (auth) authStore.setReady(true);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      authStore.setUser(user);
    } else {
      // User is signed out
      authStore.setUser(null);
    }
  });

  return {
    provide: {
      firebaseAuth: auth,
    },
  };
});
