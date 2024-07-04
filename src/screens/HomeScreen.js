import { View, Text, Button } from 'react-native'
import React from 'react'

export default function HomeScreen(props) {
    const { navigation } = props

    goToSettings = () => {
        navigation.navigate('Settings')
    }

    return (
        <View>
            <Text>Estamos desde HomeScreen. Esto es React Native</Text>
            <Button title="Ir a Settings" onPress={goToSettings} />
        </View>
    )
}
