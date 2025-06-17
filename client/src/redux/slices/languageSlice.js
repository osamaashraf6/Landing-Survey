import { createSlice } from '@reduxjs/toolkit';
import i18n from '../../i18n/config';

const languages = {
  en: {
    code: 'en',
    name: 'English',
    dir: 'ltr',
    flag: '🇺🇸'
  },
  ar: {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
    flag: '🇸🇦'
  }
};

const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem('i18nextLng');
  return savedLanguage && languages[savedLanguage] ? savedLanguage : 'en';
};

const initialState = {
  currentLanguage: getInitialLanguage(),
  availableLanguages: languages,
  isInitialized: false,
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      const langCode = action.payload;
      if (languages[langCode]) {
        state.currentLanguage = langCode;
        
        // Update i18next language
        i18n.changeLanguage(langCode);
        
        // Update document direction and language
        const direction = languages[langCode].dir;
        document.documentElement.dir = direction;
        document.documentElement.lang = langCode;
        
        // Update body classes for RTL styling
        document.body.classList.remove('rtl', 'ltr');
        document.body.classList.add(direction);
      }
    },
    
    initializeLanguage: (state, action) => {
      const langCode = action.payload || state.currentLanguage;
      state.currentLanguage = langCode;
      state.isInitialized = true;
      
      // Set initial document properties
      const direction = languages[langCode].dir;
      document.documentElement.dir = direction;
      document.documentElement.lang = langCode;
      document.body.classList.add(direction);
    }
  },
});

export const { 
  setLanguage, 
  initializeLanguage 
} = languageSlice.actions;

// Selectors
export const selectCurrentLanguage = (state) => state.language.currentLanguage;
export const selectAvailableLanguages = (state) => state.language.availableLanguages;
export const selectIsInitialized = (state) => state.language.isInitialized;
export const selectIsRTL = (state) => {
  const currentLang = state.language.currentLanguage;
  return languages[currentLang]?.dir === 'rtl';
};
export const selectCurrentLanguageInfo = (state) => {
  const currentLang = state.language.currentLanguage;
  return languages[currentLang];
};

export default languageSlice.reducer;