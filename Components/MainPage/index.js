import {SafeAreaView } from 'react-native';
import styles from './MainPage.styles';
import Header from "../Header";
import Slider from "../Slider";

const  MainPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Slider />
    </SafeAreaView>
  );
}
export default MainPage;