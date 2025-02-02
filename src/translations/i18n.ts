import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import kh from './locales/kh/index.json';
import en from './locales/en/index.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {translation: en},
    kh: {translation: kh},
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: 'v3',
});

export default i18n;
