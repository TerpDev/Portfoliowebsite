import { createI18n } from 'vue-i18n'

// importeer je JSON files
import en from './lang/en/en.json'
import nl from './lang/nl/nl.json'

const i18n = createI18n({
    legacy: false, // heel belangrijk bij Vue 3 setup
    locale: 'en',  // standaard taal
    fallbackLocale: 'en',
    messages: {
        en,
        nl
    }
})

export default i18n
