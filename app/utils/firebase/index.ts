import { initializeApp, getApps  } from 'firebase/app'
import type { FirebaseApp } from 'firebase/app'
export function getFirebaseApp() {
    const runtimeConfig = useRuntimeConfig().public.firebaseConfig
    const firebaseConfig = {
        apiKey: runtimeConfig.apiKey,
        authDomain: runtimeConfig.authDomain,
        projectId: runtimeConfig.projectId,
        storageBucket: runtimeConfig.storageBucket,
        appId: runtimeConfig.appId,
        measurementId: runtimeConfig.measurementId
    }
    return getApps().length ? getApps()[0] : initializeApp(firebaseConfig) as FirebaseApp
}
