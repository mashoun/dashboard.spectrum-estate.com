<template>
  <UApp>
    <UContainer class="p-4">
      <p>{{ authStore.user ? authStore.user.email : 'No user logged in' }}</p>
      <hr class="my-8">
      <div class="w-fit flex gap-4 my-2 flex-col">
        <UInput v-model="email" placeholder="Enter your email" />
        <UInput v-model="password" placeholder="Password" :type="show ? 'text' : 'password'"
            :ui="{ trailing: 'pe-1' }">
            <template #trailing>
              <UButton color="neutral" variant="link" size="sm" :icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                :aria-label="show ? 'Hide password' : 'Show password'" :aria-pressed="show" aria-controls="password"
                @click="show = !show" />
            </template>
          </UInput>
        <div class="flex gap-3">
          <UButton variant="ghost" @click="signOutUser">Logout</UButton>
          <UButton class="w-fit" @click="loginUser(email, password)">Login</UButton>
        </div>
      </div>
    </UContainer>
  </UApp>


</template>
<script setup lang="ts">
import { loginUser } from '~/utils/firebase/auth';
import { signOutUser } from '~/utils/firebase/auth';

const authStore = useAuth();

const show = ref(false);
const password = ref('2026#Spectrum');
const email = ref('rodolph.spectrum@gmail.com');


</script>