export function getName() {
    const config = useRuntimeConfig()
    return config.public.firebaseConfig.apiKey
}

