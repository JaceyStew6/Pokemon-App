import { FlatList, ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { getPokemons } from '../store/pokemonSlice'
import React, { useEffect, useState } from 'react'
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export default function HomeScreen({ navigation }) {

    const [search, setSearch] = useState('');
    const [types, setTypes] = useState([]);

    // const type = ["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy", "unknown", "shadow"];

    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons.pokemons);
    const isLoading = useSelector(state => state.pokemons.isLoading);


    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type/`)
            .then(response => {
                setTypes(response.data.results.map(result => result.name));
            })
            .catch(error => console.error(error));
    }, []);


    useEffect(() => {
            dispatch(getPokemons());

    }, []);



    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    const filteredPokemons = (pokemons ?? []).filter(pokemon => {
        const name = pokemon.name.toLowerCase();
        const id = pokemon.url.split('/')[6];
        // return pokemon.types.some(type => type.type.name === search) || name.includes(search.toLowerCase()) || id.includes(search);
        return name.includes(search.toLowerCase()) || id.includes(search);
    })

    return (
        <ScrollView style={styles.mainContainer}>

            {/* <FlatList
                data={type}
                numColumns={8}
                renderItem={(itemData) => {
                    return (
                        <TouchableOpacity style={styles.typeContainer} onPress={getPokemonsByType(itemData.item)}>
                            <Text>{itemData.item}</Text>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item, index) => index}
                scrollEnabled={false}
            /> */}

            {/* {types.map((type) => (
                <Button
                    key={type}
                    title={type}
                    onPress={() => setSearch(type.toLowerCase())}
                />
            ))} */}

            <TextInput style={styles.inputStyle}
                onChangeText={text => setSearch(text)}
                value={search}
                placeholder="Search by name or ID"
                placeholderTextColor={'#6f8490'}
            />

            <FlatList
                data={filteredPokemons}
                numColumns={2}
                renderItem={(itemData) => {
                    const id = itemData.item.url.split('/')[6];
                    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
                    return (
                        <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate("PokemonDetail", { url: itemData.item.url })}>
                            <View style={styles.cardContainer}>
                                <Image
                                    source={{ uri: imageUrl }}
                                    style={{ width: '80%', height: 150, resizeMode: 'contain' }} />
                                <View style={styles.row}>
                                    <Text style={styles.textStyle}>{itemData.item.name.toUpperCase()}</Text>
                                    <Text style={styles.textStyle}>#{id}</Text>
                                </View>

                            </View>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item, index) => index}
                scrollEnabled={false}
            />
        </ScrollView>
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

    touchableContainer: {
        display: 'flex',
        backgroundColor: '#c5ced2',
        marginHorizontal: 11,
        marginVertical: 10,
        // paddingTop: 10,
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
        paddingTop: 10,
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#f7fbff',
        // color: '#6f8490',

    },
    inputStyle: {
        height: 40,
        marginVertical: 10,
        marginLeft: 10,
        width: '94%',
        borderWidth: 1.5,
        padding: 10,
        borderRadius: 10,
        borderColor: '#6f8490',
        color: '#343d43',
    }

    // typeContainer: {
    //     display: 'flex',
    //     backgroundColor: 'lightgrey',
    //     marginHorizontal: 5,
    //     marginVertical: 5,
    //     padding: 5,
    //     borderRadius: 10,
    //     width: 'auto',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
})
