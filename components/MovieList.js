import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import MovieItem from './MovieItem';

export default function MovieList(props) {
    const [data, setData] = useState([]);
    const request = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=a3907dd1f83c801545fea1ba56fc4d81&page=${props.page}`);
            const data = await response.json();
            setData(data.results);
        } catch (error) {
            // 
        }
    }
    useEffect(() => {
        request();
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList
                contentContainerStyle={styles.listContainer}
                horizontal
                data={data}
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