import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: require('./locales/en/translation.json'),
      },
      hi: {
        translation: require('./locales/hi/translation.json'),
      },
      fr: {
        translation: require('./locales/fr/translation.json'),
      },
    },
    fallbackLng: 'en', // Default language if the detected language is not supported
    lng: 'en', // Default language to load with
    debug: true,
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
