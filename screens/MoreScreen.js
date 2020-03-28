import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text, FlatList, StyleSheet } from 'react-native';

const profiles = [
    { id: 1, image: require('../assets/images/avatars/avatar-1.png'), name: 'Andres', active: true },
    { id: 2, image: require('../assets/images/avatars/avatar-2.png'), name: 'Sara y Andrea', active: false },
    { id: 3, image: require('../assets/images/avatars/avatar-3.png'), name: 'Elsa', active: false },
    { id: 4, image: require('../assets/images/avatars/avatar-4.png'), name: 'Ari', active: false },
    { id: 5, image: require('../assets/images/avatars/avatar-5.png'), name: 'Elias', active: false, styles: { marginRight: 0 } },
];

const settings = [
    { title: 'Mi lista' },
    { title: 'Configuracion de App' },
    { title: 'Cuenta' },
    { title: 'Ayuda' },
];

function Separator() {
    return <View style={styles.separator} />;
}

function Footer() {
    return (
        <View style={styles.footerContainer}>
            <Text style={styles.logoutLabel}>Cerrar sesion</Text>
            <Text style={styles.versionLabel}>Version: 12.24.0 (3028)</Text>
        </View>
    )
}

export default function MoreScreen(props) {
    const [currentProfile, setProfile] = useState(0);
    const isActive = index => index === currentProfile;
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.profileList}>
                    {profiles.map((profile, index) => (
                        <TouchableOpacity
                            key={profile.id}
                            style={[styles.profileItem, profile.styles]}
                            onPress={() => setProfile(index)}>
                            <Image
                                style={[styles.profileAvatar, isActive(index) && styles.profileAvatarActive]}
                                source={profile.image} />
                            <Text
                                numberOfLines={1}
                                style={[
                                    styles.profileLabel,
                                    isActive(index) && styles.profileLabelActive
                                ]}>
                                {profile.name}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.profileEditContainer}>
                    <Text style={styles.profileEditLabel}>Administrar perfiles</Text>
                </View>
            </View>
            <FlatList
                data={settings}
                ItemSeparatorComponent={Separator}
                renderItem={({ item }) => (
                    <View style={styles.settingsItem}>
                        <View style={styles.settingsIcon} />
                        <Text style={styles.settingsItemLabel}>{item.title}</Text>
                    </View>
                )}
                ListFooterComponent={Footer}
                keyExtractor={item => item.title}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 44,
    },
    headerContainer: {
    },
    label: {
        color: '#fff',
    },
    profileList: {
        marginTop: 17,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    profileItem: {
        marginRight: 15,
    },
    profileAvatar: {
        height: 56,
        width: 56,
        borderRadius: 5,
    },
    profileAvatarActive: {
        borderWidth: 2,
        borderColor: '#FFFFFE',
        transform: [{ scale: 60 / 56 }], // Outside border fix
    },
    profileLabel: {
        marginTop: 7,
        width: 56,
        color: '#B2B2B2',
        textAlign: 'center',
    },
    profileLabelActive: {
        fontWeight: 'bold',
        color: '#FEFFFE',
    },
    profileEditContainer: {
        marginTop: 50,
        marginBottom: 26,
        alignItems: 'center',
    },
    profileEditLabel: {
        color: '#B2B2B2',
        fontSize: 14,
        fontWeight: 'bold',
    },
    settingsItem: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        paddingHorizontal: 16,
        backgroundColor: '#121212',
    },
    settingsItemLabel: {
        marginLeft: 9,
        color: '#B3B3B3',
    },
    settingsIcon: {
        height: 24,
        width: 24,
        backgroundColor: '#B3B3B3',
    },
    separator: {
        height: 2,
        backgroundColor: '#000',
    },
    footerContainer: {
        paddingVertical: 37,
        alignItems: 'center',
    },
    logoutLabel: {
        fontSize: 16,
        color: '#B3B3B3',
    },
    versionLabel: {
        marginTop: 5,
        fontSize: 16,
        color: '#555555',
    },
});