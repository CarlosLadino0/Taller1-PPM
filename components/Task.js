import React from 'react';
import { View, Text } from 'react-native';

const Task = ({ task }) => {
  return (
    <View>
      <Text> Tarea: {task.title}</Text>
      <Text>
        Estado: {task.completed ? "Completada" : "Pendiente"}
      </Text>
    </View>
  );
};

export default Task;
