import { createRouter, createWebHistory } from 'vue-router'

import AppLayout from '@/layouts/AppLayout.vue'
import AuditLogsView from '@/views/audit/AuditLogsView.vue'
import DashboardView from '@/views/dashboard/DashboardView.vue'
import PermissionsView from '@/views/permissions/PermissionsView.vue'
import RolesView from '@/views/roles/RolesView.vue'
import SettingsView from '@/views/settings/SettingsView.vue'
import UsersView from '@/views/users/UsersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '',
          redirect: '/dashboard',
        },
        {
          path: 'dashboard',
          name: 'dashboard',
          component: DashboardView,
        },
        {
          path: 'users',
          name: 'users',
          component: UsersView,
        },
        {
          path: 'roles',
          name: 'roles',
          component: RolesView,
        },
        {
          path: 'permissions',
          name: 'permissions',
          component: PermissionsView,
        },
        {
          path: 'audit-logs',
          name: 'audit-logs',
          component: AuditLogsView,
        },
        {
          path: 'settings',
          name: 'settings',
          component: SettingsView,
        },
      ],
    },
  ],
})

export default router
