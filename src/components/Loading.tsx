import React from "react";
import { ActivityIndicator, View , Text} from "react-native";

export const Loading = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <ActivityIndicator
            size={50}
            color='blue'

        />
        <Text>Cargando...</Text>
    </View>
  )
};
