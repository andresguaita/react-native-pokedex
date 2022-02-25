import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PokemonScreen } from '../screens/PokemonScreen';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';


export type RootStackParams = {
    HomeScreen: undefined,
    PokemonScreen: {simplePokemon: SimplePokemon, color: string}
}


const Stack = createNativeStackNavigator<RootStackParams>();


export const Navigator = () => {

    return (

        <Stack.Navigator
        screenOptions={{
            headerShown: false,
           
        }}
        
        >           
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
        </Stack.Navigator>

    )
};
