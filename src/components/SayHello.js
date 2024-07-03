import { View, Text } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'

export default function SayHello(props) {
    const { name } = props

    return (
        <View>
            <Text>Hello, {name}!</Text>
        </View>
    )
}

SayHello.propTypes = {
    name: PropTypes.string,
}

SayHello.defaultProps = {
    name: 'desconocido',
}
