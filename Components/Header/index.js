import {Text, View } from 'react-native';
import styles from './HeaderStyles';

const  Header = () => {
  return (
    <View >
      <Text style={styles.title}>BitGate</Text>
    </View>
  );
}
export default Header;