import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Keyboard } from 'react-native';
import * as Icon from '../components/Icon';

export default function SearchScreen(props) {
    const [isFocused, setFocused] = useState(false);
    const [search, setSearch] = useState('');
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <View style={styles.inputWrapper}>
                        <Icon.Search style={{ left: 10, position: 'absolute' }} />
                        <TextInput
                            value={search}
                            onChangeText={text => setSearch(text)}
                            onFocus={() => setFocused(true)}
                            onBlur={() => setFocused(false)}
                            style={{ padding: 10, paddingLeft: 40, color: '#fff' }}
                            placeholderTextColor={'rgba(255,255,255,0.5)'}
                            placeholder={'Buscar'} />
                    </View>
                    {isFocused &&
                        <TouchableOpacity onPress={() => {
                            Keyboard.dismiss();
                            setSearch('');
                        }}>
                            <Text style={{ paddingHorizontal: 10, color: '#fff' }}>Cancel</Text>
                        </TouchableOpacity>}
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 44,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputWrapper: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 10,
        marginHorizontal: 10,
    },
});