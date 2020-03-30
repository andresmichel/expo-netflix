import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MovieItem from './MovieItem';

function Separator() {
    return <View style={{ marginRight: 8 }} />;
}

export default function MovieList(props) {
    const [data, setData] = useState([]);
    const navigation = useNavigation();
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
                ItemSeparatorComponent={Separator}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, index) => String(index)}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Details', { id: item.id })}>
                        <MovieItem key={index} {...item} />
                    </TouchableOpacity>
                )}
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