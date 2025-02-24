import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const ThemeSwitcher = ({ onToggleTheme }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    onToggleTheme(!isDarkTheme);
  };

  return (
    <View>
      <Text>Tema actual: {isDarkTheme ? "Oscuro" : "Claro"}</Text>
      <Button title="Cambiar Tema" onPress={toggleTheme} />
    </View>
  );
};

export default ThemeSwitcher;
