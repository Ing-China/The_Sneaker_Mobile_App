import {Button, Text, View} from 'react-native';
import {useLanguage} from '../../hooks'; // Adjust the path as needed
import {useTranslation} from 'react-i18next';
import useThemeContext from '../../hooks/useThemeContext'; // Adjust the path as needed

const ProfileScreen: React.FC = () => {
  const {setLanguage} = useLanguage();
  const {t} = useTranslation();
  const {colors, setColorTheme} = useThemeContext();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background, // Use dynamic background color
      }}>
      <Text style={{fontSize: 24, marginBottom: 20, color: colors.text}}>
        Hello, World!
      </Text>
      <Text style={{fontSize: 18, marginBottom: 20, color: colors.text}}>
        {t('welcome')}
      </Text>

      <Button
        title="Switch to Khmer"
        onPress={() => setLanguage('kh')}
        color="#007AFF" // Optional: Change the button color
      />
      <Button
        title="Switch to English"
        onPress={() => setLanguage('en')}
        color="#007AFF" // Optional: Change the button color
      />

      {/* Buttons for toggling themes */}
      <Button
        title="Switch to Light Mode"
        onPress={() => setColorTheme('light')}
        color="#007AFF" // Optional: Change the button color
      />
      <Button
        title="Switch to Dark Mode"
        onPress={() => setColorTheme('dark')}
        color="#007AFF" // Optional: Change the button color
      />
      <Button
        title="Follow Device Settings"
        onPress={() => setColorTheme(null)} // Set to null to follow device settings
        color="#007AFF" // Optional: Change the button color
      />
    </View>
  );
};

export default ProfileScreen;
