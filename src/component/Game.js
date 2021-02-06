import { Math } from 'core-js';
import React, { Component } from 'react';

import { Text, View, StyleSheet } from "react-native";

class Game extends Component {
    target = Math.random();
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.target}>{this.target}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ddd",
        flex: 1,
        paddingTop: 30,
    },
    target: {
        fontSize: 40,
        backgroundColor: "#aaa",
        textAlign: 'center',
        marginHorizontal: 50,
    }
});

export default Game;