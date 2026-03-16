export function checkEmulatorStatus(): boolean {
    const runtimeConfig = useRuntimeConfig().public
    // return import.meta.dev && runtimeConfig.firebaseEmulator.isActive == "true"
    return import.meta.dev;

}