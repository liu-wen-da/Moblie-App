import React from "react";
import { View, Text, StyleSheet, Image, ScrollView} from "react-native";
import CustomButton from "../components/CustomeButton/CustomButton";
import Profile from "../../assets/images/profile.png";
import { useNavigation } from '@react-navigation/native';
import HamburgerMenu from "../components/HamburgerMenu/HamburgerMenu";
import Icon from 'react-native-vector-icons/FontAwesome'

const ProfileScreen = () => {

    const navigation = useNavigation();

    const onReturnPressed = () => {
        console.warn('Return Pressed');
        navigation.navigate('Sign in');
    };

    const onDegreePagepressed = () => {
        console.warn('Turn to degree page');
        navigation.navigate('Degree');
    };

    const pressedLogout = async () => {
        {
            try {
                const response = await fetch("http://10.0.2.2:3031/logout", { // 10.0.2.2 is the address used by the android emulator for the localhost.
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                })
                const json = await response.json();
                console.log('Log out ' + json);
            }catch(error) {
                console.error(error);
            } finally
            {
            console.warn('Logout Pressed');
            navigation.navigate("Sign in");
            }
        };
    }
    
    // TODO: Have 3 seperate containers, use flex space to order our components to get consistent spacing in our buttons/navbar. 
    return (
        <View style={styles.view_padding}>
                
                <Text style={styles.title}> User Profile </Text>
                {/* To-do: be able to edit the profile  */}
                {/* To-do: allow user to upload their profile picture  */}
                <View style ={styles.userPic}>
                    <Image source={Profile} style={[styles.logo]} />
                    <Icon name='pencil-square-o' style={styles.iconEdit} size={15}/>
                </View>
                <View style={styles.flat_list}>
                {/* To-do: display user's information */}
                    <Text style={styles.text}> Name: </Text>
                    <Text style={styles.text}> University: </Text>
                    <Text style={styles.text}> Email: </Text>
                    <Text style={styles.text}> Major: </Text>
                </View>
                <CustomButton Logout text={"Logout"} onPress = {pressedLogout} type = "NAVIGATION">    </CustomButton>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#051C60",
        margin:10,
    },
    text: {
        color: 'black',
        marginVertical: 15,
        margin:9,
        borderBottomWidth: 1,
        borderBottomColor: '#B7B7B7'
    },
    userPic: {
        backgroundcolor: '#F0F0F0',
        flexDirection: 'row'
    },
    logo: {
        width: 80,
        height: 80,
        wideth: 80,
        borderRadius: 40,
        margin: 10
    },
    iconEdit: {
        color: 'black',
        marginTop: 5
    },
    userInfo: {
        margin:20,
        height: 100
    },
    view_padding: {
        flex: 1,
        paddingTop:40
    },
    flat_list: 
    {
        flex: 1,
        margin:20,
        height:100,
    },
});

export default ProfileScreen;