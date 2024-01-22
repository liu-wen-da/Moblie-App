import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button, Alert} from "react-native";
import CustomButton from "../components/CustomeButton/CustomButton";
import { useNavigation } from '@react-navigation/native';
import Search_Bar from "../components/Search_Bar/Search_Bar";

const NoUniScreen = () => {

    global.scheduleName = '';
    
    const navigation = useNavigation();

    const onReturnPressed = () => {
        console.warn('Return Pressed');
        navigation.navigate('Profile');
    };

    const onButtonPres = () => {
        Alert.alert('Check on degree details');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View styles={styles.root}>
                <Search_Bar></Search_Bar>
                <Text style={styles.title}>Universities</Text>
                <Button
                disabled
                title="this will contain all Universities, details will pop up after the user clicks on the University"
                onPress = {onButtonPres}
                color = "#841584"
                ></Button>

                <CustomButton text="Return to profile" onPress={onReturnPressed} />

            </View>
        </ScrollView>
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
        marginVertical: 50,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
        margin:8,
    },
    link: {
        color: '#FDB075',
    },
});

export default NoUniScreen