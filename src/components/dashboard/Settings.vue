<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-card>
          <v-list rounded>
            <v-subheader>{{ $t('dashboard.settings') }}</v-subheader>
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
                  <v-list-item-subtitle v-text="item.description"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-card>
          <v-toolbar flat>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title class="headline">{{ items[currentTabIndex].text }}</v-toolbar-title>
          </v-toolbar>
          <v-divider></v-divider>
          <v-list-item-group v-show="currentTabIndex===0" class="px-4">
            <v-list-item>
              <v-list-item-title>{{ $t('dashboard.name') }}</v-list-item-title>
              <v-list-item-subtitle class="text-right">
                <v-text-field
                  value="Dong Huu Hieu"
                ></v-text-field>
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>{{ $t('dashboard.email') }}</v-list-item-title>
              <v-list-item-subtitle class="text-right">
                <v-text-field
                  value="donghuuhieu1520@gmail.com"
                ></v-text-field>
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>{{ $t('dashboard.gender') }}</v-list-item-title>
              <v-list-item-subtitle class="text-right">
                <v-select
                  :items="genders"
                ></v-select>
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>{{ $t('dashboard.birthday') }}</v-list-item-title>
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
              <v-list-item-title>{{ $t('dashboard.darkMode') }}</v-list-item-title>
              <v-list-item-subtitle class="text-right">
                <v-switch
                  class="px-4"
                  v-model="darkMode"
                  :label="nextDarkModeSwitchLabel"
                ></v-switch>
              </v-list-item-subtitle>
            </v-list-item>
          </v-list-item-group>
          <v-list-item-group v-show="currentTabIndex===2"  class="px-4">
            <v-list-item>
              <v-list-item-title>{{ $t('dashboard.language') }}</v-list-item-title>
              <v-list-item-subtitle class="text-right">
                <v-select
                  v-model="languageSelected"
                  return-object
                  :items="languages"
                ></v-select>
              </v-list-item-subtitle>
            </v-list-item>
          </v-list-item-group>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" right @click="applySetting">{{ $t('dashboard.apply') }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import i18n from '@/plugins/i18n'
const lang = i18n.t.bind(i18n)

export default {
  data () {
    return {
      languageSelected: {
        value: this.$store.state.preferences.lang
      },
      languages: [
        {
          text: lang('dashboard.countries.en'),
          value: 'en'
        },
        {
          text: lang('dashboard.countries.vi'),
          value: 'vi'
        }
      ],
      genders: [
        {
          text: lang('dashboard.genders.female'),
          value: 'female'
        },
        {
          text: lang('dashboard.genders.male'),
          value: 'male'
        },
        {
          text: lang('dashboard.genders.other'),
          value: 'other'
        }
      ],
      items: [
        { text: lang('dashboard.account'), icon: 'mdi-account', description: lang('dashboard.accountDescription') },
        { text: lang('dashboard.appearance'), icon: 'mdi-emoticon', description: lang('dashboard.appearanceDescription') },
        { text: lang('dashboard.language'), icon: 'mdi-translate', description: lang('dashboard.languageDescription') },
        { text: lang('dashboard.notification'), icon: 'mdi-bell', description: lang('dashboard.notificationDescription') }
      ],
      currentTabIndex: 0,
      darkMode: this.$store.state.preferences.darkMode
    }
  },
  methods: {
    applySetting () {
      if (this.currentTabIndex === 1) {
        this.$store.commit('CHANGE_DARKMODE', this.darkMode)
        window.location.reload()
      }

      if (this.currentTabIndex === 2) {
        this.$store.commit('CHANGE_LANG', this.languageSelected.value)
        window.location.reload()
      }
    }
  },
  metaInfo: {
    title: lang('dashboard.settings')
  },
  computed: {
    nextDarkModeSwitchLabel () {
      return this.darkMode ? lang('dashboard.off') : lang('dashboard.on')
    }
  }
}
</script>
