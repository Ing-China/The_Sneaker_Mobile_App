import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {ReactNode, useEffect, useMemo, useState} from 'react';
import {ColorSchemeName} from 'react-native';

const THEME_ASYNC_STORAGE_KEY = 'THEME_STATE';

type Props = {
  children: ReactNode;
};

export type ThemeContextState = {
  theme: ColorSchemeName | null; // Allow null for system theme
  setTheme: React.Dispatch<React.SetStateAction<ColorSchemeName | null>>;
  loading: boolean;
};

export const ThemeContext = React.createContext<ThemeContextState | undefined>(
  undefined,
);

export default function ThemeProvider({children}: Props) {
  const [theme, setTheme] = useState<ColorSchemeName | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const storedTheme = (await AsyncStorage.getItem(
        THEME_ASYNC_STORAGE_KEY,
      )) as ColorSchemeName;
      setTheme(storedTheme);
      setLoading(false);
    };
    load();
  }, []);

  useEffect(() => {
    if (theme) {
      AsyncStorage.setItem(THEME_ASYNC_STORAGE_KEY, theme);
    } else {
      AsyncStorage.removeItem(THEME_ASYNC_STORAGE_KEY);
    }
  }, [theme]);

  const contextState = useMemo(
    () => ({loading, setTheme, theme}),
    [theme, loading],
  );

  if (loading) {
    return null; // Optionally render a loading indicator here
  }

  return (
    <ThemeContext.Provider value={contextState}>
      {children}
    </ThemeContext.Provider>
  );
}
