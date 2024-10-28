import {Text, View} from 'react-native';
import {HeaderTitleProps} from './headerTitleProp';
import styles from './style';
import {useThemeContext} from '../../hooks';

const HeaderTitleComponent: React.FC<HeaderTitleProps> = ({
  title,
  titleStyle,
  containerStyle,
}) => {
  const {colors} = useThemeContext();

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle, {color: colors.text}]}>
        {title}
      </Text>
    </View>
  );
};

export default HeaderTitleComponent;
