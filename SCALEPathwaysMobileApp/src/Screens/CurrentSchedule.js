import React, { useState, useEffect, Component } from "react";
import { View, Text, StyleSheet, ScrollView, Button, SafeAreaView, StatusBar, FlatList, Pressable, Alert, ActivityIndicator} from "react-native";
import CustomInputs from "../components/CustomeInputs/CustomInputs"; // for the custom inputs 
import CustomButton from "../components/CustomeButton/CustomButton"; // for the custom button
import { useNavigation } from '@react-navigation/native'
import Search_Bar from "../components/Search_Bar/Search_Bar"

const CurrentSchedule = () => {

    let [isLoading, setIsLoading] = useState(true);
    let [error, setError] = useState();
    let [response, setResponse] = useState([]);

    let [year, setYear] = useState([]);
    let [term, setTerm] = useState([]);
    let [course, setCourse] = useState([]);

    let [ID, setID] = useState();

    // implement search later
    
    const navigation = useNavigation();


    const onReturnPressed = () => {
        console.warn('Return Pressed');
        navigation.navigate('Profile');
    };

    const onButtonPress = () => {
        Alert.alert('Check on degree details');
    };

    const oneTerms = ( {item} ) => (
        <View>
             <Text style={styles.heading}>{item.name}</Text>
             <FlatList style={styles.flat_list}
                 data={item.courses}
                 renderItem = {eachClass}
             />
         </View>
     )

     const eachClass = ( {item} ) => (
        <View>
            <Pressable onPress={() => {
                console.warn("pressed " + item.name);
                }}

            style={({ pressed }) => [
                {
                    borderRadius: 10,
                    backgroundColor : pressed ? 'white' : "#D9D9D9",
                    flex: 1,
                    padding:10,
                    margin:10,
                },
                ]}>
                    <Text style={styles.class_text}>{item.name}</Text>
            </Pressable>
        </View>
    )
    console.warn("SELECTED ID: " + selectedSchedule.id)
    uniURL = 'http://10.0.2.2:3031/getScheduleCourses?' + new URLSearchParams({schedule_id: selectedSchedule.id,})

    const fetchData = () => {
        fetch(uniURL)
          .then((response) => response.json())
          .then((json) => setResponse(json.body))
          .catch((error) => console.error(error))
          .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        setIsLoading(true);
        fetchData();
      }, [selectedSchedule]);

    const getContent = () => {
        if (global.scheduleName == null)
        {
            Alert.alert("No Schedule Found!", "Please generate a schedule to view this page");
            console.warn(global.scheduleName);
            navigation.goBack();
        }
        else if (isLoading) {
            return <ActivityIndicator size="large"/>
        }
        else if (error)
        {
            console.error("GET CONTENT ERROR: " + error);
            return <Text>Error</Text>
        }
        else
        {
            return (
                <View style={styles.view_padding}>
                    <Text style={styles.title}>{selectedSchedule.name}</Text>
                    <FlatList style={styles.flat_list}
                        data={response.instruction_terms}
                        renderItem = {oneTerms}>
        
                    </FlatList>
                </View>
        
            )
        }
    };
    
    return(
        <View style={styles.view_padding}>
            {getContent()}
        </View>
    )
}

const styles = StyleSheet.create({
    view_padding: {
        flex: 1,
        paddingTop:10
    },
    root: {
        alignItems: 'center',
        padding: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "black",
        margin:10,
    },
    heading: {
        fontSize: 20,
        color: "#051C60",
        margin:10
    },
    text: {
        color: 'gray',
        marginVertical: 10,
        margin:8,
    },
    link: {
        color: '#FDB075',
    },
    class_pressable: {
        borderRadius: 10,
        backgroundColor: "#D9D9D9",
        flex: 1,
        padding:10,
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
    
});

export default CurrentSchedule;