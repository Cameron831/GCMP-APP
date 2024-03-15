import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Teetime from '../Components/Teetime';

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Teetime/>
      <Teetime/>
    </View>
  );
};

const styles = StyleSheet.create({
  // Your styles here
});

export default HomeScreen;
