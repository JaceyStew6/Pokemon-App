import { StyleSheet, Text, View, FlatList, Image, Button, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'
import HomeScreen from './HomeScreen';

export default function PokemonDetail({ navigation, route }) {

    const url = route.params.url;
    const [pokemon, setPokemon] = useState([]);

    useLayoutEffect(() => {
        if (pokemon.name) {
            navigation.setOptions({ title: `${pokemon.name.toUpperCase()}` })
        }
    }, [pokemon.name])

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setPokemon(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
    })

    const addToPokedex = async () => {
        let pokedex = await AsyncStorage.getItem('pokedexStorage');
        pokedex = pokedex != null ? JSON.parse(pokedex) : [];

        if (pokedex.some(p => p.id === pokemon.id)) {
            alert('This Pokemon is already in your Pokedex.');
        } else {
            pokedex.push(pokemon);
            await AsyncStorage.setItem('pokedexStorage', JSON.stringify(pokedex));
        }
    }

    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.imageStyle}>
                <Image
                    source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png` }}
                    style={[styles.imageStyle,{ width: '100%', height: 400 }]} />
            </View>

            <View style={styles.pokemonContainer}>
                {/* <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={addToPokedex}>
                        <Text style={styles.buttonText}>Add to Pokedex</Text>
                    </TouchableOpacity>
                </View> */}


                {/* Prenom du pokemon et id */}
                <View style={styles.pokemonHead}>
                    <Text style={styles.pokemonName}>{pokemon.name} <Text style={styles.pokemonId}>#{pokemon.id}</Text></Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={addToPokedex}>
                        <Text style={styles.buttonText}>Add to Pokedex</Text>
                    </TouchableOpacity>
                </View>



                {/* Types du pokemon */}
                <Text style={styles.titles}>Types</Text>
                <FlatList
                    data={pokemon.types}
                    horizontal={true}
                    renderItem={(itemData) => {
                        return (
                            <View style={styles.typeContainer}>
                                <Text style={styles.textType}>{itemData.item.type.name}</Text>
                            </View>
                        )
                    }}
                    keyExtractor={(item, index) => index}
                    scrollEnabled={false}
                />

                {/* Description du pokemon */}
                <Text style={styles.titles}>Description</Text>
                <View style={styles.typeContainer}>
                    <Text style={styles.textDesc}>height: {pokemon.height}"</Text>
                    <Text style={styles.textDesc}>weight: {pokemon.weight}kg</Text>
                </View>

                {/* Stats du pokemon */}
                <Text style={styles.titles}>Stats</Text>
                <FlatList
                    data={pokemon.stats}
                    renderItem={(itemData) => {
                        return (
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={styles.progressBarContainer}>
                                    <Text style={styles.textType}>{itemData.item.stat.name.toUpperCase()}: {itemData.item.base_stat}</Text>
                                </View>
                                <View style={[styles.progBar, { height: 10, backgroundColor: '#6f8490', marginHorizontal: 10, flex: 0.5, width: 100 }]}>
                                    <View style={{ width: `${(itemData.item.base_stat / 255) * 100}%`, backgroundColor: '#dfbb06', height: '100%' }} />
                                </View>
                            </View>
                        )
                    }}
                    keyExtractor={(item, index) => index}
                    scrollEnabled={false}
                />

                {/* Evolutions du pokemon */}
                <Text style={styles.titles}>Evolutions</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#c5ced2',
        height: '100%',
        width: '100%',
    },

    imageStyle: {
        backgroundColor: '#8ca7b6',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        shadowColor: '#343d43',
        shadowOpacity: 0.9,
        shadowRadius: 3.84,
        elevation: 3,
    },

    imgStyle: {
        // borderRadius: 50,
        shadowColor: '#343d43',
        shadowOpacity: 0.9,
        shadowRadius: 3.84,
        elevation: 3,
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#881122',
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        width: '30%',
        height: 50,
        shadowColor: '#343d43',
        shadowOpacity: 0.9,
        shadowRadius: 3.84,
        elevation: 3,
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },

    pokemonContainer: {
        display: 'flex',
        marginHorizontal: 15,
        marginVertical: 5,
    },

    pokemonName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#343d43'
    },

    pokemonId: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6f8490'
    },

    pokemonHead: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        paddingTop: 10,
    },

    titles: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10,
        textAlign: 'center',
        marginVertical: 10,
        color: '#6f8490'
    },

    typeContainer: {
        display: 'flex',
        backgroundColor: '#8ca7b6',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 5,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#343d43',
        shadowOpacity: 0.9,
        shadowRadius: 3.84,
        elevation: 2,
    },

    textType: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#343d43'
    },

    textDesc: {
        fontSize: 15,
        marginHorizontal: 5,
        color: '#343d43',
    },

    progBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#343d43',
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 2,
    },

    progressBarContainer: {
        display: 'flex',
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }


    // buttonContainer: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignContent: 'center',
    //     marginTop: 10,
    // },
})