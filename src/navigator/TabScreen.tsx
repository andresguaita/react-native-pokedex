import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PokemonScreen } from "../screens/PokemonScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { RootStackParams } from "./Navigator";

const TabSearch = createNativeStackNavigator<RootStackParams>();


export const TabSearchScreen = () => {

  return (

      <TabSearch.Navigator
      screenOptions={{
          headerShown: false,
         
      }}
      
      >           
          <TabSearch.Screen name="HomeScreen" component={SearchScreen} />
          <TabSearch.Screen name="PokemonScreen" component={PokemonScreen} />
      </TabSearch.Navigator>

  )
};