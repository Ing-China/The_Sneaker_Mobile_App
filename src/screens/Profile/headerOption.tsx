import {HeaderTitleComponent} from '../../components';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {useThemeContext} from '../../hooks';

const ProfileHeaderOption = (): NativeStackNavigationOptions => {
  const {colors} = useThemeContext();
  return {
    headerTitle: () => <HeaderTitleComponent title="Profile" />,
    headerStyle: {
      backgroundColor: colors.background,
    },
  };
};

export default ProfileHeaderOption;
