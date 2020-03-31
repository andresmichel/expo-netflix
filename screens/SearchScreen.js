import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet,
    Keyboard,
} from 'react-native';
import { useSpring, animated } from 'react-spring';
import { useNavigation } from '@react-navigation/native';
import * as Icon from '../components/Icon';
import Poster from '../components/Poster';

const AnimatedView = animated(View);
const AnimatedTouchableOpacity = animated(TouchableOpacity);

function Separator() {
    return <View style={{ height: 8 }} />;
}

function Header() {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerLabel}>Movies</Text>
        </View>
    );
}

export default function SearchScreen(props) {
    const [isFocused, setFocused] = useState(false);
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const navigation = useNavigation();
    const animatedProps = useSpring({ f: isFocused ? 1 : 0 });
    let inputRef = useRef();
    const searchMovies = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?${[
                'api_key=a3907dd1f83c801545fea1ba56fc4d81',
                `query=${search}`
            ].join(['&'])}`);
            const data = await response.json();
            setData(data.results);
        } catch (error) {
            // 
        }
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <View style={styles.searchBoxContainer}>
                    <TouchableWithoutFeedback onPress={() => inputRef.focus()}>
                        <View style={styles.searchBox}>
                            <View style={styles.inputContainer}>
                                <Icon.SearchMini style={{ marginHorizontal: 7 }} />
                                <AnimatedView style={{
                                    flex: animatedProps.f.interpolate({ range: [0, 1], output: [0, 1] })
                                }}>
                                    <TextInput
                                        onChangeText={() => console.log('wiehf')}
                                        autoCapitalize={'none'}
                                        ref={ref => inputRef = ref}
                                        style={styles.inputLabel}
                                        keyboardAppearance={'dark'}
                                        value={search}
                                        onChangeText={text => setSearch(text)}
                                        onEndEditing={() => searchMovies()}
                                        onFocus={() => setFocused(true)}
                                        onBlur={() => setFocused(false)}
                                        placeholderTextColor={'#7F7F7F'}
                                        placeholder={'Buscar'} />
                                </AnimatedView>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    <AnimatedTouchableOpacity onPress={() => {
                        Keyboard.dismiss();
                        setSearch('');
                        setData([]);
                    }}
                        style={{
                            width: animatedProps.f.interpolate({ range: [0, 1], output: [0, 80] })
                        }}>
                        <Text
                            numberOfLines={1}
                            ellipsizeMode={'clip'}
                            style={styles.cancelLabel}>
                            Cancel
                            </Text>
                    </AnimatedTouchableOpacity>
                </View>
                {data.length > 0 && <FlatList
                    style={{ flex: 1 }}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    ListHeaderComponent={Header}
                    keyboardShouldPersistTaps={'handled'}
                    keyboardDismissMode={'interactive'}
                    stickyHeaderIndices={[0]}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={styles.columnWrapper}
                    numColumns={3}
                    data={data}
                    ItemSeparatorComponent={Separator}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={{ marginHorizontal: 4 }}
                            onPress={() => {
                                Keyboard.dismiss();
                                navigation.navigate('Details', { id: item.id })
                            }}>
                            <Poster path={item.poster_path} />
                        </TouchableOpacity>
                    )}
                />}
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
    headerContainer: {
        width: '100%',
        height: 26,
        marginBottom: 8,
        justifyContent: 'center',
        backgroundColor: '#373737',
        paddingHorizontal: 10,
    },
    headerLabel: {
        color: '#B3B3B3',
        fontSize: 14,
        fontWeight: 'bold',
    },
    searchBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    searchBox: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        height: 31,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#323232',
        borderRadius: 5,
        marginHorizontal: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputLabel: {
        height: '100%',
        color: '#7F7F7F',
        fontSize: 15,
    },
    cancelLabel: {
        paddingHorizontal: 10,
        color: '#fff',
    },
    columnWrapper: {
        marginHorizontal: -4,
        justifyContent: 'center',
    },
});