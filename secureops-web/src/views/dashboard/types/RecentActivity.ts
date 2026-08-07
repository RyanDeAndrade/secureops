import type { Component } from 'vue'

export interface RecentActivity {
  id: number
  title: string
  description: string
  time: string
  icon: Component
}
