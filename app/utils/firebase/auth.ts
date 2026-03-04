// function that sign in the user with email and password
import { signInWithEmailAndPassword, signOut } from "firebase/auth"
export function loginUser(email: string, password: string) {
    const { $firebaseAuth } = useNuxtApp()
    signInWithEmailAndPassword($firebaseAuth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            console.log(error);
        });
}

export function signOutUser() {
    const { $firebaseAuth } = useNuxtApp()
    signOut($firebaseAuth)
        .then(() => {
            console.log("Signed out successfully");
        })
        .catch((error) => {
            console.log(error);
        });
}
