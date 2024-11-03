import {Text, SafeAreaView } from 'react-native';
import styles from './MainPageStyles';
import Header from "../Header";

const  MainPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Text style={styles.title}>MainPage</Text>
    </SafeAreaView>
  );
}
export default MainPage;