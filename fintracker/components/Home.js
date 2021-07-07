import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// components
import Header from './Header';
import Balance from './Balance';
import InputBar from './InputBar';
import History from './History';

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            input: ''
        }

    }

    addUpdate() {
        const newUpdate = {
            name: parseInt(this.state.input),
        }
        this.setState({
            input: ''
        })
        if (newUpdate.name !== '' && !isNaN(newUpdate.name)) {
            axios.post('http://localhost:3001/api/updates', newUpdate)
        }
        else {
            alert('Type in a number!')
        }
    }

    render() {
        const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></View>

        return (
            <View style={styles.container} >
                {statusbar}
                < Header />
                <View style={styles.balance}>
                    <Balance />

                </View>
                <View style={styles.input}>
                    <InputBar textChange={input => this.setState({ input })}
                        addUpdate={() => this.addUpdate()}
                    />
                </View>
                <History />

            </View >
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDF8F2',
    },
    statusbar: {
        backgroundColor: 'rgb(192, 165, 192)',
        height: 50
    },
    balance: {
        paddingBottom: 20
    },
    input: {
        paddingBottom: 20,
        alignItems: 'center'
    }
});

export default Home
