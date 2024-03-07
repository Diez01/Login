import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TextInputField = ({ placeholder, value, keyboardType, maxLength, multiline, secureTextEntry, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      keyboardType={keyboardType}
      maxLength={maxLength}
      multiline={multiline}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 20,
    borderColor: '#4285F4',
    backgroundColor: '#FFFFFF',
  },
});

export default TextInputField;
