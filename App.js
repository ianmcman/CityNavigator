import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

const Tab = createDrawerNavigator();
const artPic = require('./images/art.png');
const magMile = require('./images/mile.png');
const pier = require('./images/pier.png');
const waterTow = require('./images/water.png');
const willTower = require('./images/willis.png');

function ArtInst() {
  return (
    <View style={styles.screenContainer}>
      <Image source={artPic} style={styles.picture}/>
    </View>
  );
}

function MagMile() {
  return (
    <View style={styles.screenContainer}>
      <Image source={magMile} style={styles.picture}/>
    </View>
  );
}

function NavyPier() {
  return (
    <View style={styles.screenContainer}>
      <Image source={pier} style={styles.picture}/>
    </View>
  );
}

function WaterTower() {
  return (
    <View style={styles.screenContainer}>
      <Image source={waterTow} style={styles.picture}/>
    </View>
  );
}

function WillisTower() {
  return (
    <View style={styles.screenContainer}>
      <Image source={willTower} style={styles.picture}/>
    </View>
  );
}

export default function App() {
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Art Institute of Chicago" component={ArtInst} />
        <Tab.Screen name="Magnificent Mile" component={MagMile} />
        <Tab.Screen name="Navy Pier" component={NavyPier} />
        <Tab.Screen name="Water Tower" component={WaterTower} />
        <Tab.Screen name="Willis Tower" component={WillisTower} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  picture: {
    width: 320,
    height: 480
  }
});
