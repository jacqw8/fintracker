import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import axios from 'axios'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

// components
import Home from './components/Home';
import Game from './components/Game';


const Tab = createBottomTabNavigator();

export default class App extends React.Component {


  render() {
    // const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></View>

    return (
      <NavigationContainer>

        {/* <View style={styles.container}>
          {statusbar}
          <Header />
          <View style={styles.balance}>
            <Balance />

          </View>
          <View style={styles.input}>
            <InputBar textChange={input => this.setState({ input })}
              addUpdate={() => this.addUpdate()}
            />
          </View>

          <History />
        </View> */}

        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Balance') {
                iconName = focused
                  ? 'cash'
                  : 'cash-outline';
              } else if (route.name === 'Shark') {
                iconName = focused ? 'water' : 'water-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />
            },
          })}
          tabBarOptions={{
            activeTintColor: '#EDF8F2',
            inactiveTintColor: '#EDF8F2',
            style: {
              backgroundColor: 'rgb(192, 165, 192)',
              height: 80
            }
          }}
        >
          <Tab.Screen
            name="Balance"
            component={Home}
          />
          <Tab.Screen
            name="Shark"
            component={Game}
          />
        </Tab.Navigator>
      </NavigationContainer >
    );
  }
}

