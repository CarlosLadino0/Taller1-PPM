import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GuessForm from './GuessForm';

const Game = () => {
  const [correctAnswer] = useState('React Native'); 

  return (
    <View>
      <Text>🎯 Juego de Adivinanzas</Text>
      <Text>Pista: Es un framework de desarrollo móvil</Text>
      <GuessForm correctAnswer={correctAnswer} />
    </View>
  );
};

export default Game;