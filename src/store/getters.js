export default {
  language ({ preferences }) {
    return preferences.lang
  },
  hasToken ({ authorization }) {
    return !!authorization.token
  },
  token ({ authorization }) {
    return authorization.token
  },
  isDarkMode ({ preferences }) {
    return preferences.darkMode
  }
}
