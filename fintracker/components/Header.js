import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>
            <Image
                source={require('../images/fint.jpeg')}
                style={styles.img} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 250,
        height: 250
    }
})

export default Header
