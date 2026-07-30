v<script setup lang="ts">
import {
  FileClock,
  Gauge,
  KeyRound,
  Settings,
  ShieldCheck,
  UserCog,
  Users,
} from 'lucide-vue-next'

const navigationItems = [
  {
    label: 'Dashboard',
    routeName: 'dashboard',
    icon: Gauge,
  },
  {
    label: 'Users',
    routeName: 'users',
    icon: Users,
  },
  {
    label: 'Roles',
    routeName: 'roles',
    icon: UserCog,
  },
  {
    label: 'Permissions',
    routeName: 'permissions',
    icon: KeyRound,
  },
  {
    label: 'Audit logs',
    routeName: 'audit-logs',
    icon: FileClock,
  },
  {
    label: 'Settings',
    routeName: 'settings',
    icon: Settings,
  },
]
</script>

<template>
  <aside
    class="flex min-h-screen w-64 flex-col border-r border-zinc-800 bg-zinc-950 text-white"
  >
    <header class="flex h-20 items-center gap-3 border-b border-zinc-800 px-6">
      <div
        class="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-zinc-950"
      >
        <ShieldCheck :size="22" />
      </div>

      <div>
        <p class="font-bold">SecureOps</p>
        <p class="text-xs text-zinc-400">Security platform</p>
      </div>
    </header>

    <nav class="flex-1 space-y-1 p-4">
      <RouterLink
        v-for="item in navigationItems"
        :key="item.routeName"
        :to="{ name: item.routeName }"
        class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
        active-class="bg-zinc-800 text-white"
      >
        <component :is="item.icon" :size="19" />

        <span>{{ item.label }}</span>
      </RouterLink>
    </nav>

    <footer class="border-t border-zinc-800 p-4">
      <p class="text-xs text-zinc-500">
        SecureOps v1.0.0
      </p>
    </footer>
  </aside>
</template>
