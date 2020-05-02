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
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            class="mx-3"
            v-on="on">
            <v-badge
              color="pink"
              dot
              content="6">
              <v-icon>mdi-bell</v-icon>
            </v-badge>
          </v-btn>
        </template>
        <v-list style="max-width: 350px">
          <template v-for="(item, index) in notifications">
            <v-subheader
              v-if="item.header"
              :key="item.header"
              v-text="item.header"
            ></v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-item
              v-else
              :key="item.title"
              link
            >
              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-menu>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-avatar
            color="red"
            size="32"
            v-on="on"
            pointer>
            <a class="white--text pointer">HD</a>
          </v-avatar>
        </template>
        <v-list>
          <v-list-item
            link
            v-for="(item, index) in userItems"
            :key="index"
            :to="{ name: item.pathName, hash: item.hash }">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
          <v-list-item
            link
            @click="doLogOut">
            <v-list-item-action>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-action>
            <v-list-item-title>{{ $t('dashboard.signOut') }}</v-list-item-title>
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
      notifications: [
        { header: 'Today' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
        }
      ],
      userItems: [
        { title: this.$t('dashboard.myProfile'), pathName: 'settings', icon: 'mdi-account', hash: '#account' }
      ],
      drawer: null
    }
  },
  methods: {
    doLogOut () {
      this.$store.commit('DO_LOGOUT')
      this.$router.push({ name: 'signin' })
    }
  }
}
</script>
