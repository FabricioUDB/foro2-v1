import React from 'react';
import { TextInput } from 'react-native';
import styles from '../styles/LoginScreen.styles';

export default function FormInput({
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
  secureTextEntry = false,
  autoCapitalize = 'sentences',
}) {
  return (
    <TextInput
      style={styles.inputField}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      autoCapitalize={autoCapitalize}
      underlineColorAndroid="transparent"  // para Android
    />
  );
}


