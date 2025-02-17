import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const BookDetailScreen = ({ route }) => {
  const { book } = route.params;

  return (
    <View style={styles.container}>
    <View style={{ alignItems: 'center', marginBottom: 20, marginTop: 10}}>
            <Image 
                  source={{uri: book.imageLink}} style={{ width: 200, height: 300 }} /></View>
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.description}>{book.author}</Text>
      <Text style={styles.description}>{book.country}</Text>

      <View style={{backgroundColor: '#FBF2D9', padding: 25, borderRadius: 25, marginTop: 30}}>
      <Text style={styles.descriptionbook}>Book</Text>
      <Text style={styles.descriptionbook}>Language: {book.language}</Text>
      <Text style={styles.descriptionbook}>Pages: {book.pages}</Text>
      </View>

   

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#EAE2CD', alignContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: '#656565', textAlign: 'center' },
  description: { fontSize: 16, color: '#666', textAlign: 'center' },
  descriptionbook: { fontSize: 16, color: '#666', textAlign: 'left' },
});

export default BookDetailScreen;
