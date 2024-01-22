import React, { useState } from "react";
import { View, Text, StyleSheet, useWindowDimensions, ScrollView, Button, TextInput, Pressable, Alert} from "react-native";
import CustomButton_back_signin from "../components/CustomeButton/CustomButton_Back_to_signin";
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import ReactDOM from "react-dom";


const SignupScreen = () => {


    const navigation = useNavigation();


    const onTerm = () => {
        console.warn('Terms');
    };
    const onPrivacy = () => {
        console.warn('Condition');
    };
    
    const onRegisterPressed = async ( first_name, last_name, email, password, password2, phoneNumber, dateOfBirth, city, state, highSchool ) => {
        try {
            console.warn(first_name, last_name, email)
            const response = await fetch("http://10.0.2.2:3031/createAccount/submit", { // 10.0.2.2 is the address used by the android emulator for the localhost.
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: first_name,
                email: email,
                password: password,
                type: "student",
                phoneNumber: phoneNumber,
                dateOfBirth: dateOfBirth,
                city: city,
                state: state,
                highSchool: highSchool,
             })
            })
            const json = await response.text();
            console.log(json);
            // check if the user exists by seeing if response is "success"
            if(json === "success"){
                console.log('Response is "' + json + '"", Account Created');
                navigation.navigate("Sign in");
            }
            else
            {
                console.log('Response is "' + json + '"", Account Creation Failed');
                Alert.alert('Email error', 'The email you provided has already been registered or is invalid.') // could implement this as text below the field.
            }
        }catch(error) {
            Alert.alert("Missing Fields","Please fill in all of the fields.");
        }
    };

    const onSigninPressed = () => {
        console.warn('Sign in');
        navigation.navigate('Sign in');
    };
    return (
        <View style = {styles.mainbackground}>
            <View style>
            <Formik
                initialValues={{ first_name: '', last_name: '', password: '', password2: '', email: '', phoneNumber: '', dateOfBirth: '', city: '', state: '', highSchool: ''}}
                onSubmit={values => onRegisterPressed(
                    values.first_name,
                    values.last_name,
                    values.email,
                    values.password,
                    values.password2,
                    values.phoneNumber,
                    values.dateOfBirth,
                    values.city,
                    values.state,
                    values.highSchool)}
                validateOnMount={true} // this will validate immediately 
                >
                {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, touched }) => (
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
                                    textContentType="name"
                                    authFocus={true}
                                    onChangeText={handleChange('first_name')}
                                    onBlur={handleBlur('first_name')}
                                    value={values.first_name}
                                    />
                                </View>
                                <View style={styles.inputField}>  
                                    
                                    <TextInput
                                        placeholderTextColor={'#444'}
                                        placeholder="Enter last name"
                                        autoCapitalize="none"
                                        keyboardType="name"
                                        textContentType="name"
                                        authFocus={true}
                                        onChangeText={handleChange('last_name')}
                                        onBlur={handleBlur('last_name')}
                                        value={values.last_name}
                                    />
                                </View>
                                <View style={styles.inputField}>  
                                    
                                    <TextInput
                                        placeholderTextColor={'#444'}
                                        placeholder="Enter email"
                                        autoCapitalize="none"
                                        keyboardType="name"
                                        textContentType="name"
                                        authFocus={true}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                    />
                                </View>
                                <View style={styles.inputField}>  
                                    
                                    <TextInput
                                        placeholderTextColor={'#444'}
                                        placeholder="Enter Password"
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        secureTextEntry={false}
                                        textContentType="password"
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                    />
                                </View>
                                <View style={styles.inputField}>  
                                    
                                    <TextInput
                                        placeholderTextColor={'#444'}
                                        placeholder="Confirm Password"
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        secureTextEntry={false}
                                        textContentType="password2"
                                        onChangeText={handleChange('password2')}
                                        onBlur={handleBlur('password2')}
                                        value={values.password2}
                                        // password confirmation
                                        // ref={register({
                                        //     validate: value =>
                                        //       value === values.password || "The passwords do not match"
                                        //   })}
                                    />
                                </View>
                                

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
                                        placeholder="MM/DD/YEAR"
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        secureTextEntry={false}
                                        onChangeText={handleChange('dateOfBirth')}
                                        onBlur={handleBlur('dateOfBirth')}
                                        value={values.dateOfBirth}
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
                                        placeholder="Enter State ex(AK)"
                                        autoCapitalize="True"
                                        keyboardType="name"
                                        textContentType="name"
                                        authFocus={true}
                                        onChangeText={handleChange('state')}
                                        onBlur={handleBlur('state')}
                                        value={values.state}
                                    />
                                </View>

                                <View style ={styles.inputFieldCreateAccount}>
                                    <Button title= "Create Account" onPress={handleSubmit} />
                                </View>
                            </View>

                        <Text style={styles.text}> By registering you agree to our{' '}<Text style={styles.link} onPress={onTerm}>Terms</Text> and <Text style={styles.link} onPress={onPrivacy}>Condition</Text>
                        <CustomButton_back_signin text="Back to Sign in" onPress={onSigninPressed} type="TERTIARY" />

                        </Text>
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

export default SignupScreen