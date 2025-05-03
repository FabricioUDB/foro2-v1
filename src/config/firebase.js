// src/config/firebase.js

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

// Configuración de Firebase (Consola Fabricio)— proyecto “react-fb-auth-89e8a”
const firebaseConfig = {
  apiKey: "AIzaSyD0kchgYGlno_6f-gnD8hxMtT_DzfBsK4w",
  authDomain: "react-fb-auth-89e8a.firebaseapp.com",
  projectId: "react-fb-auth-89e8a",
  storageBucket: "react-fb-auth-89e8a.firebasestorage.app",
  messagingSenderId: "1068897416810",
  appId: "1:1068897416810:web:d046108b924bc32b003c13"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Módulo de autenticación
export const auth = getAuth(app);

// Proveedor de Google con configuración para forzar selección de cuenta
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

// Funciones de Auth
export function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

export function signInWithGoogle() {
  return signInWithPopup(auth, googleProvider);
}


