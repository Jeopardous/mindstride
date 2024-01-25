
import i18next from 'i18next';
import en from '../locales/en.json'
import hindi from '../locales/hindi.json'
import sp from '../locales/sp.json'

import { initReactI18next } from 'react-i18next';


const resources={
    en:{translation:en},
    hindi:{translation:hindi},
    sp:{translation:sp}

}

i18next.use(initReactI18next).init({
  compatibilityJSON:"v3",
    resources,
    lng:'en',
    fallbackLng:'en',
})

export default i18next;