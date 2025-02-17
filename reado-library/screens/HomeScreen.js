import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const englishbooks = [
  {
    "author": "Chinua Achebe",
    "country": "Nigeria",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/things-fall-apart.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 1958
  },
  {
    "author": "Jane Austen",
    "country": "United Kingdom",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/pride-and-prejudice.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
    "pages": 226,
    "title": "Pride and Prejudice",
    "year": 1813
  },
  {
    "author": "Emily Bront\u00eb",
    "country": "United Kingdom",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/wuthering-heights.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Wuthering_Heights\n",
    "pages": 342,
    "title": "Wuthering Heights",
    "year": 1847
  },
  {
    "author": "Geoffrey Chaucer",
    "country": "England",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/the-canterbury-tales.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/The_Canterbury_Tales\n",
    "pages": 544,
    "title": "The Canterbury Tales",
    "year": 1450
  },
  {
    "author": "Joseph Conrad",
    "country": "United Kingdom",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/nostromo.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Nostromo\n",
    "pages": 320,
    "title": "Nostromo",
    "year": 1904
  },
  {
    "author": "Charles Dickens",
    "country": "United Kingdom",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/great-expectations.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Great_Expectations\n",
    "pages": 194,
    "title": "Great Expectations",
    "year": 1861
  },
  {
    "author": "George Eliot",
    "country": "United Kingdom",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/middlemarch.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Middlemarch\n",
    "pages": 800,
    "title": "Middlemarch",
    "year": 1871
  },
  {
    "author": "Ralph Ellison",
    "country": "United States",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/invisible-man.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Invisible_Man\n",
    "pages": 581,
    "title": "Invisible Man",
    "year": 1952
  },
]

const frenchbooks = [
  {
    "author": "Honor\u00e9 de Balzac",
    "country": "France",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/le-pere-goriot.jpg",
    "language": "French",
    "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
    "pages": 443,
    "title": "Le P\u00e8re Goriot",
    "year": 1835
  },
  {
    "author": "Samuel Beckett",
    "country": "Republic of Ireland",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/molloy-malone-dies-the-unnamable.jpg",
    "language": "French, English",
    "link": "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
    "pages": 256,
    "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
    "year": 1952
  },
  {
    "author": "Albert Camus",
    "country": "Algeria, French Empire",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/l-etranger.jpg",
    "language": "French",
    "link": "https://en.wikipedia.org/wiki/The_Stranger_(novel)\n",
    "pages": 185,
    "title": "The Stranger",
    "year": 1942
  },
  {
    "author": "Louis-Ferdinand C\u00e9line",
    "country": "France",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/voyage-au-bout-de-la-nuit.jpg",
    "language": "French",
    "link": "https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night\n",
    "pages": 505,
    "title": "Journey to the End of the Night",
    "year": 1932
  },
  {
    "author": "Denis Diderot",
    "country": "France",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/jacques-the-fatalist.jpg",
    "language": "French",
    "link": "https://en.wikipedia.org/wiki/Jacques_the_Fatalist\n",
    "pages": 596,
    "title": "Jacques the Fatalist",
    "year": 1796
  },
  {
    "author": "Gustave Flaubert",
    "country": "France",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/madame-bovary.jpg",
    "language": "French",
    "link": "https://en.wikipedia.org/wiki/Madame_Bovary\n",
    "pages": 528,
    "title": "Madame Bovary",
    "year": 1857
  },
  {
    "author": "Gustave Flaubert",
    "country": "France",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/l-education-sentimentale.jpg",
    "language": "French",
    "link": "https://en.wikipedia.org/wiki/Sentimental_Education\n",
    "pages": 606,
    "title": "Sentimental Education",
    "year": 1869
  },
]

const bestbooks = [
  {
    "author": "Louis-Ferdinand C\u00e9line",
    "country": "France",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/voyage-au-bout-de-la-nuit.jpg",
    "language": "French",
    "link": "https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night\n",
    "pages": 505,
    "title": "Journey to the End of the Night",
    "year": 1932
  },
  {
    "author": "Miguel de Cervantes",
    "country": "Spain",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/don-quijote-de-la-mancha.jpg",
    "language": "Spanish",
    "link": "https://en.wikipedia.org/wiki/Don_Quixote\n",
    "pages": 1056,
    "title": "Don Quijote De La Mancha",
    "year": 1610
  },
  {
    "author": "Geoffrey Chaucer",
    "country": "England",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/the-canterbury-tales.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/The_Canterbury_Tales\n",
    "pages": 544,
    "title": "The Canterbury Tales",
    "year": 1450
  },
  {
    "author": "Anton Chekhov",
    "country": "Russia",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/stories-of-anton-chekhov.jpg",
    "language": "Russian",
    "link": "https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov\n",
    "pages": 194,
    "title": "Stories",
    "year": 1886
  },
  {
    "author": "Joseph Conrad",
    "country": "United Kingdom",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/nostromo.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Nostromo\n",
    "pages": 320,
    "title": "Nostromo",
    "year": 1904
  },
  {
    "author": "Charles Dickens",
    "country": "United Kingdom",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/great-expectations.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Great_Expectations\n",
    "pages": 194,
    "title": "Great Expectations",
    "year": 1861
  },
  {
    "author": "Denis Diderot",
    "country": "France",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/jacques-the-fatalist.jpg",
    "language": "French",
    "link": "https://en.wikipedia.org/wiki/Jacques_the_Fatalist\n",
    "pages": 596,
    "title": "Jacques the Fatalist",
    "year": 1796
  },
  {
    "author": "Alfred D\u00f6blin",
    "country": "Germany",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/berlin-alexanderplatz.jpg",
    "language": "German",
    "link": "https://en.wikipedia.org/wiki/Berlin_Alexanderplatz\n",
    "pages": 600,
    "title": "Berlin Alexanderplatz",
    "year": 1929
  },
  {
    "author": "Fyodor Dostoevsky",
    "country": "Russia",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/crime-and-punishment.jpg",
    "language": "Russian",
    "link": "https://en.wikipedia.org/wiki/Crime_and_Punishment\n",
    "pages": 551,
    "title": "Crime and Punishment",
    "year": 1866
  },
  {
    "author": "Fyodor Dostoevsky",
    "country": "Russia",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/the-idiot.jpg",
    "language": "Russian",
    "link": "https://en.wikipedia.org/wiki/The_Idiot\n",
    "pages": 656,
    "title": "The Idiot",
    "year": 1869
  },
  {
    "author": "Fyodor Dostoevsky",
    "country": "Russia",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/the-possessed.jpg",
    "language": "Russian",
    "link": "https://en.wikipedia.org/wiki/Demons_(Dostoyevsky_novel)\n",
    "pages": 768,
    "title": "The Possessed",
    "year": 1872
  },
  {
    "author": "Fyodor Dostoevsky",
    "country": "Russia",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/the-brothers-karamazov.jpg",
    "language": "Russian",
    "link": "https://en.wikipedia.org/wiki/The_Brothers_Karamazov\n",
    "pages": 824,
    "title": "The Brothers Karamazov",
    "year": 1880
  },
  {
    "author": "George Eliot",
    "country": "United Kingdom",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/middlemarch.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Middlemarch\n",
    "pages": 800,
    "title": "Middlemarch",
    "year": 1871
  },

]


const ProfileScreen = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.item}
      onPress={() => navigation.navigate('BookDetail', { book: item })}
    >
 <Image 
                  source={{uri: item.imageLink}} style={{ width: 85, height: 120 }} />    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Books</Text>
      <Text style={styles.titlecategory}>English Books</Text>


    <View style={styles.containerlist}>
      <FlatList
        data={englishbooks}
        horizontal
        keyExtractor={(item) => item.title}
        renderItem={renderItem}
      />
    </View>

    <Text style={styles.titlecategory}>French Books</Text>


    <View style={styles.containerlist}>
      <FlatList
        data={frenchbooks}
        horizontal
        keyExtractor={(item) => item.title}
        renderItem={renderItem}
      />
    </View>

    <Text style={styles.titlecategorybest}>Bestsellers</Text>


    <View style={styles.containerlist}>
      <FlatList
        data={bestbooks}
        horizontal
        keyExtractor={(item) => item.title}
        renderItem={renderItem}
      />
    </View>
    
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  item: {paddingLeft: 5, paddingRight: 5, marginBottom: 10, borderRadius: 5 },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 15,
    backgroundColor: '#f8f9fa',
  },
  containerlist: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 0,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  titlecategory: {
    fontSize: 16,
    marginBottom: 15,
    paddingLeft: 5,
  },
  titlecategorybest: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: 700,
    paddingLeft: 5,
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
  usernameText: {
    fontSize: 18,
    marginBottom: 16,
  },
});
