<script setup lang="ts">
import {
  Activity,
  ShieldAlert,
  UserCheck,
  Users,
} from 'lucide-vue-next'

import AppCard from '@/components/common/AppCard.vue'

import DashboardStatCard from './components/DashboardStatCard.vue'
import RecentActivityList from './components/RecentActivityList.vue'
import SecurityAlertsList from './components/SecurityAlertsList.vue'
import type { DashboardStatistic } from './types/DashboardStatistic'
const statistics: DashboardStatistic[] = [
  {
    label: 'Total users',
    value: 248,
    description: 'Since last month',
    trend: '+12%',
    trendDirection: 'up' as const,
    icon: Users,
  },
  {
    label: 'Active users',
    value: 231,
    description: '93.1% of all users',
    trend: '+4%',
    trendDirection: 'up' as const,
    icon: UserCheck,
  },
  {
    label: 'Security alerts',
    value: 7,
    description: 'Requires attention',
    trend: '-2',
    trendDirection: 'down' as const,
    icon: ShieldAlert,
  },
  {
    label: 'Activities today',
    value: 84,
    description: 'Recorded events',
    trend: '+18%',
    trendDirection: 'up' as const,
    icon: Activity,
  },
]
</script>

<template>
  <section>
    <header class="mb-8">
      <p class="text-sm font-semibold text-zinc-500">
        Overview
      </p>

      <h1 class="mt-1 text-3xl font-bold tracking-tight text-zinc-900">
        Security dashboard
      </h1>

      <p class="mt-2 text-sm text-zinc-500">
        Monitor users, activities and security events across the platform.
      </p>
    </header>

    <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <DashboardStatCard
        v-for="statistic in statistics"
        :key="statistic.label"
        :label="statistic.label"
        :value="statistic.value"
        :description="statistic.description"
        :trend="statistic.trend"
        :trend-direction="statistic.trendDirection"
        :icon="statistic.icon"
      />
    </div>

    <div class="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
      <AppCard padding="large">
        <div class="mb-5">
          <h2 class="text-lg font-bold text-zinc-900">
            Recent activity
          </h2>

          <p class="mt-1 text-sm text-zinc-500">
            Latest actions recorded across the platform.
          </p>
        </div>

        <RecentActivityList />
      </AppCard>

      <AppCard padding="large">
        <div class="mb-5">
          <h2 class="text-lg font-bold text-zinc-900">
            Security alerts
          </h2>

          <p class="mt-1 text-sm text-zinc-500">
            Events that may require your attention.
          </p>
        </div>

        <SecurityAlertsList />
      </AppCard>
    </div>
  </section>
</template>
