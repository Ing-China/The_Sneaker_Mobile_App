import {Button, Text, View} from 'react-native';
import {useLanguage, useThemeSwitcher} from '../../hooks';
import {useTranslation} from 'react-i18next';

const ProfileScreen: React.FC = () => {
  const {theme, toggleTheme} = useThemeSwitcher();
  const {setLanguage} = useLanguage();
  const {t} = useTranslation();
  return (
    <View
      style={{
        backgroundColor: theme.background,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: theme.text}}>Hello, World!</Text>
      <Text>{t('welcome')}</Text>

      <Button
        title="Toggle Theme"
        onPress={toggleTheme}
        color={theme.buttonBackground}
      />

      <Button title="Switch to Khmer" onPress={() => setLanguage('kh')} />
      <Button title="Switch to English" onPress={() => setLanguage('en')} />
    </View>
  );
};

export default ProfileScreen;
