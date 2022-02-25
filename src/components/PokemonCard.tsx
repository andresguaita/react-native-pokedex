import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, Dimensions, Image } from 'react-native';
import ImageColors from 'react-native-image-colors'
import { SimplePokemon } from "../interfaces/pokemonInterfaces";
import { FadeInImage } from "./FadeInImage";
import { useState, useEffect, useRef } from 'react';
import { useNavigation } from "@react-navigation/native";



interface Props {
    pokemon: SimplePokemon;

}

const windowswith = Dimensions.get('window').width

export const PokemonCard = ({ pokemon }: Props) => {

    const  [bgColor, setbgColor] = useState('grey');

    const isMounted = useRef(true);

    const navigation= useNavigation<any>();
    

    useEffect(() => {

         ImageColors.getColors(pokemon.picture, {
            fallback: 'grey',
          })
          .then(colors =>{

              if(!isMounted.current) return

              if(colors.platform==='android'){
                  setbgColor(colors.dominant || 'grey')
              }
              else if(colors.platform==='ios'){
                  setbgColor(colors.background || 'grey')
              }
          })
        // ios

        // android
        return () =>{
            isMounted.current=false
        }
      
    }, []);
    
    

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={()=> navigation.navigate('PokemonScreen',{simplePokemon: pokemon, color: bgColor})}
        >
            <View
                style={{
                    ...styles.cardContainer,
                    width: windowswith * 0.4,
                    backgroundColor: bgColor
                }}
            >
                <View>
                    <Text
                        style={{ ...styles.name }}
                    >
                        {pokemon.name.toLocaleUpperCase()}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>
                <View
                    style={{...styles.pokebolaContainer}}
                >
                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={{
                        ...styles.pokebola
                    }}
                />
                </View>
                
                <FadeInImage
                    uri={pokemon.picture}
                    style={{
                        ...styles.pokemonImage
                    }}
                />
            </View>
        </TouchableOpacity>
    );


};

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9

    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10
    },
    pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: -25,
        bottom: -25
    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -10,
        bottom: -15

    },
    pokebolaContainer:{
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        overflow: 'hidden',
        opacity: 0.5

    }
})
