import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Player from './Player';
import { format } from 'date-fns';

const Teetime = ({ time }) => {
    return (
       <View style={styles.container}>
            <View style={styles.timeContainer}>
                <Text style={styles.time}>{format(time, 'h:mm a')}</Text>
            </View>
            <Player/>
            <Player/>
            <Player/>
            <Player/>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    timeContainer: {
        alignItems: 'center',
        width: 115,
        height: 50
    },
    time: {
        fontSize: 20
    }
});

export default Teetime;
