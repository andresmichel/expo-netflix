import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import MovieItem from './MovieItem';

function randomize(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return [...array, ...array];
}

export default function MovieList(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList
                contentContainerStyle={styles.listContainer}
                horizontal
                data={randomize(props.data)}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, index) => String(index)}
                renderItem={({ item, index }) => <MovieItem key={index} {...item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    listContainer: {
        paddingLeft: 8,
    },
    title: {
        color: '#E6E6E6',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 8,
        marginBottom: 8,
    },
});