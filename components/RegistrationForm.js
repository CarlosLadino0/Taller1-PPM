import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const RegistrationForm = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    const userData = { name, email, password };
    onRegister(userData);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <View>
      <Text>Formulario de Registro</Text>
      <TextInput
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
};

export default RegistrationForm;
