import {Text, View} from 'react-native';
import {HeaderTitleProps} from './headerTitleProp';
import styles from './style';

const HeaderTitleComponent: React.FC<HeaderTitleProps> = ({
  title,
  titleStyle,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </View>
  );
};

export default HeaderTitleComponent;
