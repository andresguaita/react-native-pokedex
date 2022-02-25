import React from "react";
import { ScrollView, StyleSheet, Text, TextComponent, View } from "react-native";
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from "./FadeInImage";


interface Props {
    pokemon: PokemonFull
}


export const PokemonDetails = ({ pokemon }: Props) => {
    return (
        <ScrollView
            style={{
                ...StyleSheet.absoluteFillObject,
            }}
            showsVerticalScrollIndicator={false}
        >
            <View
                style={{
                    ...styles.container,
                    marginTop: 370
                }}
            >
                <Text style={{
                    ...styles.title
                }}>
                    Types
                </Text>

                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.types.map(({ type }) => (
                            <Text
                                key={type.name}
                                style={{

                                    ...styles.regularText,
                                    marginRight: 10
                                }}
                            >
                                {type.name}
                            </Text>
                        ))
                    }
                </View>
                <Text style={{
                    ...styles.title
                }}>Weight</Text>
                <Text style={{
                    ...styles.regularText
                }}>{pokemon.weight} Kg</Text>


            </View>

            <View style={{
                ...styles.container,

            }}>
                <Text style={{
                    ...styles.title
                }}>
                    Sprites
                </Text>
                <ScrollView
                    style={{}}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <FadeInImage
                        uri={pokemon.sprites.front_default}
                        style={{
                            ...styles.basicSprites
                        }}
                    />

                    <FadeInImage
                        uri={pokemon.sprites.back_default}
                        style={{
                            ...styles.basicSprites
                        }}
                    />

                    <FadeInImage
                        uri={pokemon.sprites.front_shiny}
                        style={{
                            ...styles.basicSprites
                        }}
                    />

                    <FadeInImage
                        uri={pokemon.sprites.back_shiny}
                        style={{
                            ...styles.basicSprites
                        }}
                    />
                </ScrollView>
            </View>
            <View
                style={{
                    ...styles.container,
                }}
            >
                <Text style={{
                    ...styles.title
                }}>Skills</Text>

                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.abilities.map(({ ability }) => (
                            <Text
                                key={ability.name}
                                style={{

                                    ...styles.regularText,
                                    marginRight: 10
                                }}
                            >
                                {ability.name}
                            </Text>
                        ))
                    }
                </View>

            </View>

            <View
                style={{
                    ...styles.container,
                }}
            >
                <Text style={{
                    ...styles.title
                }}>Moves</Text>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        pokemon.moves.map(({ move }) => (
                            <Text
                                key={move.name}
                                style={{

                                    ...styles.regularText,
                                    marginRight: 10
                                }}
                            >
                                {move.name}
                            </Text>
                        ))
                    }
                </View>

            </View>

            <View
                style={{
                    ...styles.container,
                }}
            >
                <Text style={{
                    ...styles.title
                }}>Stats</Text>

                <View >
                    {
                        pokemon.stats.map((stat, i) => (
                            <View

                                key={stat.stat.name + i}
                                style={{ flexDirection: 'row' }}
                            >
                                <Text

                                    style={{

                                        ...styles.regularText,
                                        marginRight: 10,
                                        width: 200
                                    }}
                                >
                                    {stat.stat.name.toLocaleUpperCase()}
                                </Text>

                                <Text

                                    style={{

                                        ...styles.regularText,
                                        marginRight: 10,
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {stat.base_stat}
                                </Text>
                            </View>

                        ))
                    }
                </View>

                <View style={{
                    marginBottom: 10,
                    alignItems: 'center'
                }}>
                    <FadeInImage
                        uri={pokemon.sprites.front_default}
                        style={{
                            ...styles.basicSprites,
                            marginBottom: 20
                        }}
                    />
                </View>

            </View>

        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
    },
    regularText: {
        fontSize: 19,

    },
    basicSprites: {
        width: 100,
        height: 100
    }
})