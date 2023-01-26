import React, { useState } from "react";
import { View, Text, StyleSheet, useWindowDimensions, ScrollView, FlatList, Pressable} from "react-native";
import CustomInputs from "../components/CustomeInputs/CustomInputs"; // for the custom inputs 
import CustomButton from "../components/CustomeButton/CustomButton"; // for the custom button
import { useNavigation } from '@react-navigation/native';
import  HamburgerMenu from "../components/HamburgerMenu/HamburgerMenu";
import Search_Bar from "../components/Search_Bar/Search_Bar"
import Tabs from "../components/Navbar-React/Tabs"

const LandingPage_S_Universities = () => {

    const navigation = useNavigation();

    const universities = [
        { 
            class: 'Washington State University',
        },
        {
            class: 'University of Washington',
        },
        {
            class: 'Central Washington University',
        }
    ]

    const GETUniversites = async () => {
        {
            try {
                const response = await fetch("http://10.0.2.2:3031/universities", { // 10.0.2.2 is the address used by the android emulator for the localhost.
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                })
                const json = await response.json();
                console.log(json);
            }catch(error) {
                console.error(error);
            } finally
            {
            console.warn('Logout Pressed');
            navigation.navigate("Sign in");
            }
        };
    }

    const eachUniversity = ( {item} ) => (
        <View>
            <Pressable style={styles.university_pressable}>
                    <Text style={styles.class_text}>{item.class}</Text>
            </Pressable>
        </View>
    )

    return (
        <View style={styles.view_padding}>
            <Search_Bar></Search_Bar>
            <Text style={styles.title}>Universities</Text>

            <FlatList style={styles.flat_list} 
                data={universities} renderItem={eachUniversity}>
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
        color: "black",
        margin:10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
        margin:8,
    },
    link: {
        color: '#FDB075',
    },
    view_padding: {
        flex: 1,
        paddingTop:40
    },
    university_pressable: {
        borderRadius: 10,
        backgroundColor: "#D9D9D9",
        flex: 1,
        padding:20,
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

export default LandingPage_S_Universities;
