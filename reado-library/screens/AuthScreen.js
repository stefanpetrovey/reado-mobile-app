import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

const AuthScreen = ({ navigation, email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication }) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff',justifyContent: 'center'}}>
              <View style={{ alignItems: 'center', marginBottom: 40}}>
      <Image 
            source={require('../assets/LOGO.png')}/></View>
    <View style={{padding: 15, alignItems: 'center', backgroundColor: '#F0F0F0', borderRadius: 20, marginHorizontal: 15}}>
      <Text style={styles.title}>{isLogin ? 'Log In' : 'Register'}</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={handleAuthentication}>
      <Text style={styles.buttonText}>
        {isLogin ? 'Log In' : 'Register'}
      </Text>
    </TouchableOpacity>      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Need an account? Register' : 'Already have an account? Log In'}
        </Text>
      </View>
    </View>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,  // Adjust the radius as needed
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 15,
    width: '80%',
    backgroundColor: '#fff'
  },
  buttonContainer: {
    marginBottom: 16,
    padding: 8,
    width: '70%',
  },
  usernameText: {
    fontSize: 18,
    marginBottom: 16,
  },
  toggleText: {
    fontSize: 15,
    marginTop: 30,
  },
});
