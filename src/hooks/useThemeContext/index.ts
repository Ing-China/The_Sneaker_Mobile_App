import {useCallback, useContext} from 'react';
import {ColorSchemeName, useColorScheme} from 'react-native';
import {ThemeContext} from '../../contexts/ThemeProvider';
import {DarkTheme, LightTheme} from '../../constants';

export default function useThemeContext() {
  const context = useContext(ThemeContext);
  const systemColorScheme = useColorScheme();

  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }

  const {theme, loading, setTheme} = context;

  if (loading) {
    throw new Error('Tried to use ThemeContext before initialized');
  }

  const colorTheme: ColorSchemeName = theme ?? systemColorScheme ?? 'light';

  return {
    colors: colorTheme === 'dark' ? DarkTheme : LightTheme,
    setColorTheme: useCallback(
      (themeName: ColorSchemeName) => setTheme(themeName),
      [setTheme],
    ),
  };
}
