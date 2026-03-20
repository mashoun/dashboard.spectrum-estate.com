import type { User } from "firebase/auth"
export const useAuth = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const isLoggedIn = ref(false)
  const isReadyToAuth = ref(false)
  const loading = ref(false)

  function setUser(u: any) {
    user.value = u
    isLoggedIn.value = !!u
  }

  function setReady(state: boolean) {
    isReadyToAuth.value = state
  }

  function setLoading(state: boolean) {
    loading.value = state
  }

  return {
    user,
    isLoggedIn,
    isReadyToAuth,
    loading,
    setUser,
    setReady,
    setLoading
  }
})