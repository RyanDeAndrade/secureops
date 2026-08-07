export interface SecurityAlert {
  id: number
  title: string
  source: string
  severity: 'high' | 'medium' | 'low'
}
