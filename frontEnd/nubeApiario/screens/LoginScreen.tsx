import * as React from 'react';
import { Text, Button, View, TextInput} from 'react-native';

const LoginScreen = ({navigation, route}) => {

    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleDetails = () => {
        navigation.navigate('Home', { name: name, password: password});
    };

    return(
        <View>
            <Text>Introduca su Usuario</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={name => setName(name)}
                value={name}
            />
            <Text>Introduca su Conttraseña</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={password => setPassword(password)}
                value={password}
            />
            <Button
                color={'#f194ff'}
                title="Ingreso"
                onPress={handleDetails}
            />
        </View>
    );

  };

export default LoginScreen;