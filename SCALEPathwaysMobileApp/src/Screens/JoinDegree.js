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


// const majorURL = "http://10.0.2.2:3031/majorsForUniversity"

var degree_data = require('../Data/degrees.json')

const DegreeScreen = () => {
    
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const[filteredData, setFilteredData] = useState([]);
    const[masterData, setMasterData] = useState([]);
    const[search, setSearch] = useState("");

    useEffect(() => {
        fetchData();
        return() => {
            
        }
    }, [])

    const fetchData = () => {
        setFilteredData(degree_data["body"]);
        setMasterData(degree_data["body"]);
    }

    const contains = ({major}, query) => {
        if (major.includes(query)) {
            return true;
        }
            return false;
      };

    const getData = async (key) => {
        try {
          const value = await AsyncStorage.getItem(key)
            console.warn("GET async " + value);
        } catch(e) {
          // error reading value
        }
    }

    const storeData = async (key, value) => {
        try {
          await AsyncStorage.setItem(key, value)
        //   console.warn("store async " + key + " " + value);
        } catch (e) {
          // saving error
        }
      }

    const navigation = useNavigation();


    // TO-DO: this is what we will use later to connect to the database 
    const onReturnPressed = () => {
        console.warn('Return Pressed');
        navigation.navigate('Profile');
    };

    const onButtonPres = () => {
        Alert.alert('Check on degree details');
    };

    const eachClass = ( {item} ) => (
        <View>
            <Pressable 
            onPress={() => {
                console.warn(item.major);
                storeData("major", item.major);
                storeData("major_id", JSON.stringify(item.major_id));
                global.majorID = item.major_id;
                getData("major");
                getData("major_id");
                getData("name");
                //Tabs.navigate("JoinTerm"); //This is what caleb changed
                navigation.navigate("JoinTerm");
              }}

            style={({ pressed }) => [
                {
                    borderRadius: 10,
                    backgroundColor : pressed ? 'white' : "#D9D9D9",
                    flex: 1,
                    padding:15,
                    margin:10,
                },
            ]}>
                    <Text style={styles.class_text}>{item.major}</Text>
            </Pressable>
        </View>
    )
    
    // Used by search bar to filter the results in flat list
    const searchFilter = (text) => {
        if (text) {
            const newData = masterData.filter((item) => {
                const itemData = item.major ? item.major.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredData(newData);
            setSearch(text);
        } else {
            setFilteredData(masterData);
            setSearch(text);
        }
    }

    return (
            <View style={styles.view_padding}>
                <TextInput
                    style={styles.textInputStyle}
                    value={search}    
                    placeholder="Search for Degrees Here..."
                    underlineColorAndroid={'transparent'}
                    onChangeText={(text) => {searchFilter(text)}}
                /> 
                <Text style={styles.title}>Degrees</Text>

                <FlatList style={styles.flat_list} 
                    data={filteredData} renderItem={eachClass}>
                </FlatList>
            </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 30,
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
    }
});

export default DegreeScreen