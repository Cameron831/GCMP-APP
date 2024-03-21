import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

const SheetHeader = ({ selectedDate, onDateChange }) => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const iconSize = 30;

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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateContainer: {
        borderWidth: 0.5,
    },
    icons: {
        marginHorizontal: 10,
    },
    date: {
        fontSize: 26,
        margin: 5,
    },
});

export default SheetHeader;
