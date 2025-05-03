// src/screens/LoginScreen.js
import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  Image, StatusBar, Platform, StyleSheet
} from 'react-native';
import { login, register, logout, signInWithGoogle } from '../config/firebase';

export default function LoginScreen() {
  const [isLogin, setIsLogin]       = useState(true);
  const [email, setEmail]           = useState('');
  const [password, setPassword]     = useState('');
  const [name, setName]             = useState('');
  const [error, setError]           = useState('');
  const [isLoading, setIsLoading]   = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    setError('');
    try {
      if (isLogin) {
        await login(email.trim(), password);
      } else {
        await register(email.trim(), password);
        setIsLogin(true);
      }
      setIsLoggedIn(true);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogle = async () => {
    setIsLoading(true);
    setError('');
    try {
      await signInWithGoogle();
      setIsLoggedIn(true);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  // --- RENDER ---

  if (isLoggedIn) {
    return (
      <>
        {Platform.OS==='ios' && <StatusBar barStyle="dark-content" />}
        <View style={styles.background}>
          <View style={styles.card}>
            <Text style={styles.heading}>¡Bienvenido!</Text>
            <Text style={styles.subheading}>{email}</Text>
            <TouchableOpacity
              style={styles.buttonOutline}
              onPress={async () => { await logout(); setIsLoggedIn(false); }}
            >
              <Text style={styles.buttonTextOutline}>Cerrar sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }

  return (
    <>
      {Platform.OS==='ios' && <StatusBar barStyle="dark-content" />}
      <View style={styles.background}>
        <View style={styles.card}>
          <Image
            source={require('../../assets/images/google-logo.png')}
            style={styles.logo}
          />
          <Text style={styles.heading}>
            {isLogin ? '¡Bienvenido de nuevo!' : 'Crea tu cuenta'}
          </Text>
          <Text style={styles.subheading}>
            {isLogin
              ? 'Ingresa tu correo y contraseña'
              : 'Completa los datos para crear tu cuenta'}
          </Text>

          {!!error && <Text style={styles.error}>{error}</Text>}

          {!isLogin && (
            <TextInput
              style={styles.input}
              placeholder="Nombre completo"
              value={name}
              onChangeText={setName}
              autoCapitalize="words"
            />
          )}
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit}
            disabled={isLoading}
          >
            <Text style={styles.buttonText}>
              {isLogin ? 'Iniciar sesión' : 'Registrar'}
            </Text>
          </TouchableOpacity>

          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>O</Text>
            <View style={styles.dividerLine} />
          </View>

          <TouchableOpacity
            style={styles.buttonOutline}
            onPress={handleGoogle}
            disabled={isLoading}
          >
            <Image
              source={require('../../assets/images/google-logo.png')}
              style={styles.googleIcon}
            />
            <Text style={styles.buttonTextOutline}>Iniciar con Google</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => { setIsLogin(!isLogin); setError(''); }}
            style={{ marginTop: 16 }}
          >
            <Text style={styles.linkText}>
              {isLogin
               ? '¿No tienes cuenta? Regístrate'
               : '¿Ya tienes cuenta? Inicia sesión'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex:1, justifyContent:'center', alignItems:'center',
    backgroundColor:'#3b5998'
  },
  card: {
    width: '90%', maxWidth:400,
    backgroundColor:'#fff', borderRadius:12,
    padding:20, alignItems:'center', 
    shadowColor:'#000', shadowOpacity:0.1,
    shadowOffset:{width:0,height:4}, elevation:5
  },
  logo: { width:80, height:80, marginBottom:16 },
  heading: { fontSize:24, fontWeight:'700', marginBottom:6, color:'#333' },
  subheading: { fontSize:14, color:'#666', marginBottom:16 },
  error: { color:'red', marginBottom:12, textAlign:'center' },
  input: {
    width:'100%', height:48, borderRadius:8,
    backgroundColor:'#f0f0f0', paddingHorizontal:12,
    marginBottom:12, fontSize:16, color:'#333'
  },
  button: {
    width:'100%', paddingVertical:12,
    backgroundColor:'#3b5998', borderRadius:8,
    alignItems:'center', marginTop:8
  },
  buttonText: { color:'#fff', fontSize:16, fontWeight:'600' },
  buttonOutline: {
    width:'100%', paddingVertical:12,
    borderWidth:1, borderColor:'#3b5998',
    borderRadius:8, flexDirection:'row',
    alignItems:'center', justifyContent:'center', marginTop:8
  },
  buttonTextOutline: { color:'#3b5998', fontSize:16, fontWeight:'600', marginLeft:8 },
  googleIcon: { width:24, height:24 },
  dividerRow: { flexDirection:'row', alignItems:'center', width:'100%', marginVertical:16 },
  dividerLine: { flex:1, height:1, backgroundColor:'#ddd' },
  dividerText: { marginHorizontal:8, color:'#777' },
  linkText: { color:'#3b5998', textDecorationLine:'underline' },
});
