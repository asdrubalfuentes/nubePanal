import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DetailsScreen = ({navigation, route}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{route.params.name}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Volver a Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // Fondo blanco para la pantalla
  },
  text: {
    color: 'lightblue', // Texto en azul claro
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff', // Botón azul
    padding: 10,
    borderRadius: 20,
    
  },
  buttonText: {
    color: '#fff', // Texto del botón en blanco
    fontSize: 16,
  },
});

export default DetailsScreen;
