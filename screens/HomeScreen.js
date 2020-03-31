import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, ActivityIndicator } from 'react-native';
import { useSpring, animated } from 'react-spring';
import MovieList from '../components/MovieList';
import Menu from '../components/Menu';

const AnimatedView = animated(View);

const categories = [
  { title: 'Trending Now', page: 1 },
  { title: 'Popular on Netflix', page: 2 },
  { title: 'Comedies', page: 3 },
  { title: 'Netflix Originals', page: 4 },
  { title: 'Watch In One Weekend', page: 5 },
  { title: 'Action & Adventure', page: 6 },
  { title: 'New Releases', page: 7 },
  { title: 'Thriller Movies', page: 8 },
  { title: 'Exciting Movies', page: 9 },
];

export default function HomeScreen(props) {
  let prevOffsetY = 0;
  const [data, setData] = useState([]);
  const [animatedProps, set] = useSpring(() => ({ t: 0 }));
  const request = async ({ title, page }) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?${[
        'api_key=a3907dd1f83c801545fea1ba56fc4d81',
        `page=${page}`,
      ].join('&')}`);
      const data = await response.json();
      return { ...data, title };
    } catch (error) {
      // 
    }
  }
  const requestList = categories.map(item => request(item));
  useEffect(() => {
    Promise.all(requestList)
      .then(response => setData(response))
      .catch(error => {
        // 
      })
  }, []);
  if (!data.length) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={'large'} />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        onScroll={({ nativeEvent }) => {
          const offsetY = nativeEvent.contentOffset.y;
          const contentHeight = nativeEvent.contentSize.height;
          const layoutHeight = nativeEvent.layoutMeasurement.height;
          const direction = prevOffsetY < offsetY ? 'up' : 'down';
          if (direction === 'up' && offsetY > 0) set({ t: 1 });
          else if (offsetY < contentHeight - layoutHeight) set({ t: 0 });
          prevOffsetY = offsetY;
        }}
        contentContainerStyle={styles.listContainer}
        data={data}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) => <MovieList data={item.results} title={item.title} />}
      />
      <AnimatedView style={[styles.MenuWrapper, {
        opacity: animatedProps.t.interpolate({
          range: [0, 1],
          output: [1, 0]
        }),
        transform: [
          {
            translateY: animatedProps.t.interpolate({
              range: [0, 1],
              output: [0, -88]
            })
          }
        ]
      }]}>
        <Menu />
      </AnimatedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  listContainer: {
    paddingTop: 100,
  },
  MenuWrapper: {
    position: 'absolute',
    top: 0,
    width: '100%',
  },
});