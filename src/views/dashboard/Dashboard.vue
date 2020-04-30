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
          :to="{ name: item.pathName }"
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
       <v-icon dark left>mdi-plus</v-icon>{{ $t('dashboard.new') }}
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
  props: {
    source: String
  },
  data () {
    return {
      items: [
        { icon: 'mdi-view-dashboard', title: this.$t('dashboard.newfeeds'), pathName: 'newfeeds' },
        { icon: 'mdi-star', title: this.$t('dashboard.populars'), pathName: 'populars' },
        { icon: 'mdi-archive', title: this.$t('dashboard.archived'), pathName: 'archived' },
        { icon: 'mdi-cog', title: this.$t('dashboard.settings'), pathName: 'settings' }
      ],
      userItems: [
        { title: this.$t('dashboard.myProfile'), icon: 'mdi-account' },
        { title: this.$t('dashboard.signOut'), icon: 'mdi-logout' }
      ],
      drawer: null
    }
  }
}
</script>
