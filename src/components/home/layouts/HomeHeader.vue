<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="#" @click="redirect('home')"><strong>Vue</strong> Learn From Example</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <!-- Use `prevent` on the `@click` to prevent the default link to work.
          If it doesn't use `prevent`, the url won't change to `/login` as expected -->
          <a class="nav-link" href="#" @click.prevent="redirect('login')">Login</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import helper from '@/mixins/helper'

export default {
  mixins: [helper]
}
</script>

<style scoped>
nav.navbar {
  background-color: #e3f2fd;
}
</style>
