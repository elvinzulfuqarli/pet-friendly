<template>

  <the-header></the-header>

  <the-hero></the-hero>
  <router-view></router-view>
</template>

<script setup>

import HomeView from './pages/HomeView.vue';
import TheHeader from './components/TheHeader.vue'
import TheHero from './components/TheHero.vue'

</script>
