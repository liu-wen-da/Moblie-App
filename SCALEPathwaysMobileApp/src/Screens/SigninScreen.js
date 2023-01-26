import React, { useState } from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput, Button, Pressable, Alert} from "react-native";
import Logo from "../../assets/images/scale.png";
import CustomButton_Forgot_Password from "../components/CustomeButton/CustomButton_Forgot_Password";
import CustomButton_Create_Account from "../components/CustomeButton/CustomButton_Create_Account";
import { useNavigation } from '@react-navigation/native';
import { Validator } from 'email-validator';
import { Formik } from 'formik';
import * as Yup from 'yup';




const SigninScreen = () => {

    const SigninScreenSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        password: Yup.string()
            .required()
            .min(8, 'Password is too short - should be 8 chars minimum.')
    });

    const onlogin = async ( email, password ) => {
        try {
            const response = await fetch("http://10.0.2.2:3031/login/submit", { // 10.0.2.2 is the address used by the android emulator for the localhost.
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: 'admin@gmail.com',
                password: 'ikelos437',
             })
            })
            const json = await response.json();
            console.log('Sign in '+ json);
            console.log(email, password);
            console.log('Logged In Successfully');
            navigation.navigate('Holder');
        }catch(error) {
            console.error(error);
            navigation.navigate('Holder');
        }
    }


    const navigation = useNavigation();
    

    // tells me the forgot password button was pressed
    const onForgotPasswordPressed = () => {
        console.warn('Forgot Password');
        navigation.navigate('Forgot Password');
    };

    // tells me the sign up button was pressed
    const onSignUpPressed = () => {
        console.warn('Sign Up');
        navigation.navigate('Sign up');
    };

    return (
        <View style = {styles.mainbackground}> 
            <View style>

            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => onlogin(values.email, values.password)}
                validationSchema={SigninScreenSchema}
                validateOnMount={true} // this will validate immediately 
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, touched }) => (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image source={Logo} style={[styles.logo]} />
                    <View style={styles.warraper}>
                   
                        <View style = {styles.wrapper_white}>
                        
                            <View style={styles.inputField}>  
                            
                                <TextInput
                                    placeholderTextColor={'#444'}
                                    placeholder="Username"
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    textContentType="emailAddress"
                                    authFocus={true}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                />
                            </View>
                            <View style={styles.inputField}>  
                            
                                <TextInput
                                    placeholderTextColor={'#444'}
                                    placeholder="Password"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    secureTextEntry={true}
                                    textContentType="password"
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                />
                            </View>
 
                            <View style ={styles.inputFieldSignin}>
                                <Button title="Sign In" onPress={handleSubmit} />
                            </View>

                            
                            <View style={styles.container_pass_acc}>
                                
                                <CustomButton_Create_Account text="Create Account" onPress={onSignUpPressed} type="TERTIARY" />
                                <CustomButton_Forgot_Password text="Forgot Password" onPress={onForgotPasswordPressed} type="TERTIARY" />
                                {/* <Button title="Forgot Password" onPress={onForgotPasswordPressed}/>
                                <Button title="Create Account" onPress={onSignUpPressed}/> */}
                            </View>                    
                        </View>                       
                    </View>
                </ScrollView>
                )}
            </Formik>

            </View>
   

        </View>
        
    )
}


const styles = StyleSheet.create({
    logo: {
        width: '85%',
        maxHeight: 300,
        maxWidth: 300,
        marginVertical: 40,
        marginHorizontal: 45,
    },
    inputField: {
        borderRadius : 4,
        padding : 6,
        backgroundColor : '#ffffff',
        marginBottom : 10,
        borderBottomWidth: 1,
        dropShadow : 1,
    },
    inputFieldSignin: {
        borderRadius : 4,
        dropShadow : 1,
    },
    warraper: {
       marginTop: 80,
       margin: 20,
    },
    button: {
        backgroundColor: '#0096F6',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 17,
        frontWeight: 'bold',
    },
    mainbackground: {
        backgroundColor: '#494D53',
    },
    wrapper_white: {
        backgroundColor: '#ffffff',
        padding: 12,
        borderRadius: 20,
        dropShadow: 1,
    },
    background: {
        backgroundColor: '#ffffff',
        
    },
    container_pass_acc: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
        
    },

});

export default SigninScreen