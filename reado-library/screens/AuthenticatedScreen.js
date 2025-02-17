import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const AuthenticatedScreen = ({ user, handleLogout, navigation }) => {
  
  // Redirect to Auth screen if the user is not logged in
  useEffect(() => {
    if (!user) {
      navigation.replace('Auth');
    }
  }, [user, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.emailText}>{user?.email || 'No user available'}</Text>
      <Button title="Logout" onPress={handleLogout} color="#e74c3c" />
    </View>
  );
};

export default AuthenticatedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'start',
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 22,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
    width: '80%',
  },
  emailText: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 16,
  },
});
