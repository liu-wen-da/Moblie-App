import React from "react";
import { View, Text, StyleSheet, Pressable} from "react-native";


const CustomButton_Sign_In = ({ onPress, text, type = "PRIMARY" }) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    )
}

// ARE WE EVEN USING THIS??
const styles = StyleSheet.create({
    container: {
        
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'flex-start',
        borderRadius: 5,

    },
    text_TERTIARY: {
        color: '#FFFFFF',
    },

});

export default CustomButton_Sign_In