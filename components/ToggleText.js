import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const ToggleText = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <Button 
        title={visible ? "Ocultar texto" : "Mostrar texto"} 
        onPress={() => setVisible(!visible)} 
      />
      {visible && 
      <Text> este es el texto oculto </Text>}
    </View>
  );
};

export default ToggleText;
