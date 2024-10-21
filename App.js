import { StyleSheet, View, Image, Dimensions, TouchableOpacity, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import PersonalInfo from './components/PersonalInfo';
import MovieBooking from './components/MovieBooking';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import * as Crypto from 'expo-crypto';

import React, {useState} from 'react';


export default function App() {

  const [booking, setBooking] = useState({
      bookDate: "2000-02-02",
      movieTitle: "",
      numberOfSeats: 0,
      balcony: 0,
  });

  var uuid = Crypto.randomUUID();//this uses the Crypto library to generate a Universal Unique Identifier

  
  async function saveData(){
    //alert("UUID="+uuid);//use this if on web
    Alert.alert("UUID="+uuid);//use this if on phone or virtual device
    await AsyncStorage.setItem(uuid, JSON.stringify(booking));
  }

  async function getData(){
  Alert.alert("UUID="+uuid);//use this if on phone or virtual device
  try {
      let thisBooking = await AsyncStorage.getItem(uuid);
      Alert.alert(thisBooking.title);
    }
    catch {
      Alert.alert("error getting data");
    }
  }
  
  
  return (
    <View style={styles.screencontainer}>
      <View style={styles.imgview}><Image source={require('./assets/moviesV3.png')}/></View>
      <Swiper showsButtons={true}>
          <PersonalInfo screenstyle={styles.screen} data={booking} setData={setBooking}/>
          <MovieBooking screenstyle={styles.screen} data={booking} setData={setBooking}/>

      </Swiper>

      <TouchableOpacity style={styles.button} onPress={saveData}>
        <Text style={{fontSize: 24, fontWeight: "bold"}}>Save Data</Text>
      </TouchableOpacity>
  
      <TouchableOpacity style={styles.button} onPress={getData}>
        <Text style={{fontSize: 24, fontWeight: "bold"}}>Get Data</Text>
      </TouchableOpacity>
      
    </View>
  )
}
var width = Dimensions.get('window');
const styles = StyleSheet.create({
  imgview: {
    flexDirection: "row",
    justifyContent: "center",
    flex: .5,
    marginTop: "8%"
  }, 
  screencontainer: {
    flexDirection:"column",
    flex: 1,
    padding: "1%",
    backgroundColor: "lightgrey"
  },
  screen: {
    flex: 1,
    alignItems: "start",
    padding: "10%"

    
   },
  button: {
    width: "100%",
    height: 50,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 10,
    borderWidth: 2,
    backgroundColor: '#0569FF',
    borderColor: '#0569FF'
  }
  
});
