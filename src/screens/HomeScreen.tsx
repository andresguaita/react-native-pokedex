import React from "react";
import { Image, FlatList, ActivityIndicator, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PokemonCard } from "../components/PokemonCard";

import { usePokemonPaginated } from "../hooks/usePokemonPaginated";
import { styles } from "../theme/appTheme";


export const HomeScreen = () => {
  const { top } = useSafeAreaInsets()

  const { simplePokemonList, loadPokemons } = usePokemonPaginated()

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />
      <View
        style={{ alignItems: 'center' }}
      >
        <FlatList
          data={simplePokemonList}
          keyExtractor={(pokemon) => pokemon.id}
          numColumns={2}
          ListHeaderComponent={(
            <View
              style={{ display: 'flex', flexDirection: 'row' , justifyContent: 'center'}}
            >
              <Image
                source={require('../assets/poke-logo.png')}
                style={{
                  ...styles.pokebolaLogo,
                  top: top + 20,
                  marginBottom: top + 20,
                  paddingBottom: 10
                }}
              />
              <Text
                style={{
                  ...styles.title,
                  top: top + 20,
                  marginBottom: top + 20,
                  marginLeft: 5,
                  paddingBottom: 10,
                  color: 'black'
                }}
              >
                Pokedex
              </Text>

            </View>

          )}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (

            <PokemonCard pokemon={item} />

          )}
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={(
            <ActivityIndicator
              style={{ height: 100 }}
              size={20}
              color='blue'
            />)}
        />
      </View>

    </>
  );
};
