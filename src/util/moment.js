import moment from 'moment'
import store from '@/store'

moment.locale(store.getters.language)

export default moment
