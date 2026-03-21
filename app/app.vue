<template>
  <UApp>
    <UContainer class="p-4">
      <p>{{ authStore.user ? authStore.user.email : 'No user logged in' }}</p>
      <hr class="my-8">
      <div class="w-fit flex gap-4 my-2 flex-col">
        <UInput id="email" autocomplete="email" v-model="email" placeholder="Enter your email" />
        <UInput id="password" autocomplete="password" v-model="password" placeholder="Password"
          :type="show ? 'text' : 'password'" :ui="{ trailing: 'pe-1' }">
          <template #trailing>
            <UButton color="neutral" variant="link" size="sm" :icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
              :aria-label="show ? 'Hide password' : 'Show password'" :aria-pressed="show" aria-controls="password"
              @click="show = !show" />
          </template>
        </UInput>
        <div class="flex gap-3">
          <UButton variant="ghost" @click="handleLogout">Logout</UButton>
          <UButton class="w-fit" @click="handleLogin">Login</UButton>
        </div>
      </div>
      <hr class="my-4">
      <div class="flex gap-4">
        <UButton @click="getPublicMain()">Get Public / main {}</UButton>
        <UButton @click="postPublicMain()">Post Public / main </UButton>
        <UButton @click="throwDemoError">Throw Demo Error</UButton>
      </div>
    </UContainer>
  </UApp>


</template>
<script setup lang="ts">
import { loginUser } from '~/utils/firebase/auth';
import { signOutUser } from '~/utils/firebase/auth';
import { getPublicMain, writePublicMain } from '~/utils/firebase/firestore';

const authStore = useAuth();
const config = useRuntimeConfig()

const show = ref(false);
// const password = ref(config.public.firebaseUser.password);
// const email = ref(config.public.firebaseUser.email);
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

function postPublicMain() {
  writePublicMain({ bio: 'Test bio-' + Math.random().toString(16).slice(2) })
}

function throwDemoError() {
  throw new Error('This is a demo error - ' + Math.random().toString(16).slice(2));
}



</script>