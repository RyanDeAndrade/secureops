<script setup lang="ts">
withDefaults(
  defineProps<{
    padding?: 'none' | 'small' | 'medium' | 'large'
  }>(),
  {
    padding: 'medium',
  },
)

const paddingClasses = {
  none: '',
  small: 'p-4',
  medium: 'p-5',
  large: 'p-6',
}
</script>

<template>
  <article
    :class="paddingClasses[padding]"
    class="rounded-2xl border border-zinc-200 bg-white shadow-sm"
  >
    <slot />
  </article>
</template>
