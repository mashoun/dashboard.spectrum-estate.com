<template>
  <nav class="border-b border-gray-200 bg-white px-5 py-3">
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-4">
      <div class="flex items-center gap-6">
        <NuxtLink to="/" class="text-lg font-semibold text-gray-900">
          Spectrum Dashboard
        </NuxtLink>

        <ul class="flex items-center gap-4 text-sm text-gray-600">
          <li v-for="link in demoLinks" :key="link.to">
            <NuxtLink :to="link.to" class="rounded px-2 py-1 transition" :class="route.path === link.to
              ? 'bg-gray-100 font-medium text-gray-900'
              : 'text-gray-600 hover:text-gray-900'
              ">
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="flex gap-3 items-center">
        <p class="text-sm text-gray-700 mb-0 pb-0">
          <span v-if="authStore.user">
            Logged as {{ authStore.user.email }}
          </span>
          <span v-else>Not logged in</span>
        </p>
        <UButton variant="ghost" size="sm" color="secondary"
          :icon="authStore.user ? 'i-heroicons-arrow-right-on-rectangle' : 'i-heroicons-arrow-left-on-rectangle'"
          :aria-label="authStore.user ? 'Logout' : 'Login'" @click="authStore.user ? handleLogout() : handleLogin()"
          class="px-2!" />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

import { loginUser } from '~/utils/firebase/auth';
import { signOutUser } from '~/utils/firebase/auth';

const authStore = useAuth()
const route = useRoute()

const demoLinks = [
  { label: "Dashboard", to: "/" },
  { label: "Properties", to: "/properties" },
  { label: "Agents", to: "/" },
  { label: "Profile", to: "/" },
]

const password = ref('admin1');
const email = ref('admin1@test.com');

async function handleLogin() {
  authStore.setLoading(true);
  try {
    await loginUser(email.value, password.value);
  } catch (error) {
    console.log(error);
    authStore.setLoading(false);
  }
}

async function handleLogout() {
  authStore.setLoading(true);
  try {
    await signOutUser();
  } catch (error) {
    console.log(error);
    authStore.setLoading(false);
  }
}
</script>
