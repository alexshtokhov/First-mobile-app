import {SafeAreaView } from 'react-native';
import styles from './MainPageStyles';
import Header from "../Header";

const  MainPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
    </SafeAreaView>
  );
}
export default MainPage;