<script setup lang="ts">
const applicationName = 'SecureOps'
</script>

<template>
  <main class="home-view">
    <section class="welcome-card">
      <span class="badge">Secure platform</span>

      <h1>{{ applicationName }}</h1>

      <p>
        User management, access control and security monitoring platform.
      </p>
    </section>
  </main>
</template>

<style scoped>
.home-view {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: #f4f4f5;
}

.welcome-card {
  width: 100%;
  max-width: 640px;
  padding: 48px;
  border: 1px solid #e4e4e7;
  border-radius: 20px;
  background: #ffffff;
  text-align: center;
  box-shadow: 0 12px 40px rgb(0 0 0 / 8%);
}

.badge {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 999px;
  background: #18181b;
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
}

h1 {
  margin: 20px 0 10px;
  color: #18181b;
  font-size: 48px;
}

p {
  margin: 0;
  color: #71717a;
  font-size: 17px;
  line-height: 1.6;
}
</style>
