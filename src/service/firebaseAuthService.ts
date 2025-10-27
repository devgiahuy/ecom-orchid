import { signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "./firebase"

export async function loginWithGoogleFirebase() {
    const result = await signInWithPopup(auth, googleProvider)
    const idToken = await result.user.getIdToken() // JWT của Firebase

    return {
        user: {
            uid: result.user.uid,
            name: result.user.displayName,
            email: result.user.email,
            photoURL: result.user.photoURL
        },
        idToken
    }
}
