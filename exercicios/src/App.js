import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Simples from './componentes/Simples'

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Simples texto='Flexível!!'/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    f20: {
        fontSyze: 40
    }
})