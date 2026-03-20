// function that sign in the user with email and password
import { signInWithEmailAndPassword, signOut } from "firebase/auth"
export async function loginUser(email: string, password: string) {
    const { $firebaseAuth } = useNuxtApp()
    return signInWithEmailAndPassword($firebaseAuth, email, password)
}

export async function signOutUser() {
    const { $firebaseAuth } = useNuxtApp()
    return signOut($firebaseAuth)
}
