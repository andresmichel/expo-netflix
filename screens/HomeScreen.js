import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MovieList from '../components/MovieList';
import Header from '../components/Header';

const categories = [
  { id: 1, title: 'Tendencias', page: 1 },
  { id: 2, title: 'Verlo nuevamente', page: 2 },
  { id: 3, title: 'Populares en Expoflix', page: 3 },
  { id: 4, title: 'Nuestra selección para Andrés', page: 3 },
  { id: 5, title: 'Nuevos lanzamientos', page: 4 },
  { id: 6, title: 'Películas de Hollywood', page: 5 },
  { id: 7, title: 'Anime', page: 6 },
  { id: 8, title: 'Programas premiados', page: 7 },
  { id: 9, title: 'Originales de Expoflix', page: 8 },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={categories}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item, index }) => <MovieList page={index + 1} title={item.title} />}
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