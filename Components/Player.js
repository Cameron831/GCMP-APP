import React from 'react';
import {Text, StyleSheet, View, Touchable} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Player = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text>FirstName LastName</Text>
            <MaterialCommunityIcons name='golf-cart' size={20}/>
            <MaterialCommunityIcons name='walk' size={20}/>
            <MaterialCommunityIcons name='numeric-9-circle-outline' size={20}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        backgroundColor: 'grey',
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
        marginHorizontal: 5
    }
});

export default Player;
