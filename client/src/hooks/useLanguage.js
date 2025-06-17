import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import {
  setLanguage,
  initializeLanguage,
  selectCurrentLanguage,
  selectAvailableLanguages,
  selectIsInitialized,
  selectIsRTL,
  selectCurrentLanguageInfo,
} from '../redux/slices/languageSlice';

export const useLanguage = () => {
  const dispatch = useDispatch();
  const { t, i18n, ready } = useTranslation();
  
  const currentLanguage = useSelector(selectCurrentLanguage);
  const availableLanguages = useSelector(selectAvailableLanguages);
  const isInitialized = useSelector(selectIsInitialized);
  const isRTL = useSelector(selectIsRTL);
  const language = useSelector(selectCurrentLanguageInfo);

  // Initialize language on first load
  useEffect(() => {
    if (!isInitialized && ready) {
      const detectedLang = i18n.language;
      dispatch(initializeLanguage(detectedLang));
    }
  }, [dispatch, isInitialized, ready, i18n.language]);

  // Change language function - now synchronous
  const changeLanguage = (langCode) => {
    if (availableLanguages[langCode]) {
      dispatch(setLanguage(langCode));
    }
  };

  return {
    t,
    currentLanguage,
    changeLanguage,
    isRTL,
    isInitialized,
    availableLanguages,
    language,
    i18n,
    ready,
  };
};

