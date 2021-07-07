import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'

const InputBar = (props) => {

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={(input) => props.textChange(input)}
                    value={props.input}
                    placeholder='Change in balance'
                    keyboardType='numbers-and-punctuation'
                    clearButtonMode="always"
                />

                <TouchableOpacity style={styles.addButton} onPress={props.addUpdate}>
                    <Text style={styles.addButtonText}>ADD</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#171717',
        shadowOpacity: .1,
        width: '80%',
        left: '5%',

    },
    input: {
        backgroundColor: '#F3F3F3',
        flex: 1,
        fontSize: 18,
        height: 35,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        height: 50,

    },
    addButton: {
        width: 100,
        backgroundColor: 'rgb(192, 165, 192)',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,

    },
    addButtonText: {
        color: '#EDF8F2',
        fontSize: 18,
        fontWeight: '700',
        fontSize: 30,
    },
})

export default InputBar
