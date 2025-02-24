import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImageList = ({ images }) => {
  return (
    <View style={styles.container}>
      {images.map((imageUrl, index) => (
        <Image key={index} source={{ uri: imageUrl }} style={styles.image} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 150,
    margin: 10,
    borderRadius: 10,
  },
});

export default ImageList;