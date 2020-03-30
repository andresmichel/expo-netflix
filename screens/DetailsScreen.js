import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Icon from '../components/Icon';

function Separator() {
    return <View style={{ height: 10 }} />;
}

export default function DetailsScreen(props) {
    const [data, setData] = useState(null);
    const [recommendations, setRecommendations] = useState([]);
    const navigation = useNavigation();
    const request = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${props.route.params.id}?${[
                'api_key=a3907dd1f83c801545fea1ba56fc4d81',
                'append_to_response=videos,recommendations'
            ].join('&')}`);
            const { recommendations, ...data } = await response.json();
            setData(data);
            setRecommendations(recommendations.results.slice(0, 6));
        } catch (error) {
            // 
        }
    }
    useEffect(() => {
        request();
    }, []);
    if (!data) return <View style={styles.container} />;
    return (
        <View style={styles.container}>
            <View style={styles.backgroundImageWrapper}>
                <Image blurRadius={50} style={styles.backgroundImage} source={{ uri: `http://image.tmdb.org/t/p/w500/${data.poster_path}` }} />
                <LinearGradient
                    colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.4)', '#000']}
                    style={styles.backgroundImageOverlay} />
            </View>
            <ScrollView>
                <View style={styles.coverWrapper}>
                    <Image style={styles.cover} source={{ uri: `http://image.tmdb.org/t/p/w500/${data.poster_path}` }} />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoGreenText}>98% de coincidencia</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Reproducir</Text>
                </TouchableOpacity>
                <Text style={styles.text} numberOfLines={3}>{data.overview}</Text>
                <View style={{ marginTop: 10, marginHorizontal: 10 }}>
                    <Text style={styles.label}>Elenco: Mike Mayers, Eddie Murphie</Text>
                    <Text style={[styles.label, { marginTop: 3 }]}>Dirigido por: Andrew Adams</Text>
                </View>
                <View style={styles.actionsContainer}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Icon.Plus />
                        <Text style={styles.actionLabel}>Mi lista</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Icon.Share />
                        <Text style={styles.actionLabel}>Compartir</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.tabsContainer}>
                    <View style={styles.tab}>
                        <Text style={styles.tabLabel}>Mas similares</Text>
                    </View>
                </View>
                <FlatList
                    style={styles.recomendationContainer}
                    scrollEnabled={false}
                    numColumns={3}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={styles.recomendationColumn}
                    ItemSeparatorComponent={Separator}
                    data={recommendations}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.push('Details', { id: item.id })}>
                            <Image
                                style={styles.recomendationCover}
                                source={{ uri: `http://image.tmdb.org/t/p/w500/${item.poster_path}` }} />
                        </TouchableOpacity>
                    )}
                />
            </ScrollView>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
                <Icon.Plus style={{ transform: [{ scale: 0.9 }, { rotate: '45deg' }] }} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    closeButton: {
        position: 'absolute',
        top: 54,
        right: 10,
        height: 28,
        width: 28,
        borderRadius: 14,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImageWrapper: {
        position: 'absolute',
        width: '100%',
        height: 595,
        alignItems: 'center',
    },
    backgroundImage: {
        width: 463 / 1,
        height: 759 / 1,
        transform: [
            { translateY: -164 }
        ],
    },
    backgroundImageOverlay: {
        position: 'absolute',
        height: '100%',
        width: '100%',
    },
    coverWrapper: {
        marginTop: 82,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { height: 7, width: 0 },
        shadowRadius: 3.33,
        shadowOpacity: 0.45,
    },
    cover: {
        height: 188,
        width: 134,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        height: 22,
    },
    infoGreenText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#46D369',
    },
    button: {
        marginTop: 27,
        height: 34,
        marginHorizontal: 10,
        backgroundColor: '#E50914',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#E6E6E6',
    },
    text: {
        marginTop: 6,
        marginHorizontal: 10,
        lineHeight: 18,
        fontSize: 14,
        color: '#FDFEFD',
    },
    label: {
        fontSize: 12,
        color: '#999999',
    },
    actionsContainer: {
        flexDirection: 'row',
        marginTop: 9,
        marginHorizontal: 21,
    },
    actionButton: {
        height: 49,
        width: 49,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 38,
    },
    actionIcon: {
        height: 24,
        width: 24,
        borderRadius: 12,
        backgroundColor: '#FEFFFE',
    },
    actionLabel: {
        marginTop: 8,
        fontSize: 9,
        color: '#808080',
    },
    tabsContainer: {
        flexDirection: 'row',
        marginTop: 13,
        marginHorizontal: 15,
    },
    tab: {
        borderTopWidth: 4,
        borderColor: '#E50914',
    },
    tabLabel: {
        marginTop: 12,
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#E6E6E6',
    },
    recomendationContainer: {
        marginTop: 20,
        marginBottom: 39,
        alignSelf: 'center',
    },
    recomendationColumn: {
        marginHorizontal: -5,
    },
    recomendationCover: {
        height: 164,
        width: 113,
        backgroundColor: 'rgba(255,255,255,0.1)',
        marginHorizontal: 5,
    }
});