import React from 'react';
import { View, Button, Alert } from 'react-native';

const AlertButton = ({ message }) => {
  const showAlert = () => {
    Alert.alert("Alerta", message);
  };

  return (
    <View>
      <Button title="Mostrar Alerta" onPress={showAlert} />
    </View>
  );
};

export default AlertButton;
