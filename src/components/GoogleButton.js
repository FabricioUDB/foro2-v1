import React from 'react';
import { Image } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../styles/LoginScreen.styles';

export default function GoogleButton({ onPress, loading, disabled }) {
  return (
    <Button
      mode="outlined"
      onPress={onPress}
      loading={loading}
      disabled={disabled}
      style={styles.googleButton}
      labelStyle={styles.googleButtonLabel}
    >
      <Image
        source={require('../../assets/images/google-logo.png')}
        style={styles.googleIcon}
      />
      Iniciar con Google
    </Button>
  );
}
