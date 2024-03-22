import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Player from './Player';
import { format, parseISO } from 'date-fns';

const Teetime = ({ time }) => {
    const date = parseISO(time.date);
    const offsetDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
    const formattedTime = format(offsetDate, 'h:mm a');

    return (
        <View style={styles.container}>
            <View style={styles.timeContainer}>
                <Text style={styles.time}>{formattedTime}</Text>
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
        justifyContent: 'center',
        borderBottomWidth: 1,
        //borderWidth: 1,
        //marginVertical: 5
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
