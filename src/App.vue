<template>
  <div>
    <vue-progress-bar></vue-progress-bar>
    <router-view />
  </div>
</template>

<script>
export default {
  mounted () {
    this.$Progress.finish()
  },
  created () {
    this.$vuetify.theme.dark = this.$store.state.preferences.darkMode
    this.$Progress.start()
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        const meta = to.meta.progress
        this.$Progress.parseMeta(meta)
      }
      this.$Progress.start()
      next()
    })
    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
  }
}
</script>
