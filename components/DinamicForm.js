import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const DynamicForm = () => {
  const [inputText, setInputText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const handleSubmit = () => {
    setSubmittedText(inputText);
    setInputText('');
  };

  return (
    <View>
      <TextInput
        placeholder="Escribe algo..."
        value={inputText}
        onChangeText={setInputText}
      />
      <Button title="Guardar" onPress={handleSubmit} />
      {submittedText ? <Text> Texto guardado: {submittedText}</Text> : null}
    </View>
  );
};

export default DynamicForm;
