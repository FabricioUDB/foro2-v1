import { StyleSheet, Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  background: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // Gradient para web, fallback color móvil
    backgroundImage: 'linear-gradient(180deg, #4c669f 0%, #3b5998 50%, #192f6a 100%)',
    backgroundColor: '#3b5998',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },

  card: {
    width: width * 0.85,
    maxWidth: 400,
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 10,
  },

  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 24,
    textAlign: 'center',
  },

  // Nuevo estilo para el TextInput
  inputField: {
    width: '100%',              // ocupa todo el ancho de la tarjeta
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#333',

    // Elimina borde y sombra en web
    outlineStyle: 'none',
    outlineWidth: 0,
    boxShadow: 'none',
  },

  submitButton: {
    width: '100%',
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#3b5998',
    marginTop: 12,
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },

  dividerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  dividerText: {
    marginHorizontal: 12,
    color: '#777',
  },

  googleButton: {
    width: '100%',
    borderColor: '#4285F4',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
  },
  googleButtonLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4285F4',
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },

  toggleAuth: {
    marginTop: 20,
  },
  toggleAuthText: {
    color: '#3b5998',
    fontSize: 14,
    fontWeight: '500',
  },

  logoutButton: {
    marginTop: 14,
    borderColor: '#3b5998',
    width: '50%',
  },
});
