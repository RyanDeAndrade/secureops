<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
    disabled?: boolean
    loading?: boolean
  }>(),
  {
    label: '',
    type: 'button',
    variant: 'primary',
    disabled: false,
    loading: false,
  },
)

const variantClasses = {
  primary:
  'bg-zinc-900 text-white hover:bg-zinc-800 active:bg-black focus-visible:ring-zinc-500',
  secondary:
    'border border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-100 focus-visible:ring-zinc-400',
  danger:
   'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-400',
  ghost:
    'bg-transparent text-zinc-600 hover:bg-zinc-100 hover:bg-zinc-100 hover:text-zinc-900 focus-visible:ring-zinc-400',
}
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="variantClasses[variant]"
    class="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
  >
    <span
      v-if="loading"
      class="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent"
      aria-hidden="true"
    />

    <slot>
      {{ loading ? 'Loading...' : label }}
    </slot>
  </button>
</template>
