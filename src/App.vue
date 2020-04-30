<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list>
        <router-link v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          v-slot="{ href }">
          <v-list-item link :to="href">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{ $store.state.appName }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="primary">
       <v-icon dark left>mdi-plus</v-icon>New
      </v-btn>
      <v-btn icon class="mx-3">
        <v-badge
          color="pink"
          dot
          content="6">
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-avatar
            color="red"
            size="48"
            v-on="on"
            pointer>
            <a class="white--text headline pointer">HD</a>
          </v-avatar>
        </template>
        <v-list>
          <v-list-item
            link
            v-for="(item, index) in userItems"
            :key="index"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <vue-progress-bar></vue-progress-bar>
    <v-content>
      <router-view />
    </v-content>

    <v-footer app>
      <span>Made with <v-icon color="yellow">mdi-hand</v-icon> and <v-icon color="red">mdi-heart</v-icon> &copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  mounted () {
    this.$Progress.finish()
  },
  created () {
    this.$vuetify.theme.dark = true
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
  },
  props: {
    source: String
  },
  data: () => ({
    items: [
      { icon: 'mdi-view-dashboard', title: 'Newfeeds', to: '/' },
      { icon: 'mdi-star', title: 'Populars', to: '/populars' },
      { icon: 'mdi-archive', title: 'Archived', to: '/archived' },
      { icon: 'mdi-cog', title: 'Settings', to: '/settings' }
    ],
    userItems: [
      { title: 'My profile', icon: 'mdi-account' },
      { title: 'Sign out', icon: 'mdi-logout' }
    ],
    drawer: null
  })
}
</script>
