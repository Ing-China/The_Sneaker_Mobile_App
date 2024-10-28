import {Appearance} from 'react-native';
import {DarkTheme} from './darkTheme';
import {LightTheme} from './lightTheme';

export type Colors = {
  background: string;
  text: string;
  buttonBackground: string;
  buttonText: string;
};

const isDark = Appearance.getColorScheme() === 'dark';
export const colors: Colors = isDark ? DarkTheme : LightTheme;
