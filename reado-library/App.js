import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import AuthScreen from './screens/AuthScreen';
import AuthenticatedScreen from './screens/AuthenticatedScreen';
import HomeScreen from './screens/HomeScreen';
import LibaryScreen from './screens/LibaryScreen';
import BookDetailScreen from './screens/BookDetailScreen';
import SearchScreen from './screens/SearchScreen';


const Tab = createBottomTabNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyAN0PYiq4Z-xAq5nkngi-lBRm00GpYHd4o",
  authDomain: "readobooks.firebaseapp.com",
  projectId: "readobooks",
  storageBucket: "readobooks.firebasestorage.app",
  messagingSenderId: "1077853493423",
  appId: "1:1077853493423:web:852f4c626c8fc1b7a51c5a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const Stack = createStackNavigator();

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleAuthentication = async () => {
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };

  const handleLogout = async () => {
    try {
      console.log('Logout button pressed');
      await signOut(auth);
      console.log('User successfully logged out');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen  name="Home" component={Root} /*Call function as Stack.Screen*/
          options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="Auth" options={{ title: 'Welcome'}}>
            {(props) => (
              <AuthScreen
                {...props}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                isLogin={isLogin}
                setIsLogin={setIsLogin}
                handleAuthentication={handleAuthentication}
              />
            )}
          </Stack.Screen>
        )}
        <Stack.Screen name="Authenticated" options={{ title: 'Account'}}>
            {(props) => <AuthenticatedScreen {...props} user={user} email={email} handleLogout={handleLogout} />}
          </Stack.Screen>
        <Stack.Screen name="BookDetail" component={BookDetailScreen} options={{ title: '',  headerStyle:{  
          backgroundColor: '#EAE2CD',  elevation: 0,
          shadowOpacity: 0
        }}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Root() {
    const navigation = useNavigation();
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarStyle: {
        height: 60,
        backgroundColor: '#D6D6D6',
    },
  })}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="home" color={color} size={17} />
      ),
      headerRight: () => (
        <View style={{marginRight: 20}}>

         <TouchableOpacity onPress={()=>navigation.navigate('Authenticated')}>
         <Ionicons name="person-circle-outline" color={'#000'} size={36}  />
         </TouchableOpacity>

        </View>
      ),
    }}/>
      <Tab.Screen name="Libary" component={LibaryScreen} options={{
      tabBarLabel: 'Libary',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="book" color={color} size={17} />
      ),
      headerRight: () => (
        <View style={{marginRight: 20}}>

         <TouchableOpacity onPress={()=>navigation.navigate('Authenticated')}>
         <Ionicons name="person-circle-outline" color={'#000'} size={36}  />
         </TouchableOpacity>

        </View>
      ),
    }}/>
    <Tab.Screen name="Search" component={SearchScreen} options={{
      tabBarLabel: 'Search',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="search" color={color} size={20} />
      ),
      headerRight: () => (
        <View style={{marginRight: 20}}>

         <TouchableOpacity onPress={()=>navigation.navigate('Authenticated')}>
         <Ionicons name="person-circle-outline" color={'#000'} size={36}  />
         </TouchableOpacity>

        </View>
      ),
    }}/>
    </Tab.Navigator>
  );
}
