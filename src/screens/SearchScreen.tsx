import React from "react";
import { View, Platform, ActivityIndicator, Text, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading } from "../components/Loading";
import { PokemonCard } from "../components/PokemonCard";
import { SearchInput } from "../components/SearchInput";
import { usePokemonSearch } from "../hooks/usePokemonSearch";
import { styles } from "../theme/appTheme";
import { useState, useEffect } from 'react';
import { SimplePokemon } from "../interfaces/pokemonInterfaces";


export const SearchScreen = () => {

    const { top } = useSafeAreaInsets()
    const { isFetching, simplePokemonList } = usePokemonSearch()

    const [term, setTerm] = useState('');

    const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

    useEffect(() => {



        if (term.length === 0) {
            return setPokemonFiltered([]);
        }
        if (isNaN(Number(term))) {
            setPokemonFiltered(
                simplePokemonList.filter(poke => poke.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
            )
        }

        else if(Number(term)>0) {
            const pokemonById = simplePokemonList.find(poke => poke.id === term)

            setPokemonFiltered(pokemonById ? [pokemonById] : [])

        }

    }, [term]);


    if (isFetching) {
        return (
            <Loading />
        )
    }

    return (
        <View style={{
            flex: 1,
            marginTop: (Platform.OS === 'ios') ? top : top + 10,
            marginHorizontal: 20

        }}>
            <SearchInput
                onDebounce={(value) => setTerm(value)}
            />
            <FlatList
                data={pokemonFiltered}
                keyExtractor={(pokemon) => pokemon.id}
                numColumns={2}
                ListHeaderComponent={(
                    <Text
                        style={{
                            ...styles.title,
                            ...styles.globalMargin,
                            paddingBottom: 10
                        }}
                    >
                        {term}
                    </Text>
                )}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (

                    <PokemonCard pokemon={item} />

                )}

            />
        </View>
    )
};
