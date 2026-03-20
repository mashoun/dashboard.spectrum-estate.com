// Importing Types
import type { Auth } from "firebase/auth";

// Importing Firebase Modules
import { getAuth, onAuthStateChanged, connectAuthEmulator } from "firebase/auth";
import { getFirebaseApp } from "~/utils/firebase/app";
import { checkEmulatorStatus } from "~/utils/firebase/emulator";

export default defineNuxtPlugin(() => {
  const app = getFirebaseApp();
  const auth: Auth = getAuth(app);
  const authStore = useAuth();

  if (auth) authStore.setReady(true);

  if (checkEmulatorStatus()) {
    connectAuthEmulator(auth, 'http://127.0.0.1:9099');
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      authStore.setUser(user);
      user.getIdToken(true).then((token) => {
        console.log('token refreshed');
      });
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
