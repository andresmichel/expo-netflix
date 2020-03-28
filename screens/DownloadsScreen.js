import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Icon from '../components/Icon';

export default function DownloadsScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.circle}>
                <Icon.Downloads width={80} height={80} />
            </View>
            <Text style={styles.title}>Nunca te quedes sin Netflix</Text>
            <Text style={styles.label}>Descarga programas y peliculas para que nunca te falte algo para ver, aunque estes offline.</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonLabel}>Ver que puedes descargar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 44,
        alignItems: 'center',
    },
    circle: {
        marginTop: 124,
        height: 145,
        width: 145,
        borderRadius: 80,
        backgroundColor: '#121212',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        height: 100,
        width: 100,
    },
    title: {
        marginTop: 32,
        fontSize: 19,
        fontWeight: 'bold',
        color: '#fff',
    },
    label: {
        maxWidth: 302,
        marginTop: 10,
        fontSize: 16,
        textAlign: 'center',
        color: '#fff',
        marginBottom: 32,
    },
    button: {
        height: 46,
        justifyContent: 'center',
        paddingHorizontal: 11,
        backgroundColor: '#E6E6E6',
    },
    buttonLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
});