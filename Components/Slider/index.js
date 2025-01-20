import React, {useRef, useState} from 'react';
import { View, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import Card from "../Card";
import styles from "./Slider.styles";

const data = [
  { id: '1', title: 'red', text: '1698.00' },
  { id: '2', title: 'blue', text: '395.00' },
  { id: '3', title: 'green', text: '1265.00' },
  { id: '4', title: 'purple', text: '5593.00' },
];

// Рассчитываем ширину экрана минус 10%
const screenWidth = Dimensions.get('window').width;
const slideWidth = screenWidth * 0.9;
const separatorWidth = 10;
const snapInterval = screenWidth - separatorWidth * 2;



const Slider = () => {
  // const dispatch = useDispatch();
  // const user = useSelector(userData);
  // const currentWallet = useSelector(walletData);
  // const wallets = user?.wallets

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / slideWidth);
    setCurrentIndex(index);
  };

  // const handleChangeIndex = (index) => {
  //   setCurrentIndex(index);
  //
  //   dispatch(setActiveWallet({...wallets[index], index: index}));
  // };

  const goToSlide = (index) => {
    flatListRef.current.scrollToOffset({ offset: index * slideWidth, animated: true });
    setCurrentIndex(index);
  };

  // useEffect(() => {
  //   if (currentWallet && currentWallet.index !== undefined) {
  //     setCurrentIndex(currentWallet.index);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [currentWallet]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={snapInterval}
        decelerationRate="fast"
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={() => <View style={{ width: separatorWidth }} />}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Card key={item.id} card={item} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.pagination}>
        {data.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.dot, currentIndex === index && styles.activeDot]}
            onPress={() => goToSlide(index)}
          />
        ))}
      </View>
    </View>
  );
};

export default Slider;


