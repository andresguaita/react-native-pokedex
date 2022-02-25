import React from "react";
import { View, StyleSheet, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { useState, useEffect } from 'react';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props{
    onDebounce: (value: string) => void
}

export const SearchInput = ({onDebounce}:Props) => {
    const [textValue, setTextValue] = useState('');

    const debouncedValue = useDebouncedValue(textValue)

    useEffect(() => {
        onDebounce(debouncedValue)
    }, [debouncedValue]);
    
    
    return (
        <View style={styles.container}>
            <View style={styles.textBackground}>
                <TextInput
                    placeholder="Search Pokemon"
                    style={styles.textInput}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue}
                />
                <Icon
                    name='search-outline'
                    color='grey'
                    size={30}

                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        
    },
    textBackground: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textInput: {
        flex: 1,
        fontSize: 18

    }
})
