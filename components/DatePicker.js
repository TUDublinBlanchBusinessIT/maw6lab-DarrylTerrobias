import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useState} from 'react';


export default function DatePicker({thisDate, setThisdate, datelabel}) {

  const [dob, setDob] = useState(new Date("2000-01-01"));
 
  const [showDTP,setShowDTP] = useState(false);
  function showDatePicker(){
    setShowDTP(true);
  }
  function hideDatePicker(value){
    setThisdate(value);
    setShowDTP(false);
  }
  return (
    <>
    <Text style={styles.label}>{datelabel}</Text>
    <View style={{flex:1,width: "100%"}} >
      
      <Text style={styles.textbox}></Text>
      <TouchableOpacity style={styles.button} onPress={showDatePicker}><Text style={{fontSize: 24, fontWeight: "bold"}}>Choose Date</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={showDatePicker}><Text style={{fontSize: 24, fontWeight: "bold"}}>Choose Date</Text></TouchableOpacity>
            {showDTP ? (
         <DateTimePicker style={styles.textbox}
            value={thisDate}
            mode={'date'}
            onChange={(event, value) => hideDatePicker(value)}
            display="default"
         />
      ) : (<View />)}
      
    </View>
    </>
  );
}

const styles = StyleSheet.create({ 
  label: {
    flexDirection:"row",
    fontSize: 24,
    fontWeight: "bold",
  },
  textbox:  {
    flexDirection: "row",
    borderRadius: 5,
    padding: 7,
    border: "1px solid black",
    fontSize: 24,
    marginBottom: 14,
    backgroundColor: "white",
    height: 50
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
