import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Balance = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/balance').then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setItems(jsonRes));
        // console.log(items)
    })

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Current Balance:</Text>
            <Text style={styles.title}>
                ${items[0].total}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        fontFamily: 'Avenir',
        color: '#545c56'
    }
})

export default Balance
