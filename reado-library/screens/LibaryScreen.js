import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'


const books = [
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
    "author": "Hans Christian Andersen",
    "country": "Denmark",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/fairy-tales.jpg",
    "language": "Danish",
    "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
    "pages": 784,
    "title": "Fairy tales",
    "year": 1836
  },
  {
    "author": "Dante Alighieri",
    "country": "Italy",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/the-divine-comedy.jpg",
    "language": "Italian",
    "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
    "pages": 928,
    "title": "The Divine Comedy",
    "year": 1315
  },
  {
    "author": "Unknown",
    "country": "Sumer and Akkadian Empire",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/the-epic-of-gilgamesh.jpg",
    "language": "Akkadian",
    "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
    "pages": 160,
    "title": "The Epic Of Gilgamesh",
    "year": -1700
  },
  {
    "author": "Unknown",
    "country": "Achaemenid Empire",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/the-book-of-job.jpg",
    "language": "Hebrew",
    "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
    "pages": 176,
    "title": "The Book Of Job",
    "year": -600
  },
  {
    "author": "Unknown",
    "country": "India/Iran/Iraq/Egypt/Tajikistan",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/one-thousand-and-one-nights.jpg",
    "language": "Arabic",
    "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
    "pages": 288,
    "title": "One Thousand and One Nights",
    "year": 1200
  },
  {
    "author": "Unknown",
    "country": "Iceland",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/njals-saga.jpg",
    "language": "Old Norse",
    "link": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
    "pages": 384,
    "title": "Nj\u00e1l's Saga",
    "year": 1350
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
    "author": "Giovanni Boccaccio",
    "country": "Italy",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/the-decameron.jpg",
    "language": "Italian",
    "link": "https://en.wikipedia.org/wiki/The_Decameron\n",
    "pages": 1024,
    "title": "The Decameron",
    "year": 1351
  },
  {
    "author": "Jorge Luis Borges",
    "country": "Argentina",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/ficciones.jpg",
    "language": "Spanish",
    "link": "https://en.wikipedia.org/wiki/Ficciones\n",
    "pages": 224,
    "title": "Ficciones",
    "year": 1965
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
    "author": "Paul Celan",
    "country": "Romania, France",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/poems-paul-celan.jpg",
    "language": "German",
    "link": "\n",
    "pages": 320,
    "title": "Poems",
    "year": 1952
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
  {
    "author": "Euripides",
    "country": "Greece",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/medea.jpg",
    "language": "Greek",
    "link": "https://en.wikipedia.org/wiki/Medea_(play)\n",
    "pages": 104,
    "title": "Medea",
    "year": -431
  },
  {
    "author": "William Faulkner",
    "country": "United States",
    "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/static/images/absalom-absalom.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Absalom,_Absalom!\n",
    "pages": 313,
    "title": "Absalom, Absalom!",
    "year": 1936
  },
];

const LibaryScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.item}
      onPress={() => navigation.navigate('BookDetail', { book: item })}
    >
 <Image 
                  source={{uri: item.imageLink}} style={{ width: 100, height: 150 }} />    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        numColumns={3}
        keyExtractor={(item) => item.title}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, alignItems: 'center' },
  item: {padding: 4, marginBottom: 10, borderRadius: 5 },

  title: { fontSize: 18, fontWeight: 'bold' },
});

export default LibaryScreen;
