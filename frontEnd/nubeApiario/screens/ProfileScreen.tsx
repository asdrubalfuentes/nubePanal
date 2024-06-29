import React from 'react';
import { Text, Button, View} from 'react-native';

const text = 'Manejo de la navegación basada en el estado de un Switch: Si el Switch está activado (isSwitchEnabled es true)';


const ProfileScreen = ({navigation, route}) => {

    const handleDetails = () => {
        navigation.navigate('Login', { name: text });
    };

    return(
        <View>
            <Text>This is {route.params.name}'s profile</Text>
            <Button
            color={'#f194ff'}
            title="Detalles"
            onPress={handleDetails}
        />
      </View>
    );

  };

export default ProfileScreen;