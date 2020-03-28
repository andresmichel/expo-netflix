import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function MovieItem(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: `http://image.tmdb.org/t/p/w500/${props.poster_path}` }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        marginRight: 8,
        height: 158,
        width: 110,
    },
    image: {
        height: 158,
        width: 110,
    }
});