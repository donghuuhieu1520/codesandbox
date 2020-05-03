export default {
  CHANGE_DARKMODE: ({ preferences }, value) => { preferences.darkMode = !!value },
  CHANGE_LANG: ({ preferences }, lang) => { preferences.lang = lang },
  DO_LOGOUT: ({ authorization }) => { authorization.token = '' }
}
