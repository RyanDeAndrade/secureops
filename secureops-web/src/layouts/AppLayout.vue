<script setup lang="ts">
import { ref } from 'vue'

import AppSidebar from '@/components/sidebar/AppSidebar.vue'
import AppTopbar from '@/components/topbar/AppTopbar.vue'

const isSidebarCollapsed = ref(false)

function toggleSidebar() {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
}
</script>

<template>
  <div class="flex min-h-screen bg-zinc-100">
    <AppSidebar :collapsed="isSidebarCollapsed" @toggle="toggleSidebar" />

    <div class="flex min-w-0 flex-1 flex-col">
      <AppTopbar />

      <main class="flex-1 p-4 sm:p-6 lg:p-8">
        <RouterView />
      </main>
    </div>
  </div>
</template>
