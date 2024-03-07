import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import TextInputField from './TextInputField';
import LoginButton from './LoginButton';

const LoginForm = () => {
  const [expediente, setExpediente] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (expediente.length !== 6) {
      Alert.alert("El expediente debe tener 6 caracteres");
    } else if (password.length < 8) {
      Alert.alert("El password debe ser mayor o igual a 8 caracteres");
    } else {
      Alert.alert("Login exitoso");
    }
  };

  return (
    <View style={styles.container}>
      <TextInputField
        placeholder="Expediente"
        value={expediente}
        keyboardType='numeric'
        maxLength={6}
        onChangeText={(text) => setExpediente(text)}
      />
      <TextInputField
        placeholder="Password"
        multiline={false}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <LoginButton onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
});

export default LoginForm;
