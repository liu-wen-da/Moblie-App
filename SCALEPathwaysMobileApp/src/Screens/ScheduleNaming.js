import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, useWindowDimensions, ScrollView, Button, Alert, FlatList, Pressable, ActivityIndicator, TextInput} from "react-native";
import Search_Bar from "../components/Search_Bar/Search_Bar";
import CustomButton from "../components/CustomeButton/CustomButton";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HamburgerMenu from "../components/HamburgerMenu/HamburgerMenu";
import GestureFlipView from 'react-native-gesture-flip-card';
import axios from 'axios'
import JoinTerm from './JoinTerm'
import Tabs from '../components/Navbar-React/Tabs'

const ScheduleNameScreen = () => {

    const [scheduleName, onChangeScheduleName] = React.useState('');
    
    if (global.schedules == undefined)
    {
        global.schedules = []
    }

    const generateSchedule = async () => {
        try {
            const response = await fetch("http://10.0.2.2:3031/generateSchedule", { // 10.0.2.2 is the address used by the android emulator for the localhost.
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                degree_id: "1",
                university_id: "1",
                start_term_id: global.termID,
                schedule_name: global.scheduleName,
                major_id: global.majorID,
             })
            })
            const json = await response.text();
            const parsed_json = JSON.parse(json);
            response_string = JSON.stringify(json);
            console.warn("GS TERM " + global.termID);
            console.warn("GS MAJOR " + global.majorID);
            console.warn("Generate Schedule Response: " + response_string);
            
            global.scheduleID = parsed_json.body.schedule_id
            
            // Adding to user schedules list
            global.schedules.push({id: parsed_json.body.schedule_id, name: global.scheduleName})

            
            console.error("GLOBAL SCHEDULE ID: " + parsed_json.body.schedule_id)
            
            // Work on synchronization; navigate only after value set; await or .then()
            // navigation.navigate("Schedule")

        }catch(error) {
            // We attempted to log-in this way because the response from the POST request for Log-in
            // is just "success" which is a format error. 
            // It should be something like {"response":"success"}
            console.error(error.toString());
            // reload the page

        }
    }

    const navigation = useNavigation()

    const onPress = async () => 
    {
        
        console.warn("NAME: " + scheduleName);
        if (scheduleName == "")
        {
            Alert.alert("Empty Field", "Please enter a name");
        }
        else
        {
            global.scheduleName = scheduleName;
            const result = await generateSchedule();
            // generateSchedule().then(
            //     navigation.navigate("Schedule")
            // );
            // navigation.navigate("Schedule");
            navigation.navigate("LP_S_Both", {scheduleName: scheduleName});
        }
    }

    return (
        <View style={styles.view_padding}>
            <Text style={styles.title}>Enter the name of your schedule!</Text>
            <TextInput
                style={styles.inputText}
                onChangeText={onChangeScheduleName}
                value={scheduleName}
                placeholder="Enter a name...">
            </TextInput>
            <Button onPress={onPress} title="Submit"></Button>
        </View>
    )
}
 
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 30,
    },
    textInputStyle: {
        margin: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#black",
        margin:10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
        margin:8,
    },
    viewCourse: {
        margin:'center',
        height: 100
    },
    view_padding: {
        flex: 1,
        paddingTop:40
    },
    degree_pressable: {
        borderRadius: 10,
        backgroundColor: "#D9D9D9",
        flex: 1,
        padding:15,
        margin:10,
    },    
    class_text: {
        fontSize:18,
        fontWeight: 'bold', 
    },
    flat_list: 
    {
        flex: 1,
    },
    textInputStyle:{
        height: 40,
        borderWidth: 1,
        paddingLeft: 10,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: '#FFFFFF',
    },
    inputText: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default ScheduleNameScreen;

