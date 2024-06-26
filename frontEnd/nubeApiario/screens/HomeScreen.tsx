import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Button } from 'react-native';

const HomeScreen = ({navigation, route}) => {
  const [isSwitchEnabled, setIsSwitchEnabled] = useState(false);

  const toggleSwitch = () => setIsSwitchEnabled(previousState => !previousState);

  const handleAccept = () => {
    if (isSwitchEnabled) {
      navigation.navigate('Profile', { name: 'Asdrubal' });
    } else {
      alert('Debes aceptar las condiciones de uso para continuar.');
    }
  };



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido/a</Text>
      <Text style={styles.terms}>Por favor, acepta las condiciones generales de uso.</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isSwitchEnabled ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isSwitchEnabled}
      />
      <Button
        color={'#9A1f00'}
        title="Aceptar"
        onPress={handleAccept}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    terms: {
        textAlign: 'center',
        marginBottom: 20,
    },
    buttons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 20,
        borderRadius: 20, // Add this line to make the buttons round
    }
});

export default HomeScreen;
