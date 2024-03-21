import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { format } from 'date-fns';

const SheetHeader = ({ selectedDate, onDateChange }) => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const iconSize = 35;

    const handlePrevDay = () => {
        const prevDay = new Date(selectedDate);
        prevDay.setDate(selectedDate.getDate() - 1);
        onDateChange(prevDay);
    };

    const handleNextDay = () => {
        const nextDay = new Date(selectedDate);
        nextDay.setDate(selectedDate.getDate() + 1);
        onDateChange(nextDay);
    };

    const onChange = (event, selectedDate) => {
        setShowDatePicker();
        if (selectedDate) {
            onDateChange(selectedDate);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePrevDay} activeOpacity={0.7}>
                <AntDesign name='left' size={iconSize} style={styles.icons}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateContainer}>
                <Text style={styles.date}>{format(selectedDate, 'EEEE, MMMM do')}</Text>
            </TouchableOpacity>

            {showDatePicker && (
                <DateTimePicker
                    value={selectedDate}
                    mode="date"
                    display="default"
                    onChange={onChange}
                    maximumDate={new Date(2024, 11, 31)}
                />
            )}

            <TouchableOpacity onPress={handleNextDay} activeOpacity={0.7}>
                <AntDesign name='right' size={iconSize} style={styles.icons}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <MaterialCommunityIcons name='golf-cart' size={20}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <MaterialCommunityIcons name='walk' size={20}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.holeLength}>
                    <Text style={styles.lengthText} >9</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.holeLength}>
                    <Text style={styles.lengthText}>18</Text>
                </View>
            </TouchableOpacity>
            
            

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 25
        //borderBottomWidth: 1,
    },
    dateContainer: {
        borderWidth: 0.5,
    },
    icons: {
        marginHorizontal: 15,
    },
    date: {
        fontSize: 26,
        margin: 10,
    },
    holeLength: {
        borderWidth: 1,
        backgroundColor: 'lightgreen',
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lengthText: {
        fontSize: 22
    }
});

export default SheetHeader;
