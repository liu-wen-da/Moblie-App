import React, { useState } from "react";
import { View, Text, StyleSheet, useWindowDimensions, ScrollView, Button, TextInput, Pressable} from "react-native";
import CustomButton_back_signin from "../components/CustomeButton/CustomButton_Back_to_signin";
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';


const SignupScreen = () => {

    // this helper function is a schema for the form validation
    const SignupScreenSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        password: Yup.string()
            .required()
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/(?=.*[0-9])/, 'Password must contain a number.')
            .matches(/(?=.*[a-z])/, 'Password must contain a lowercase letter.')
            .matches(/(?=.*[A-Z])/, 'Password must contain a uppercase letter.')
    });


    const navigation = useNavigation();


    const onTerm = () => {
        console.warn('Terms');
    };
    const onPrivacy = () => {
        console.warn('Condition');
    };
    const onRegisterPressed = async () => {
        try {
            const response = await fetch("http://10.0.2.2:3031/createAccount/submit", { // 10.0.2.2 is the address used by the android emulator for the localhost.
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: "jack",
                email: "test@mail.com",
                password: "mypassword123",
                type: "student",
                phoneNumber: "1234567890",
                dateOfBirth: "03/01/1999",
                city: "seattle",
                state: "WA",
                highSchool: "school"
             })
            })
            const json = await response.json();
            console.log('Sign up ' + json);
        }catch(error) {
            console.error(error);
        } finally
        {
           console.warn('Register Pressed');
        }
        
    };
    const onSigninPressed = () => {
        console.warn('Sign in');
        navigation.navigate('Sign in');
    };
    return (
        <View style = {styles.mainbackground}>
            <View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View styles={styles.root}>
                        

                        <Text style={styles.title}> Create an account</Text>
                        <Text style={styles.text}> Hello </Text>
                        <Text style={styles.text}> Please provide us with some information </Text>
                            <View style={styles.wrapper_white}>
                                <View style={styles.inputField}>  
                                    
                                    <TextInput
                                        placeholderTextColor={'#444'}
                                        placeholder="Enter first name"
                                        autoCapitalize="none"
                                        keyboardType="first name"
                                        textContentType="first name"
                                        authFocus={true}
                                    />
                                </View>
                                <View style={styles.inputField}>  
                                    
                                    <TextInput
                                        placeholderTextColor={'#444'}
                                        placeholder="Enter last name"
                                        autoCapitalize="none"
                                        keyboardType="last name"
                                        textContentType="last name"
                                        authFocus={true}
                                    />
                                </View>
                                <View style={styles.inputField}>  
                                    
                                    <TextInput
                                        placeholderTextColor={'#444'}
                                        placeholder="Enter email"
                                        autoCapitalize="none"
                                        keyboardType="email-address"
                                        textContentType="emailAddress"
                                        authFocus={true}
                                    />
                                </View>
                                <View style={styles.inputField}>  
                                    
                                    <TextInput
                                        placeholderTextColor={'#444'}
                                        placeholder="Enter Password"
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        secureTextEntry={true}
                                        textContentType="password"
                                    />
                                </View>
                                <View style={styles.inputField}>  
                                    
                                    <TextInput
                                        placeholderTextColor={'#444'}
                                        placeholder="Confirm Password"
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        secureTextEntry={true}
                                        textContentType="password"
                                    />
                                </View>

                                <View style ={styles.inputFieldCreateAccount}>

                                    <Button title= "Create Account" onPress={onRegisterPressed} />

                                </View>


                            </View>

                            
                        

                        <Text style={styles.text}> By registering you agree to our{' '}<Text style={styles.link} onPress={onTerm}>Terms</Text> and <Text style={styles.link} onPress={onPrivacy}>Condition</Text>


                        <CustomButton_back_signin text="Back to Sign in" onPress={onSigninPressed} type="TERTIARY" />
                        
                     
    
                        </Text>
                        

                    </View>
                </ScrollView>
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
    inputFieldCreateAccount: {
        borderRadius : 5,
        padding : 10,
        dropShadow : 1,
    },
    inputField: {
        borderRadius : 1,
        padding : 2.5,
        backgroundColor : '#ffffff',
        marginBottom : 8,
        borderBottomWidth: 1,
        dropShadow : 1,
    },
    
});

export default SignupScreen