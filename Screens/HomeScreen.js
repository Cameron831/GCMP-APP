import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import Teetime from '../Components/Teetime';
import SheetHeader from '../Components/SheetHeader';

const START_HOUR = 7; // 7 AM UTC
const END_HOUR = 17; // 5 PM UTC

const HomeScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [teetimes, setTeetimes] = useState([]);

  useEffect(() => {
    retrieveTeetimesForDay();
  }, []);

  const retrieveTeetimesForDay = async () => {
    const dateString = selectedDate.toISOString().split('T')[0];
    try {
        const response = await axios.get(`http://192.168.1.13:3000/teetimes?date=${dateString}`);
        const filteredAndSortedTeetimes = response.data
        .filter(teetime => {
          // Convert each teetime date to a JavaScript Date object
          const teetimeDate = new Date(teetime.date);
          const hour = teetimeDate.getUTCHours();
          const minutes = teetimeDate.getUTCMinutes();
          // Keep teetimes between 7 AM (inclusive) and 5 PM (inclusive), excluding any teetimes beyond 5:00 PM
          return (hour > START_HOUR || (hour === START_HOUR && minutes >= 0)) && 
                (hour < END_HOUR || (hour === END_HOUR && minutes === 0));
        })
        .sort((a, b) => new Date(a.date) - new Date(b.date));
        setTeetimes(filteredAndSortedTeetimes);
    } catch (error) {
        console.error('There was an error fetching the teetimes:', error); 
    }
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
