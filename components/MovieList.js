import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Poster from './Poster';

function Separator() {
    return <View style={{ marginRight: 8 }} />;
}

export default function MovieList(props) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList
                contentContainerStyle={styles.listContainer}
                horizontal
                data={props.data}
                ItemSeparatorComponent={Separator}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, index) => String(index)}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Details', { id: item.id })}>
                        <Poster path={item.poster_path} />
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