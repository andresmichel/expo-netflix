import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MovieList from '../components/MovieList';
import Header from '../components/Header';

const movies = [
  { id: 1, name: 'hola', image: require('../assets/images/covers/12-angry-men.jpg') },
  { id: 2, name: 'hola', image: require('../assets/images/covers/pulp-fiction.jpg') },
  { id: 3, name: 'hola', image: require('../assets/images/covers/schindlers-list.jpg') },
  { id: 4, name: 'hola', image: require('../assets/images/covers/the-dark-knight.jpg') },
  { id: 5, name: 'hola', image: require('../assets/images/covers/the-fellowship-of-the-ring.jpg') },
  { id: 6, name: 'hola', image: require('../assets/images/covers/the-god-father-part-ii.jpg') },
  { id: 7, name: 'hola', image: require('../assets/images/covers/the-godfather.jpg') },
  { id: 8, name: 'hola', image: require('../assets/images/covers/the-good-the-bad-the-ugly.jpg') },
  { id: 9, name: 'hola', image: require('../assets/images/covers/the-return-of-the-king.jpg') },
  { id: 10, name: 'hola', image: require('../assets/images/covers/the-shawshank-redemption.jpg') },
]

const categories = [
  'Tendencias',
  'Verlo nuevamente',
  'Populares en Expoflix',
  'Nuestra selección para Andrés',
  'Nuevos lanzamientos',
  'Películas de Hollywood',
  'Anime',
  'Programas premiados',
  'Originales de Expoflix',
]

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={categories}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) => <MovieList title={item} data={movies} />}
      />
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  listContainer: {
    paddingTop: 100,
  },
});