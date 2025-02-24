import React, { useState } from 'react';
import { View } from 'react-native';
import ImageList from './ImageList';

const ImageGallery = () => {
  const [images, setImages] = useState([
    'https://picsum.photos/200/150?random=1',
    'https://picsum.photos/200/150?random=2',
    'https://picsum.photos/200/150?random=3',
    'https://source.unsplash.com/random/200x150?sig=4',
    'https://source.unsplash.com/random/200x150?sig=5',
  ]);

  return (
    <View>
      <ImageList images={images} />
    </View>
  );
};

export default ImageGallery;
