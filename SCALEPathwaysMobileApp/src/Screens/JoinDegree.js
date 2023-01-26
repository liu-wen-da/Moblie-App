import React, { useState } from "react";
import { View, Text, StyleSheet, useWindowDimensions, ScrollView, Button, Alert, FlatList, Pressable} from "react-native";
import Search_Bar from "../components/Search_Bar/Search_Bar";
import CustomButton from "../components/CustomeButton/CustomButton";
import { useNavigation } from '@react-navigation/native';
import HamburgerMenu from "../components/HamburgerMenu/HamburgerMenu";

const DegreeScreen = () => {

    const navigation = useNavigation();

    const onReturnPressed = () => {
        console.warn('Return Pressed');
        navigation.navigate('Profile');
    };

    const onButtonPres = () => {
        Alert.alert('Check on degree details');
    };

    const degrees = [
        { 
            class: 'Computer Science(BS)',
        },
        {
            class: 'Software Engineering(BS)',
        },
        {
            class: 'Data Mining(BS)',
        }
    ]

    const eachClass = ( {item} ) => (
        <View>
            <Pressable style={styles.degree_pressable}>
                    <Text style={styles.class_text}>{item.class}</Text>
            </Pressable>
        </View>
    )

    return (
        <View style={styles.view_padding}>
            <Search_Bar></Search_Bar>
            <Text style={styles.title}>Degrees</Text>

            <FlatList style={styles.flat_list} 
                data={degrees} renderItem={eachClass}>
                {/* <View styles={styles.viewCourse}>
                    <Button
                    disabled
                    title="Computer Science(BS)"
                    onPress = {onButtonPres}
                    color = "#B7B7B7"
                    ></Button>
                </View>

                <View styles={styles.viewCourse}>
                    <Button
                    disabled
                    title="Software Engineering(BS)"
                    onPress = {onButtonPres}
                    color = "#B7B7B7"
                    ></Button>
                </View>

                <View styles={styles.viewCourse}>
                    <Button
                    disabled
                    title="Data Mining(BS)"
                    onPress = {onButtonPres}
                    color = "#B7B7B7"
                    ></Button>
                </View> */}
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
});

export default DegreeScreen