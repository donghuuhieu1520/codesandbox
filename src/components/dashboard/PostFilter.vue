<template>
  <v-card>
    <v-toolbar
      color="secondary"
      dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>{{ $t('dashboard.search') }}</v-toolbar-title>
    </v-toolbar>

    <v-card-content>
      <v-list two-line subheader>
        <v-subheader inset>{{ $t('dashboard.filter') }}</v-subheader>

        <v-list-item
          v-for="item in items"
          :key="item.title"
        >
          <v-list-item-avatar>
            <v-icon
              :class="[item.iconClass]"
              v-text="item.icon"
            ></v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon>
              <v-icon color="grey lighten-1">mdi-information</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card-content>
    <v-card-actions>
      <v-btn color="primary">{{ $t('dashboard.search') }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      { icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014' },
      { icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014' },
      { icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014' }
    ],
    items2: [
      { icon: 'mdi-assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
      { icon: 'mdi-call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' }
    ]
  })
}
</script>
