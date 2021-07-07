import React from 'react'
import { Platform, StyleSheet, Text, View, TouchableWithoutFeedback, ImageBackground, Image, Animated } from 'react-native';


class Game extends React.Component {

    constructor() {
        super();

        this.moveAnimation = new Animated.ValueXY({ x: 160, y: 500 })
        this.fadeValue = new Animated.Value(1)
    }

    _moveBall = () => {
        this.moveAnimation.setValue({ x: 160, y: 500 })
        this.fadeValue.setValue(1)
        Animated.sequence([
            Animated.timing(this.moveAnimation, {
                toValue: { x: 160, y: -230 },
                duration: 1000,
                useNativeDriver: false
            }),
            Animated.timing(this.fadeValue, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: false
            })
        ]).start();
    }


    render() {
        const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></View>
        return (
            <View style={styles.container}>
                {statusbar}
                <Text style={styles.text}>Congrats on keeping track of your finances!</Text>
                <Text style={styles.text2}>Feed your finance shark!</Text>
                <View style={styles.imagewrapper}>
                    <TouchableWithoutFeedback onPress={this._moveBall}>
                        <ImageBackground
                            source={require('../images/open2.png')}
                            style={styles.img} />
                    </TouchableWithoutFeedback>
                </View>
                <Animated.View style={[this.moveAnimation.getLayout(), { opacity: this.fadeValue }]}>
                    <Image source={require('../images/fish.png')} style={styles.fish} />
                </Animated.View>
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
        height: 50,
        marginBottom: 50
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'Avenir',
        color: '#545c56',
        marginHorizontal: '10%',
        marginBottom: '10%'
    },
    text2: {
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'Avenir',
        color: '#545c56',
        paddingBottom: 120,
        marginHorizontal: '10%',
    },
    img: {
        width: 450,
        height: 450,
    },
    imagewrapper: {
        alignItems: 'center',
    },
    fish: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 120,
    },
    buttonText: {
        fontSize: 24,
        color: '#333'
    }
});

export default Game
