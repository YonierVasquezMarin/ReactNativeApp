import { View, Text, Button } from 'react-native'
import React from 'react'

export default function SettingsScreen(props) {
    const { navigation } = props

    goToHome = () => {
        navigation.navigate('Home')
    }

    return (
        <View>
            <Text>Estamos desde SettingsScreen</Text>
            <Button title="Ir a Home" onPress={goToHome} />
        </View>
    )
}
