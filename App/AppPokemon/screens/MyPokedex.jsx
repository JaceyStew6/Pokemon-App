import { StyleSheet, Text, View, FlatList, Image, Button, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function MyPokedex() {
    const [pokedex, setPokedex] = useState([]);

    useFocusEffect(
        useCallback(() => {
            const showPokedex = async () => {
                const storedPokedex = await AsyncStorage.getItem('pokedexStorage');
                if (storedPokedex) {
                    setPokedex(JSON.parse(storedPokedex));
                }
            };
            showPokedex();
        }, [])
    );

    const deletePokemonFromPokedex = async (id) => {
        try {
            const storedPokedex = await AsyncStorage.getItem('pokedexStorage');
            if (storedPokedex) {
                let pokedex = JSON.parse(storedPokedex);
                const updatedPokedex = pokedex.filter(pokemon => pokemon.id !== id);
                await AsyncStorage.setItem('pokedexStorage', JSON.stringify(updatedPokedex));
                setPokedex(updatedPokedex);
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.rowTitle}>
                <Text style={styles.myPokedexTitle}>My Pokedex
                </Text>
                <Icon
                    name='catching-pokemon'
                    size={45}
                    color='#ae9205' />
            </View>

            <FlatList
                data={pokedex}
                numColumns={2}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.touchableContainer} onPress={() => deletePokemonFromPokedex(item.id)}>
                            <View style={styles.cardContainer}>
                                <Image
                                    source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png` }}
                                    style={{ width: '80%', height: 150, resizeMode: 'contain' }}
                                />
                                <View style={styles.row}>
                                    <Text style={styles.textStyle}>{item.name.toUpperCase()}</Text>
                                    <Text style={styles.textStyle}>#{item.id}</Text>
                                </View>
                                {/* <Button title='remove' onPress={() => deletePokemonFromPokedex(item.id)} /> */}
                            </View>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={item => item.id}
                scrollEnabled={false}
            />
        </ScrollView >
    )
}

const styles = StyleSheet.create({

    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#a9b5bc',
        height: '100%',
        width: '100%',
    },

    myPokedexTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
        color: '#ae9205',
        marginRight: 10,
    },

    rowTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    touchableContainer: {
        display: 'flex',
        backgroundColor: '#c5ced2',
        marginHorizontal: 11,
        marginVertical: 10,
        borderRadius: 10,
        width: 200,
        height: 200,
        justifyContent: 'center',
        shadowColor: '#343d43',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingTop: 5,
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6f8490',
    },
})