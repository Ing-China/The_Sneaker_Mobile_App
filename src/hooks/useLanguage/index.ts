import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LANGUAGE_KEY = '@app_language';

const useLanguage = () => {
  const {i18n} = useTranslation();

  // Load the language from AsyncStorage when the hook is used
  useEffect(() => {
    const loadLanguage = async () => {
      const savedLanguage = await AsyncStorage.getItem(LANGUAGE_KEY);
      if (savedLanguage) {
        i18n.changeLanguage(savedLanguage);
      }
    };

    loadLanguage();
  }, [i18n]);

  // Function to save the language preference
  const setLanguage = async (language: string) => {
    await AsyncStorage.setItem(LANGUAGE_KEY, language);
    i18n.changeLanguage(language);
  };

  return {setLanguage};
};

export default useLanguage;
