import React from 'react';
import { useSpring, animated } from 'react-spring';
import { View, Image, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import * as Icon from './Icon';

const AnimatedView = animated(View);

function CategorySeparator() {
    return <View style={styles.categorySeparator} />;
}

export default function ComingSoonItem(props) {
    const overlayStyle = useSpring({ opacity: props.disabled ? 1 : 0, from: { opacity: 1 } });
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image
                    style={styles.image}
                    source={{ uri: `http://image.tmdb.org/t/p/w500/${props.backdrop_path}` }} />
            </View>
            <View style={styles.content}>
                <View style={styles.header}>
                    <View style={styles.logoWrapper}>
                        <Text numberOfLines={2} style={styles.logoLabel}>{props.title}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Icon.Plus />
                            <Text style={styles.buttonLabel}>My List</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Icon.Share />
                            <Text style={styles.buttonLabel}>Share</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.label}>Coming Wednesday</Text>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.overview} numberOfLines={3}>{props.overview}</Text>
                <FlatList
                    ItemSeparatorComponent={CategorySeparator}
                    scrollEnabled={false}
                    horizontal
                    data={['Magical', 'Anime Feature', 'Fantasy Anime', 'Children & Family']}
                    renderItem={({ item }) => <Text style={styles.category}>{item}</Text>}
                    keyExtractor={item => item}
                />
            </View>
            <AnimatedView
                style={[styles.overlay, overlayStyle]}
                pointerEvents={props.disabled ? 'auto' : 'none'} />
        </View>
    );
}

ComingSoonItem.defaultProps = {
    disabled: false,
};

const styles = StyleSheet.create({
    container: {
        // 
    },
    overlay: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    imageWrapper: {
        marginVertical: 15,
    },
    image: {
        height: 203,
        width: '100%',
    },
    content: {
        paddingHorizontal: 10,
        paddingBottom: 25
    },
    topContent: {
        height: 70,
    },
    label: {
        fontSize: 14,
        color: '#929292',
        marginBottom: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FEFFFE',
        marginBottom: 4,
    },
    overview: {
        fontSize: 14,
        lineHeight: 18,
        color: '#929292',
        marginBottom: 10,
    },
    category: {
        fontSize: 11,
        color: '#FFFFFF',
    },
    categorySeparator: {
        marginHorizontal: 4,
        height: 3,
        width: 3,
        borderRadius: 2,
        backgroundColor: '#E50914',
        alignSelf: 'center',
    },
    header: {
        flexDirection: 'row',
        height: 70,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginLeft: 'auto',
        marginRight: 3,
    },
    button: {
        padding: 12,
        alignItems: 'center',
    },
    buttonLabel: {
        fontSize: 10,
        color: '#fff',
        marginTop: 2,
    },
    logoWrapper: {
        marginLeft: 10,
        height: 60,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoLabel: {
        textAlign: 'center',
        fontSize: 19,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#fff',
        textTransform: 'uppercase',
    }
});