import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    width: '90%',
  },

  slide: {
    height: '140px',
    width: '90%',
  },

  slideText: {
    fontSize: 24,
    color: 'white',
  },

  pagination: {
    flexDirection: 'row',
    alignSelf: 'center',
  },

  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#888',
    margin: 5,
  },
  activeDot: {
    backgroundColor: 'white',
  },
});
export default styles;