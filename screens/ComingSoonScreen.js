import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ComingSoonItem from '../components/ComingSoonItem';
import * as Icon from '../components/Icon';

const ITEM_HEIGHT = 460;
const HEADER_HEIGHT = 70;
const CONTENT_OFFSET = 70;

function OpenNotifications() {
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
    const [activeItem, activateItem] = useState(0);
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
                onScroll={({ nativeEvent }) => {
                    const y = nativeEvent.contentOffset.y;
                    const nextItem = Math.floor((y - HEADER_HEIGHT + ITEM_HEIGHT - CONTENT_OFFSET) / ITEM_HEIGHT);
                    if (nextItem >= 0 && nextItem !== activeItem) activateItem(nextItem);
                }}
                data={data}
                contentContainerStyle={{ paddingTop: 44 }}
                ListHeaderComponent={OpenNotifications}
                renderItem={({ item, index }) => <ComingSoonItem {...item} disabled={index !== activeItem} />}
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