import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import {
  setLanguage,
  initializeLanguage,
  selectCurrentLanguage,
  selectAvailableLanguages,
  selectIsInitialized,
  selectIsRTL,
  selectCurrentLanguageInfo,
} from "../redux/slices/languageSlice";

export const useLanguage = () => {
  const dispatch = useDispatch();
  const { t, i18n, ready } = useTranslation();

  const currentLanguage = useSelector(selectCurrentLanguage);
  const availableLanguages = useSelector(selectAvailableLanguages);
  const isInitialized = useSelector(selectIsInitialized);
  const isRTL = useSelector(selectIsRTL);
  const language = useSelector(selectCurrentLanguageInfo);

  // Initialize language on first load with better error handling
  useEffect(() => {
    if (!isInitialized && ready && i18n.language) {
      const detectedLang = i18n.language;

      // Check if detected language exists in available languages
      const languageExists = availableLanguages && availableLanguages[detectedLang];

      if (languageExists) {
        dispatch(initializeLanguage(detectedLang));
      } else {
        // Fallback to default language (e.g., 'en')
        const fallbackLang = "en";
        if (availableLanguages && availableLanguages[fallbackLang]) {
          dispatch(initializeLanguage(fallbackLang));
        }
      }
    }
  }, [dispatch, isInitialized, ready, i18n.language, availableLanguages]);

  // Change language function with validation
  const changeLanguage = (langCode) => {
    if (availableLanguages && availableLanguages[langCode]) {
      dispatch(setLanguage(langCode));
    } else {
      console.warn(`Language code "${langCode}" not found in available languages`);
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
