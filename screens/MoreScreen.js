import React, { useState } from 'react';
import {
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    Text,
    FlatList,
    StyleSheet,
} from 'react-native';
import * as Icon from '../components/Icon';

const profiles = [
    { id: 1, image: require('../assets/images/avatars/avatar-1.png'), name: 'Rick', active: true },
    { id: 2, image: require('../assets/images/avatars/avatar-2.png'), name: 'Morty', active: false },
    { id: 3, image: require('../assets/images/avatars/avatar-3.png'), name: 'Summer', active: false },
    { id: 4, image: require('../assets/images/avatars/avatar-4.png'), name: 'Beth', active: false },
    { id: 5, image: require('../assets/images/avatars/avatar-5.png'), name: 'Squanchy', active: false, styles: { marginRight: 0 } },
];

const settings = [
    { id: 1, icon: Icon.Check, title: 'My List' },
    { id: 2, icon: Icon.Settings, title: 'App Settings' },
    { id: 3, icon: Icon.Account, title: 'Account' },
    { id: 4, icon: Icon.Help, title: 'Help' },
];

function Separator() {
    return <View style={styles.separator} />;
}

function Footer() {
    return (
        <View style={styles.footerContainer}>
            <TouchableOpacity>
                <Text style={styles.logoutLabel}>Sign Out</Text>
            </TouchableOpacity>
            <Text style={styles.versionLabel}>Version: 12.24.0 (3028) 5.0.1-001</Text>
        </View>
    )
}

function SettingItem(props) {
    const [isActive, setActive] = useState(false);
    return (
        <TouchableWithoutFeedback
            onPressIn={() => setActive(true)}
            onPressOut={() => setActive(false)}>
            <View style={[styles.settingsItem, isActive && styles.settingsItemActive]}>
                <props.icon />
                <Text style={styles.settingsItemLabel}>{props.title}</Text>
                <Icon.ChevronMini style={styles.settingsChevron} />
            </View>
        </TouchableWithoutFeedback>
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
                            <View style={[styles.profileAvatarWrapper, isActive(index) && styles.profileAvatarActive]}>
                                <Image
                                    style={styles.profileAvatar}
                                    source={profile.image} />
                            </View>
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
                    <TouchableOpacity style={styles.profileEditButton}>
                        <Icon.Edit style={styles.profileEditIcon} />
                        <Text style={styles.profileEditLabel}>Manage Profiles</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                data={settings}
                ItemSeparatorComponent={Separator}
                renderItem={({ item }) => <SettingItem {...item} />}
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
    profileAvatarWrapper: {
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'transparent',
        borderRadius: 5,
    },
    profileAvatar: {
        height: 56,
        width: 56,
        borderRadius: 4,
    },
    profileAvatarActive: {
        borderColor: '#FFFFFE',
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
    profileEditButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileEditIcon: {
        marginRight: 6,
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
    settingsItemActive: {
        backgroundColor: '#262626',
    },
    settingsItemLabel: {
        marginLeft: 9,
        fontSize: 16,
        color: '#B3B3B3',
    },
    settingsChevron: {
        marginLeft: 'auto',
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