import React, { useState } from "react";
import { View, Text, StyleSheet, useWindowDimensions, ScrollView, TextInput, Button} from "react-native";
import CustomInputs from "../components/CustomeInputs/CustomInputs";
import CustomButton from "../components/CustomeButton/CustomButton";
import CustomButton_Sign_In from "../components/CustomeButton/CustomButton_Back_to_sign_in";
import { useNavigation } from '@react-navigation/native';




const SignupScreen = () => {

    const navigation = useNavigation();


    const onRegisterPressed = () => {
        console.warn('Register Pressed');
    };

    const onBacktoSigninPressed = () => {
        console.warn('Sign in');
        navigation.navigate('Sign in');
    };

    return (
        <View style = {styles.main}> 
            <ScrollView showsVerticalScrollIndicator={false}>
                <View styles={styles.root}>
                    <Text style={styles.title}> Reset Password</Text>
                        <View style={styles.warraper}>
                        

                        
                        <Text style={styles.text}> Please enter your email for recovery </Text>
            

                        
                        <View style={styles.inputField}>  
                        
                            <TextInput
                                placeholderTextColor={'#444'}
                                placeholder="Email"
                                autoCapitalize="none"
                                autoCorrect={false}
                                textContentType="Email"
                            />
                        </View>
                    

                        <CustomButton text="Send" onPress={onRegisterPressed} />

                        
                        <View> 
                            <CustomButton_Sign_In text="Back to Sign in" 
                            onPress={onBacktoSigninPressed} 
                            type="TERTIARY"
                            />
                        </View>
                        
                    
                    </View>
                </View>
            </ScrollView>
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

export default SignupScreen