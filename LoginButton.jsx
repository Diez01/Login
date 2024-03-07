import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const LoginButton = ({ onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button
        title="Login"
        onPress={onPress}
        color="#4285F4"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {},
});

export default LoginButton;
