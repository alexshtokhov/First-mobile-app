import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '20%',
    marginTop: '5%',
  },
  contentContainer: {
    paddingHorizontal: (screenWidth - slideWidth) / 2,
  },
  slide: {
    width: slideWidth,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'rgba(0, 120, 126, 0.3)',
  },
  slideText: {
    fontSize: 24,
    color: 'white',
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
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
});

export default styles;