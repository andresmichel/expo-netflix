import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function MovieItem(props) {
    return <View style={styles.container}>
        <Image style={styles.image} source={props.image} />
    </View>;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        marginRight: 8,
    },
    image: {
        height: 158,
        width: 110,
    }
});