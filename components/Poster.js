import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Poster(props) {
    const { style, ...posterProps } = props;
    return (
        <View {...posterProps} style={[styles.container, style]}>
            <Image
                style={{ height: props.style.height, width: props.style.width }}
                source={{ uri: `http://image.tmdb.org/t/p/w500/${props.path}` }} />
        </View>
    );
}

Poster.defaultProps = {
    style: {
        height: 158,
        width: 110,
    },
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
});