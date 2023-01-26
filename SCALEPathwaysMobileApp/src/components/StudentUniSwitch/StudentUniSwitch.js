import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button, } from "react-native";
import SwitchSelector from "react-native-switch-selector";
import { Colors } from "react-native/Libraries/NewAppScreen";

const StudentUniSwitch = () => {
    return (
        <SwitchSelector
        initial={0}
        textColor={'#000000'}
        buttonColor={'#f5a624'}
        borderColor={'#ffffff'}
        hasPadding
        options={[
            { label: "Student", value: "s",}, 
            { label: "University", value: "u",}, 
        ]}
        />
    )
}

export default StudentUniSwitch