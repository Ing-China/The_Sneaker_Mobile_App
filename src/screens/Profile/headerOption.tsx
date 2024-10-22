import {HeaderTitleComponent} from '../../components';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

const ProfileHeaderOption = (): NativeStackNavigationOptions => {
  return {
    headerTitle: () => <HeaderTitleComponent title="Profile" />,
  };
};

export default ProfileHeaderOption;
