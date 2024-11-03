import React, { useRef, useState } from 'react';
import styles from './SliderStyles';
import { View, FlatList, Dimensions, Text, TouchableOpacity } from 'react-native';

const data = [
  { id: '1', color: 'red' },
  { id: '2', color: 'blue' },
  { id: '3', color: 'green' },
  { id: '4', color: 'purple' },
];

const { width } = Dimensions.get('window');

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const goToSlide = (index) => {
    flatListRef.current.scrollToOffset({ offset: index * width, animated: true });
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        snapToAlignment="center"
        snapToInterval={width}
        decelerationRate="fast"
        renderItem={({ item }) => (
          <View style={[styles.slide, { backgroundColor: item.color }]}>
            <Text style={styles.slideText}>{item.color}</Text>
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
}
export default Slider;

