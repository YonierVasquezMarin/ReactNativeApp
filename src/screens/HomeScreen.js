import { View, Text, Button } from 'react-native'
import React from 'react'

export default function HomeScreen(props) {
    const { navigation } = props

    goToSettings = () => {
        navigation.navigate('Settings')
    }

    return (
        <View>
            <Text>Estamos desde HomeScreen</Text>
            <Button title="Ir a Settings" onPress={goToSettings} />
        </View>
    )
}
