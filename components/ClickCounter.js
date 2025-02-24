import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text> Has presionado el boton {count} veces</Text>
      <Button title="Presionar" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default ClickCounter;