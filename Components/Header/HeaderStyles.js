import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    width: '95%',
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  backArrowWrapper: {
    width: '15%',
  },

  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },

  profileIcons: {
    width: '100px',
    flexDirection: 'row',
    gap: 10,
  }
});
export default styles;