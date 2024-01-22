import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import Tabs from "../components/Navbar-React/Tabs"
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
// This screen is to hold the navigation bar.


const majorURL = "http://10.0.2.2:3031/getUserInfo"
var userData;

const Holder = () => {
        // const [userData, setUserData] = useState([]);

        const getData = async (key) => {
                try {
                  const value = await AsyncStorage.getItem(key)
                console.warn("GET async" + value);
                } catch(e) {
                  // error reading value
                }
        }

        const storeData = async (key, value) => {
                try {
                  await AsyncStorage.setItem(key, value)
                  console.warn("store async " + key + " " + value);
                } catch (e) {
                  // saving error
                }
              }
              

        axios.get(majorURL, {
        })
        .then(function (response) {
                userData = response.data;
                // console.error("test");
                console.error(userData.body.userInfo.name);
                // will add more data later 
                storeData("name", userData.body.userInfo.name)
                storeData("email", userData.body.userInfo.email)
                // getData("name")
                // use async storage to store the data
                // try{
                //         const jsonValue = JSON.parse(userData)
                //         await AsyncStorage.setItem('name', jsonValue)
                //         console.warn(jsonValue)
                // }
                // const await AsyncStorage.setItem('name', JSON.stringify(userData));
                // const jsonValue = AsyncStorage.getItem('name')
                // catch (e) {

                // }
        })
        

        const navigation = useNavigation();

        return (
                <Tabs/>
        )
}

export default Holder;