import { initializeApp, getApps } from 'firebase/app'
import type { FirebaseApp } from 'firebase/app'
export function getFirebaseApp(): FirebaseApp {
    const runtimeConfig = useRuntimeConfig().public.firebaseConfig
    const firebaseConfig = {
        apiKey: runtimeConfig.apiKey,
        authDomain: runtimeConfig.authDomain,
        projectId: runtimeConfig.projectId,
        storageBucket: runtimeConfig.storageBucket,
        appId: runtimeConfig.appId,
        measurementId: runtimeConfig.measurementId
    }
    const apps = getApps()
    if (apps.length === 0) {
        return initializeApp(firebaseConfig)
    }
    return apps[0] as FirebaseApp
}
