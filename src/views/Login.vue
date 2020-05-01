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
            md="4">
            <v-card
              class="elevation-0"
              outlined
              style="overflow: hidden;">
              <v-toolbar
                color="primary"
                dark
                flat>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                <v-toolbar-title>{{ $store.state.appName }}</v-toolbar-title>
              </v-toolbar>
              <v-card-text class="text-center">
                <p class="headline mb-0 font-weight-medium">{{ $t('login.title') }}</p>
                <p class="mt-0 subtitle-1">{{ $t('login.subtitle') }}</p>
              </v-card-text>
              <v-card-text>
                <transition
                  name="out">
                  <v-form
                    class="px-3"
                    v-if="loginState === 'email'">
                    <v-text-field
                      style="margin-bottom: -20px"
                      :label="$t('login.account')"
                      v-model="email"
                      :error="emailError"
                      outlined
                      :rules="[rules.required, rules.emailMatch, rules.min]"
                      name="login"
                      type="email"
                      autofocus
                      @keydown.enter.prevent="next"/>
                    <v-row cols="12" class="mt-5">
                      <v-col cols="6">
                        <router-link :to="{ name: 'signup' }" v-slot="{ href }">
                          <v-btn :href="href" text color="primary">{{ $t('login.create') }}</v-btn>
                        </router-link>
                      </v-col>
                      <v-col cols="6" class="text-right">
                        <v-btn
                          id="btn-next"
                          color="primary"
                          right
                          @click="next">
                          {{ $t('login.next') }}
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-form>
                </transition>
                <transition
                  name="in"
                  enter-active-class="animated fadeInRight"
                  leave-active-class="animated fadeOutRight">
                  <v-form
                    class="px-3"
                    v-if="loginState === 'password'">
                    <v-text-field
                      id="password"
                      :label="$t('login.password')"
                      v-model="password"
                      name="password"
                      outlined
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="showPassword ? 'text' : 'password'"
                      :rules="[rules.required]"
                      @keydown.enter.prevent="doLogin"
                      @click:append="showPassword = !showPassword"/>
                    <v-row cols="12" class="mt-5">
                      <v-col cols="6">
                        <v-btn text color="primary">{{ $t('login.forgot') }}</v-btn>
                      </v-col>
                      <v-col cols="6" class="text-right">
                        <v-btn
                          id="btn-login"
                          color="primary"
                          right
                          @click="doLogin">
                          {{ $t('login.login') }}
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-form>
                </transition>
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

export default {
  data () {
    return {
      loginState: 'email', // 'password'
      email: '',
      emailError: false,
      password: '',
      showPassword: false,
      rules: {
        required: v => !!v || lang('common.validator.required'),
        min: v => v.length >= 8 || lang('common.validator.minChar'),
        emailMatch: (v) => isEmail(v) || lang('common.validator.notEmail')
      }
    }
  },
  methods: {
    next () {
      if (isEmail(this.email)) {
        this.loginState = 'password'
      } else {
        this.emailError = true
      }
    }
  },
  metaInfo: {
    title: lang('login.title')
  }
}
</script>
