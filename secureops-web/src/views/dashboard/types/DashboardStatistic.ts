import type { Component } from 'vue'

export interface DashboardStatistic {
  label: string
  value: number
  description: string
  trend: string
  trendDirection: 'up' | 'down'
  icon: Component
}
