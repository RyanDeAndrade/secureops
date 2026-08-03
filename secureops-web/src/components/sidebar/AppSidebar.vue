<script setup lang="ts">
import {
  FileClock,
  Gauge,
  KeyRound,
  Settings,
  UserCog,
  Users,
} from 'lucide-vue-next'

import SidebarFooter from '@/components/sidebar/SidebarFooter.vue'
import SidebarHeader from '@/components/sidebar/SidebarHeader.vue'
import SidebarItem from '@/components/sidebar/SidebarItem.vue'

defineProps<{
  collapsed: boolean
}>()

const emit = defineEmits<{
  toggle: []
}>()

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
    :class="collapsed ? 'w-20' : 'w-64'"
    class="flex min-h-screen flex-col border-r border-zinc-800 bg-zinc-950 text-white transition-all duration-300"
  >
    <SidebarHeader
      :collapsed="collapsed"
      @toggle="emit('toggle')"
    />

    <nav class="flex-1 space-y-1 p-4">
      <SidebarItem
        v-for="item in navigationItems"
        :key="item.routeName"
        :label="item.label"
        :route-name="item.routeName"
        :icon="item.icon"
        :collapsed="collapsed"
      />
    </nav>

    <SidebarFooter
      :collapsed="collapsed"
      @toggle="emit('toggle')"
    />
  </aside>
</template>
