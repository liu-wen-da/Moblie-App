import React, { useState } from "react";
import { View, Text, StyleSheet, useWindowDimensions, ScrollView, TextInput, Button, Alert} from "react-native";
import CustomInputs from "../components/CustomeInputs/CustomInputs";
import CustomButton from "../components/CustomeButton/CustomButton";
import CustomButton_Sign_In from "../components/CustomeButton/CustomButton_Back_to_sign_in";
import { useNavigation } from '@react-navigation/native';
import * as YUP from 'yup';
import {Formik} from 'formik';
import ReactDOM from "react-dom"
import * as Yup from 'yup';


const ForgotPassword = () => {

    // const ForgotPasswordSchema = Yup.object().shape({
    //     email: Yup.string().email().required('An email is required for password recovery'),
    // });

    const navigation = useNavigation();
    
    const onBacktoSigninPressed = () =>{
        console.warn('Sign in');
        navigation.navigate('Sign in');
    };
    
    const onForgotPasswordPressed = async (email) => {
        try{
            const response = await fetch("http://10.0.2.2:3031/login/reset", { // 10.0.2.2 is the address used by the android emulator for the localhost.
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email
             })
            })
            const json = await response.text();
            console.log(json);
            // check if the user exists by seeing if response is "success"
            if(json === "success"){
                console.log('Response is "' + json + '", Forgot Password Request is Sent');
                Alert.alert('Restoration Email Sent', 'We have sent an email to reset your password.');
                navigation.navigate("Sign in");
            }
            else
            {
                console.log('Response is "' + json + '" ", Forgot Password Request Failed');
                Alert.alert('Invald Email', 'Email is not registered, please enter a registered email.');
            }
        }
        catch(error) {
            // We attempted to forgot-password this way because the response from the POST request for Forgot Password
            // is just "success" which is a format error. 
            // It should be something like {"response":"success"}
            Alert.alert('Error', error.toString());
            console.error(error.toString());
        } 
    };

    return (
        <View style = {styles.main}>
            <Formik
                    initialValues={{ email: ''}}
                    onSubmit={values => onForgotPasswordPressed(values.email)}
                    // validationSchema={ForgotPasswordSchema}
                    validateOnMount={true} // this will validate immediately 
                >
                {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, touched }) => (
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View styles={styles.root}>
                            <Text style={styles.title}> Reset Password</Text>
                                <View style={styles.warraper}>
                                
                                <Text style={styles.text}> Please enter your email for recovery </Text>
                                
                                <View style={styles.inputField}>  
                                    <TextInput
                                    placeholderTextColor={'#444'}
                                    placeholder="Email Address"
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    textContentType="emailAddress"
                                    authFocus={true}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    />
                                </View>

                                <CustomButton text="Send" onPress={handleSubmit} />

                                <View> 
                                    <CustomButton_Sign_In text="Back to Sign in" 
                                    onPress={onBacktoSigninPressed} 
                                    type="TERTIARY"
                                    />
                                </View>
                                
                            </View>
                        </View>
                    </ScrollView>
                )}
            </Formik> 
        </View>
    )
}


const styles = StyleSheet.create({
    root: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#FFFFFF",
        margin:10,
        marginVertical: 50,
    },
    text: {
        color: '#FFFFFF',
        marginVertical: 10,
        margin:8,
    },
    inputField: {
        borderRadius : 4,
        padding : 6,
        backgroundColor : '#FFFFFF',
        marginBottom : 10,
        borderWidth : 1,
        dropShadow : 1,
    },
    warraper: {
        marginTop: -30,
        margin: 20,
     },
    main: {
        backgroundColor: '#494D53',
        flex: .8,
    },
});

export default ForgotPassword