import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const GuessForm = ({ correctAnswer }) => {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const checkAnswer = () => {
    if (guess.toLowerCase() === correctAnswer.toLowerCase()) {
      setMessage('✅ ¡Correcto!');
    } else {
      setMessage('❌ Incorrecto, intenta de nuevo.');
    }
  };

  return (
    <View>
      <Text>Ingresa tu respuesta:</Text>
      <TextInput
        value={guess}
        onChangeText={setGuess}
        placeholder="Escribe aquí..."
      />
      <Button title="Adivinar" onPress={checkAnswer} />
      {message ? <Text>{message}</Text> : null}
    </View>
  );
};

export default GuessForm;