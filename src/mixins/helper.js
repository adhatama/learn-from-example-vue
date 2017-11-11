export default {
  methods: {
    redirect: function (routerName) {
      this.$router.push({ name: routerName })
    }
  }
}
