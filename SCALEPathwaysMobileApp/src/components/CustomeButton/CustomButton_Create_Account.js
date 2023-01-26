import React from "react";
import { View, Text, StyleSheet, Pressable} from "react-native";


const CustomButton_Create_Account= ({ onPress, text, type = "PRIMARY" }) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    text_TERTIARY: {
        color: '#Black',
    },

});

export default CustomButton_Create_Account