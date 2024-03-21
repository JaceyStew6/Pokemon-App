import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './screens/HomeScreen'
import MyPokedex from './screens/MyPokedex'
import PokemonDetail from './screens/PokemonDetail'
import { Provider } from 'react-redux'
import store from './store/store'
import Icon from 'react-native-vector-icons/FontAwesome'
import IconA from 'react-native-vector-icons/MaterialIcons'


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()



function HomeStack() {
    return (
        <Stack.Navigator initialRouteName='Home' >
            <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name='PokemonDetail' component={PokemonDetail} />
        </Stack.Navigator>
    )
}

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Tab.Navigator screenOptions={{
                    tabBarActiveTintColor: "#dfbb06",
                    tabBarInactiveTintColor: "#c5ced2",
                    tabBarStyle: { backgroundColor: '#343d43' },
                }}>
                    <Tab.Screen name='HomeStack' component={HomeStack} options={{
                        headerShown: false, tabBarIcon: ({ color, size }) => (<Icon name="home" size={size} color={color} />),
                        tabBarLabel: "Home",
                    }} />
                    <Tab.Screen name='MyPokedex' component={MyPokedex} options={{
                        headerShown: false, tabBarIcon: ({ color, size }) => (<IconA name="catching-pokemon" size={size} color={color} />),
                        tabBarLabel: "Pokedex"
                    }} />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    )
}





const styles = StyleSheet.create({})