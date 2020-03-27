import * as React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import logo from '../assets/images/logo.png';

function Header(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <Text style={styles.item}>Programas</Text>
            <Text style={styles.item}>Películas</Text>
            <Text style={styles.item}>Mi lista</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        width: '100%',
        paddingTop: 44,
        paddingLeft: 10,
        height: 88,
        backgroundColor: '#000',
        alignItems: 'center',
        flexDirection: 'row',
    },
    item: {
        color: '#fff',
        paddingLeft: 30,
        fontSize: 16,
    },
    logo: {
        height: 40,
        width: 40
    },
});

export default Header;