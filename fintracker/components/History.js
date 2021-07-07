import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native';

const History = () => {

    const [nums, setNums] = useState([]);

    // get all updates (history)
    useEffect(() => {
        fetch('http://localhost:3001/api/updates').then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setNums(jsonRes));
        // console.log(nums)
    })

    // const removeUpdate = (num) => {
    //     console.log(num)
    //     axios.delete('http://localhost:3001/api/updates/' + num._id)
    // }

    return (
        <View>
            <View>
                <Text style={styles.title}>History</Text>
            </View>
            <View style={styles.container}>
                <ScrollView>
                    {nums.map((num) =>
                        // <TouchableOpacity key={num._id}>
                        <Text style={styles.eachHis} key={num._id}>
                            {num.date}: ${num.name}
                            {/* <Button
                                title="Remove"
                                style={styles.remove}

                            /> */}
                        </Text>

                        // </TouchableOpacity>
                    )}
                </ScrollView>
            </View >
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'rgb(192, 165, 192)',
        width: '82%',
        left: '10%',
        borderRadius: 10,
        maxHeight: 240,
        borderColor: 'rgb(167, 134, 167)',
    },
    eachHis: {
        borderColor: 'rgb(167, 134, 167)',
        // backgroundColor: 'rgb(192, 165, 192)',
        fontSize: 30,
        color: '#EDF8F2',
        padding: 10,
        borderWidth: 2,
        width: 350,
        borderRadius: 10,
        alignContent: 'center',
        textAlign: 'center'
    },
    title: {
        fontSize: 40,
        fontFamily: 'Avenir',
        color: '#545c56',
        textAlign: 'center',
        paddingBottom: 20
    },
    remove: {
        fontFamily: 'Avenir',
        color: '#545c56',
    }

})

export default History
