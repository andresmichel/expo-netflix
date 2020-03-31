import * as React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import logo from '../assets/images/logo.png';

function Menu(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <TouchableOpacity>
                <Text style={styles.item}>Series</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.item}>Movies</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.item}>My List</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
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

export default Menu;