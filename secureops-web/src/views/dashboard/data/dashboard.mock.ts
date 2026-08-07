
import {
  FileText,
  LogIn,
  ShieldAlert,
  UserPlus,
} from 'lucide-vue-next'

import type { SecurityAlert } from '../types/SecurityAlert'
import type { RecentActivity } from '../types/RecentActivity'

export const recentActivities: RecentActivity[] = [
  {
    id: 1,
    title: 'New user created',
    description: 'Administrator created the user Maria Silva.',
    time: '5 minutes ago',
    icon: UserPlus,
  },
  {
    id: 2,
    title: 'Successful login',
    description: 'Administrator signed in successfully.',
    time: '18 minutes ago',
    icon: LogIn,
  },
  {
    id: 3,
    title: 'Security alert detected',
    description: 'Multiple failed login attempts were detected.',
    time: '36 minutes ago',
    icon: ShieldAlert,
  },
  {
    id: 4,
    title: 'Audit report exported',
    description: 'The audit activity report was exported.',
    time: '1 hour ago',
    icon: FileText,
  },
]

export const securityAlerts: SecurityAlert[] = [  {
    id: 1,
    title: 'Multiple failed login attempts',
    source: 'IP 192.168.1.24',
    severity: 'high',
  },
  {
    id: 2,
    title: 'User permission changed',
    source: 'Administrator account',
    severity: 'medium',
  },
  {
    id: 3,
    title: 'Unusual access location',
    source: 'Dublin, Ireland',
    severity: 'low',
  },
]
