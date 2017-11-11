<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    
    <b-navbar-brand href="#">Vue - Learn from Example</b-navbar-brand>
    
    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
          <b-nav-item href="#" @click="redirect('home-index')">Home</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
          <!-- @click is syntatical sugar of v-on:click -->
          <!-- call method with router name in parameter to change page -->
          <b-nav-item href="#" @click="redirect('login')">Login</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
import helper from '@/mixins/helper'

export default {
  mixins: [helper]
}
</script>

