import React from 'react';
import {Text, StyleSheet, View, Touchable} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Player = ({navigation}) => {
    return (
       <View style={styles.button}>
            <TouchableOpacity>
                <Text>Cameron Harris</Text>
            </TouchableOpacity>
       </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'grey',
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    }
});

export default Player;
