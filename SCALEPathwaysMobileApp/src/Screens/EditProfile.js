import React, { useState } from "react";
import { View, Text, StyleSheet, useWindowDimensions, ScrollView, Button, TextInput, Pressable, Alert} from "react-native";
import CustomButton_back_signin from "../components/CustomeButton/CustomButton_Back_to_signin";
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import ReactDOM from "react-dom";


const EditProfile = () => {


    const navigation = useNavigation();
    
    const onProfileEditPressed = async ( state, city, highSchool, phoneNumber) => {
        try {
            const response = await fetch("http://10.0.2.2:3031/profile/edit", { // 10.0.2.2 is the address used by the android emulator for the localhost.
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({            
                state: state,
                city: city,
                highSchool: highSchool,              
                phoneNumber: phoneNumber,
             })
            })
            const json = await response.text();
            console.log(json);
            let time = new Date().getTime() / 1000
            global.newTime = time
            navigation.navigate("Profile", {newTime: time})
            // check if the user exists by seeing if response is "success"
            // if(json === "success"){
            //     console.log('Response is "' + json + '"", Account Created');
            //     navigation.navigate("Sign in");
            // }
            // else
            // {
            //     console.log('Response is "' + json + '"", Account Creation Failed');
            //     Alert.alert('Email error', 'The email you provided has already been registered or is invalid.') // could implement this as text below the field.
            // }
        }catch(error) {
            Alert.alert("Missing Fields","Please fill in all of the fields.");
        }
    };

    const onChangeProfile = () => {
        console.warn('Change Profile');
        navigation.navigate('Profile');
    };

    return (
        <View style = {styles.mainbackground}>
            <View style>
            <Formik
                initialValues={{ state: '', city: '', highSchool: '', phoneNumber: ''}}
                onSubmit={values => onProfileEditPressed(
                    values.state,
                    values.city,
                    values.highSchool,
                    values.phoneNumber)}
                validateOnMount={true} // this will validate immediately 
                >
                {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, touched }) => (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View styles={styles.root}>
                        
                        <Text style={styles.title}> Edit Profile</Text>
                            <View style={styles.wrapper_white}>        
                                
                                <View style={styles.inputField}>  
                                    
                                    <TextInput
                                        placeholderTextColor={'#444'}
                                        placeholder="+1 (XXX) XXX-XXXX"
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        secureTextEntry={false}
                                        keyboardType="number-pad"
                                        textContentType="telephoneNumber"
                                        onChangeText={handleChange('phoneNumber')}
                                        onBlur={handleBlur('phoneNumber')}
                                        value={values.phoneNumber}
                                    />
                                </View>
                                  
                                <View style={styles.inputField}>  
                                    
                                    <TextInput
                                        placeholderTextColor={'#444'}
                                        placeholder="City"
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        secureTextEntry={false}
                                        textContentType="addressCity"
                                        onChangeText={handleChange('city')}
                                        onBlur={handleBlur('city')}
                                        value={values.city}
                                    />
                                </View>

                                <View style={styles.inputField}>  
                                    
                                    <TextInput
                                        placeholderTextColor={'#444'}
                                        placeholder="Highschool"
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        secureTextEntry={false}
                                        onChangeText={handleChange('highSchool')}
                                        onBlur={handleBlur('highSchool')}
                                        value={values.highSchool}
                                    />
                                </View>

                                <View style={styles.inputField}>  
                                    
                                    <TextInput
                                        placeholderTextColor={'#444'}
                                        placeholder="State"
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        secureTextEntry={false}
                                        onChangeText={handleChange('state')}
                                        onBlur={handleBlur('state')}
                                        value={values.state}
                                    />
                                </View>

                                <View style ={styles.inputFieldCreateAccount}>
                                    <Button title= "Change Profile" onPress={handleSubmit} />
                                </View>

                            </View>
                        <CustomButton_back_signin text="Back to Profile Page" onPress={onChangeProfile} type="TERTIARY" />
                    </View>
                </ScrollView>
                )}
            </Formik>
            </View>
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
        color: "#051C60",
        margin:10,
        marginVertical: 50,
    },
    text: {
        color: '#ffffff',
        marginVertical: 10,
        margin:8,
        
    },
    link: {
        color: '#FDB075',
    },
    mainbackground: {
        backgroundColor: '#494D53',
        flex: .8,
    },
    wrapper_white: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 20,
        dropShadow: 1,
    },
    wrapper: {
        marginTop: 80,
        margin: 20,
     },
    inputFieldCreateAccount: {
        borderRadius : 5,
        padding : 10,
        dropShadow : 1,
    },
    inputField: {
        borderRadius : 4,
        padding : 6,
        backgroundColor : '#ffffff',
        marginBottom : 10,
        borderBottomWidth: 1,
        dropShadow : 1,
    },
    
});

export default EditProfile