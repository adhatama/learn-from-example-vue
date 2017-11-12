<template>
  <div class="container">
    <div class="mt-3"></div>
    <div class="row justify-content-center">
      <!-- Issue in v-for that needs key.
      Reference: https://github.com/vuejs/vetur/issues/261 -->
      <div class="col-sm-2 mb-2" v-for="(val, index) in users" :key='index'>
        <div class="card">
          <!-- :src is syntatic sugar for v-bind:src -->
          <img class="card-img-top" :src="val.avatar" alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title">{{ getFullname(val) }}</h4>
            <p class="card-text"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { list as userList } from '@/resources/users'

export default {
  data () {
    return {
      users: []
    }
  },

  created: function () {
    userList().then(response => {
      this.users = response.body.data

      // push array to array using spread
      // https://stackoverflow.com/a/12190371
      this.users.push(...response.body.data)
    })
  },

  methods: {
    getFullname: function (val) {
      return val ? val.first_name + ' ' + val.last_name : null
    }
  }
}
</script>
