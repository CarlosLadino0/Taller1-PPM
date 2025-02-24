import React from 'react';
import { View, Text } from 'react-native';

export default function Greeting({ name }) {
    return (
        <View>
            <Text>Hola, {name}!</Text>
        </View>
    );
}