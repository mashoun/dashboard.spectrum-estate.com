<template>
  <h1>app.vue</h1>
  <p>{{ staticStore.developer.tagline }}</p>
  <hr>
  {{ getName() }}
</template>
<script setup lang="ts">
import { getName } from '@/utils';
const staticStore = useStaticStore()
</script>