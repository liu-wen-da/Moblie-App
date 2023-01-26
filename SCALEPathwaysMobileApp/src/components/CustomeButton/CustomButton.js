import React from "react";
import { View, Text, StyleSheet, Pressable} from "react-native";

// How do we apply multiple style containers. CSS 
const CustomButton = ({ onPress, text, type = "PRIMARY" }) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY: {
        backgroundColor: '#4990E2',
    },

    container_TERTIARY: {

    },
    
    container_NAVIGATION: {
        
        backgroundColor: '#d6d6d6',
        width: 'auto',
        borderRadius:0,
        height: 'auto',
        
    },

    text: {
        frontWeight: 'bold',
        color: 'white',
    },

    text_TERTIARY: {
        color: 'grey',
    },

    text_NAVIGATION: {
        color: 'black',
    },

});

export default CustomButton