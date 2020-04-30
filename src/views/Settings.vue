<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-card>
          <v-list rounded>
            <v-subheader>SETTINGS</v-subheader>
            <v-list-item-group v-model="currentTabIndex" color="primary">
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                @click="currentTabIndex = i"
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-card>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline">{{ items[currentTabIndex].text }}</v-list-item-title>
              <v-list-item-subtitle>{{ items[currentTabIndex].description }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item-group v-show="currentTabIndex===0" class="px-4">
            <v-list-item>
              <v-list-item-title>Name</v-list-item-title>
              <v-list-item-subtitle class="text-right">
                <v-text-field
                  value="Dong Huu Hieu"
                ></v-text-field>
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Email</v-list-item-title>
              <v-list-item-subtitle class="text-right">
                <v-text-field
                  value="donghuuhieu1520@gmail.com"
                ></v-text-field>
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Gender</v-list-item-title>
              <v-list-item-subtitle class="text-right">
                <v-select
                  :items="['Female', 'Male', 'Other']"
                ></v-select>
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Birthday</v-list-item-title>
              <v-list-item-subtitle class="text-right">
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      value="01/01/2000"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-list-item-subtitle>
            </v-list-item>
          </v-list-item-group>
          <v-list-item-group v-show="currentTabIndex===1"  class="px-4">
            <v-list-item>
              <v-list-item-title>Dark mode</v-list-item-title>
              <v-list-item-subtitle class="text-right">
                <v-switch
                  v-model="switch1"
                  :label="`Switch 1`"
                ></v-switch>
              </v-list-item-subtitle>
            </v-list-item>
          </v-list-item-group>
          <v-list-item-group v-show="currentTabIndex===2"  class="px-4">
            <v-list-item>
              <v-list-item-title>Language</v-list-item-title>
              <v-list-item-subtitle class="text-right">
                <v-select
                  :items="['English', 'Vietnamese']"
                ></v-select>
              </v-list-item-subtitle>
            </v-list-item>
          </v-list-item-group>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" right>Apply</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    items: [
      { text: 'Account', icon: 'mdi-account', description: 'Change your profile' },
      { text: 'Appearance', icon: 'mdi-emoticon', description: 'Set up how CodePaper displayed' },
      { text: 'Language', icon: 'mdi-translate' },
      { text: 'Notification', icon: 'mdi-bell' }
    ],
    currentTabIndex: 0
  }),
  metaInfo: {
    title: 'Settings'
  }
}
</script>
