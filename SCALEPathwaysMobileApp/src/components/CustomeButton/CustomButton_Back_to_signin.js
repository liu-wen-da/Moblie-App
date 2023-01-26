import React from "react";
import { View, Text, StyleSheet, Pressable} from "react-native";


const CustomButton_back_signin= ({ onPress, text, type = "PRIMARY" }) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 5,
        marginVertical: 5,
        alignItems: 'flex-start',
    },
    text_TERTIARY: {
        color: 'black',
    },

});

export default CustomButton_back_signin