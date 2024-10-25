import {useState, useEffect} from 'react';
import {useColorScheme} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DarkTheme, LightTheme, Theme} from '../../constants';

const THEME_KEY = '@app_theme';

type UseThemeSwitcherReturn = {
  theme: Theme;
  toggleTheme: () => void;
};

const useThemeSwitcher = (): UseThemeSwitcherReturn => {
  const systemScheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>(LightTheme);

  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem(THEME_KEY);
      if (savedTheme) {
        setTheme(savedTheme === 'dark' ? DarkTheme : LightTheme);
      } else {
        setTheme(systemScheme === 'dark' ? DarkTheme : LightTheme);
      }
    };

    loadTheme();
  }, [systemScheme]);

  const toggleTheme = async () => {
    const newTheme = theme === LightTheme ? DarkTheme : LightTheme;
    setTheme(newTheme);
    await AsyncStorage.setItem(
      THEME_KEY,
      newTheme === DarkTheme ? 'dark' : 'light',
    );
  };

  return {theme, toggleTheme};
};

export default useThemeSwitcher;
