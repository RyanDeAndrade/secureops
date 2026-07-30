<script setup lang="ts">
import { Activity, ShieldCheck, UserCheck, Users } from 'lucide-vue-next'

const statistics = [
  {
    label: 'Total users',
    value: 248,
    icon: Users,
  },
  {
    label: 'Active users',
    value: 231,
    icon: UserCheck,
  },
  {
    label: 'Security alerts',
    value: 7,
    icon: ShieldCheck,
  },
  {
    label: 'Activities today',
    value: 84,
    icon: Activity,
  },
]
</script>

<template>
  <main class="min-h-screen bg-zinc-100 p-6 lg:p-10">
    <div class="mx-auto max-w-7xl">
      <header class="mb-8">
        <p class="text-sm font-semibold text-zinc-500">SecureOps</p>

        <h1 class="mt-1 text-3xl font-bold text-zinc-900">Security dashboard</h1>

        <p class="mt-2 text-zinc-500">Monitor users, activities and security events.</p>
      </header>

      <section class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <article
          v-for="statistic in statistics"
          :key="statistic.label"
          class="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
        >
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-zinc-500">
                {{ statistic.label }}
              </p>

              <p class="mt-2 text-3xl font-bold text-zinc-900">
                {{ statistic.value }}
              </p>
            </div>

            <div
              class="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700"
            >
              <component :is="statistic.icon" :size="21" />
            </div>
          </div>
        </article>
      </section>

      <section
        class="mt-6 rounded-2xl border border-dashed border-zinc-300 bg-white p-10 text-center"
      >
        <ShieldCheck class="mx-auto text-zinc-400" :size="42" />

        <h2 class="mt-4 text-lg font-semibold text-zinc-900">SecureOps frontend is ready</h2>

        <p class="mt-2 text-sm text-zinc-500">
          The dashboard will be connected to the ASP.NET Core API next.
        </p>
      </section>
    </div>
  </main>
</template>
