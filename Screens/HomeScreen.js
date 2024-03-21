import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Teetime from '../Components/Teetime';
import SheetHeader from '../Components/SheetHeader';

const HomeScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [teetimes, setTeetimes] = useState([]);

  useEffect(() => {
    generateTeetimesForDay(selectedDate);
  }, [selectedDate]);

  const generateTeetimesForDay = (date) => {
    const startHour = 7; //start time
    const endHour = 17; //end time
    const newTeetimes = [];
  
    let currentDate = new Date(date.setHours(startHour, 0, 0, 0));
  
    while (currentDate.getHours() < endHour || (currentDate.getHours() === endHour && currentDate.getMinutes() === 0)) {
      newTeetimes.push(new Date(currentDate));
      currentDate.setMinutes(currentDate.getMinutes() + 10); // increment time
    }
  
    setTeetimes(newTeetimes);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <SheetHeader selectedDate={selectedDate} onDateChange={setSelectedDate} />
      </View>

      <ScrollView style={styles.teetimeContainer}>
        {teetimes.map((time, index) => (
          <Teetime key={index} time={time} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerContainer: {
    //margin: 20,
    width: '100%',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  teetimeContainer: {
    width: '100%',
  },
});

export default HomeScreen;
