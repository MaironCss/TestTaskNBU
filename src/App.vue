<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <header>
    <div class="naw-wrapper">
      <nav>
        <RouterLink to="/">Main</RouterLink> |
        <RouterLink to="/changed">Changed Currency</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  </v-app>
</template>

<style scoped lang="sass">
.v-application
	margin: 0 48px
.naw-wrapper
	padding: 24px
	display: flex
	align-items: center
	justify-content: center
</style>
