import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native';
import ComingSoonItem from '../components/ComingSoonItem';
import * as Icon from '../components/Icon';

function OpenNotifications(props) {
    return (
        <View style={styles.notificationItem}>
            <Icon.Bell />
            <Text style={styles.notificationLabel}>Notificaciones</Text>
            <Icon.Chevron style={{ marginLeft: 'auto', marginRight: 3 }} />
        </View>
    );
}

export default function ComingSoonScreen(props) {
    const [data, setData] = useState([]);
    const request = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=a3907dd1f83c801545fea1ba56fc4d81`);
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
            <FlatList
                data={data}
                contentContainerStyle={{ paddingTop: 44 }}
                ListHeaderComponent={OpenNotifications}
                renderItem={({ item }) => <ComingSoonItem {...item} />}
                keyExtractor={movie => String(movie.id)}
            />
            <View style={styles.header} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    header: {
        position: 'absolute',
        top: 0,
        height: 44,
        width: '100%',
        backgroundColor: '#000',
    },
    label: {
        color: '#fff',
    },
    notificationItem: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 23,
    },
    notificationLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 24,
    },
});