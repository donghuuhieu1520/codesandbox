<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid>
        <v-row
          align="center"
          justify="center">
          <v-col
            cols="12"
            sm="8"
            md="8">
            <v-card
              class="elevation-0"
              outlined>
              <v-toolbar
                color="primary"
                dark
                flat>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                <v-toolbar-title>{{ $store.state.appName }}</v-toolbar-title>
              </v-toolbar>
              <v-card-text class="text-center">
                <p class="headline mb-0 font-weight-medium">{{ $t('signup.title') }}</p>
                <p class="mt-0 subtitle-1">{{ $t('signup.subtitle') }}</p>
              </v-card-text>
              <v-card-text>
                <v-row>
                  <v-col xs="12" md="7">
                    <v-form class="px-3">
                      <v-text-field
                        dense
                        :label="$t('signup.account')"
                        v-model="email"
                        :error="emailError"
                        outlined
                        :rules="[rules.required, rules.emailMatch, rules.min]"
                        type="email"
                        autofocus
                        @keydown.enter.prevent="doSignUp"/>
                      <v-row cols="12">
                        <v-col xs="6">
                          <v-text-field
                            dense
                            :label="$t('signup.firstName')"
                            v-model="firstName"
                            outlined
                            :rules="[rules.required]"
                            type="text"
                            @keydown.enter.prevent="doSignUp"/>
                        </v-col>
                        <v-col xs="6">
                          <v-text-field
                            dense
                            :label="$t('signup.lastName')"
                            v-model="lastName"
                            outlined
                            :rules="[rules.required]"
                            type="text"
                            @keydown.enter.prevent="doSignUp"/>
                        </v-col>
                      </v-row>
                      <v-text-field
                        dense
                        id="password"
                        :label="$t('signup.password')"
                        v-model="password"
                        outlined
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        :rules="[rules.required]"
                        @keydown.enter.prevent="doSignUp"
                        @click:append="showPassword = !showPassword"/>
                      <v-text-field
                        dense
                        id="rePassword"
                        :label="$t('signup.rePassword')"
                        v-model="rePassword"
                        outlined
                        :error="rePasswordError"
                        :append-icon="showRePassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showRePassword ? 'text' : 'password'"
                        :rules="[rules.required]"
                        @keydown.enter.prevent="doSignUp"
                        @keyup="debouncedPasswordMatch"
                        @click:append="showRePassword = !showRePassword"/>
                      <v-row cols="12" class="mt-5">
                        <v-col cols="6">
                          <router-link :to="{ name: 'signin' }" v-slot="{ href }">
                            <v-btn :href="href" text color="primary">{{ $t('signup.login') }}</v-btn>
                          </router-link>
                        </v-col>
                        <v-col cols="6" class="text-right">
                          <v-btn
                            color="primary"
                            right
                            @click="doSignUp">
                            {{ $t('signup.signup') }}
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-col>
                  <v-col xs="12" md="5">
                    <v-img
                      src="@/assets/account.svg" >
                    </v-img>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import isEmail from 'validator/lib/isEmail'
import lang from '@/util/lang'
import { debounce } from 'lodash'

export default {
  data () {
    return {
      email: '',
      emailError: false,
      password: '',
      rePassword: '',
      rePasswordError: false,
      showPassword: false,
      showRePassword: false,
      lastName: '',
      firstName: '',
      rules: {
        required: v => !!v || lang('common.validator.required'),
        min: v => v.length >= 8 || lang('common.validator.minChar'),
        emailMatch: (v) => isEmail(v) || lang('common.validator.notEmail')
      }
    }
  },
  created () {
    this.debouncedPasswordMatch = debounce(this.passwordMatch, 500)
  },
  methods: {
    doSignUp () {
    },
    passwordMatch () {
      this.rePasswordError = this.password !== this.rePassword
    }
  },
  metaInfo: {
    title: lang('signup.title')
  }
}
</script>
