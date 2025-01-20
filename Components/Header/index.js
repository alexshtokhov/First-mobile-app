import {Text, View } from 'react-native';
import styles from './Header.styles';
import BackArrow from "../../assets/icons/backArrow";
import ClockIcon from "../../assets/icons/clockIcon";
import SettingsIcon from "../../assets/icons/settingsIcon";

const  Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backArrowWrapper}>
        <BackArrow />
      </View>
      <Text style={styles.title}>BitGate</Text>
      <View style={styles.profileIcons}>
        <ClockIcon />
        <SettingsIcon />
      </View>
    </View>
  );
}
export default Header;