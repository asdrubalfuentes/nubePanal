import * as React from 'react';
import { Text, Button, View, TextInput} from 'react-native';
import { useForm } from 'react-hook-form';

const RegisterScreen = ({navigation, route}) => {

    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [city, setCity] = React.useState('');
    const [state, setState] = React.useState('');
    const [zip, setZip] = React.useState('');
    const [country, setCountry] = React.useState('');

    

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
            try {
                const response = await fetch('https://api.example.com/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                    // Registration successful, navigate to login screen
                    navigation.navigate('Login', { registrationStatus: 'success' });
                } else {
                    // Registration failed, handle error
                    const errorData = await response.json();
                    console.error('Registration failed:', errorData);
                }
            } catch (error) {
                console.error('An error occurred during registration:', error);
            }
        };

    return (
        <View>
            <TextInput
                onChangeText={(text) => setName(text)}
                value={name}
                placeholder="Name"
            />
            <TextInput
                onChangeText={(text) => setPassword(text)}
                value={password}
                placeholder="Password"
            />
            <TextInput
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Email"
            />
            <TextInput
                onChangeText={(text) => setPhone(text)}
                value={phone}
                placeholder="Phone"
            />
            <TextInput
                onChangeText={(text) => setAddress(text)}
                value={address}
                placeholder="Address"
            />
            <TextInput
                onChangeText={(text) => setCity(text)}
                value={city}
                placeholder="City" 
            />
            <TextInput
                onChangeText={(text) => setState(text)}
                value={state}
                placeholder="State"
            />
            <TextInput
                onChangeText={(text) => setZip(text)}
                value={zip}
                placeholder="Zip"
            />
            <TextInput
                onChangeText={(text) => setCountry(text)}
                value={country}
                placeholder="Country"
            />
            



            <Button title="Register" onPress={handleSubmit(onSubmit)} />
        </View>
    );

  };

export default RegisterScreen;