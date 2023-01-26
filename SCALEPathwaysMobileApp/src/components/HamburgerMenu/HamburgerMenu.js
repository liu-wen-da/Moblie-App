import React, { useState } from "react";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { View } from "react-native";
import { Button, Pressable, Text } from "react-native";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomButton from "../CustomeButton/CustomButton";
import { FlexStyle } from "react-native";
import { FullWindowOverlay } from "react-native-screens";


const HamburgerMenu = (onPress) => {
        
        const [navbarOpen, setNavbarOpen] = useState(false)
        const navigation = useNavigation();
        const Tab = createBottomTabNavigator();

        const handleToggle = () => {
                console.warn("Opened/Closed Navigation Menu");
                setNavbarOpen(!navbarOpen)
        }

        const pressedProfile = () =>
        {
                console.warn("Navigation: Pressed Profile Button");
                navigation.navigate("Profile");
        }

        // Function to logout. Need to call something to remove the credentials maybe...
        const pressedLogout = () =>
        {
                console.warn("Navigation: Pressed Logout");
                navigation.navigate("Sign in");
        }

        const pressedDegree = () =>
        {
                console.warn("Navigation: Pressed Degree");
                navigation.navigate("Degree");
        }

        const pressedLandingPage = () =>
        {
                console.warn("Navigation: Pressed Landing Page");
                navigation.navigate("Landing Page");
        }

        const pressedboth = () =>
        {
                console.warn("Navigation: Pressed Both");
                navigation.navigate("LP_S_Both")
        }
        
        
        

        return (
                // <nav className="navBar">
                //         <button>{navbarOpen ? "Close" : "Open"}</button>
                //         <button onPress={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>
                //         <button onPress={pressedNavigation}></button>
                //         <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>...</ul>
                // </nav>
                // <>
                //         <Button title="Degree" onPress={pressedDegree}  />
                //         <Button title="Profile" onPress={pressedProfile} />
                //         <Button title="LP" onPress={pressedLandingPage}  />
                //         <Button title="Logout" onPress={pressedLogout}   />
                // </>
                // <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
                //<Pressable onPress={onPress} style={[styles.menu]}>
                //<Text>Hello</Text>
                //</Pressable>
                
                // !! Why can I not style 'title' button>
                // <View style = {styles.navbarMenu}>
                //         <CustomButton Logout text={"Logout"} onPress = {pressedLogout} type = "NAVIGATION">    </CustomButton>
                //         <CustomButton Profile text={"Profile"} onPress = {pressedProfile} type = "NAVIGATION"> </CustomButton>
                //         <CustomButton LP text={"LP"} onPress = {pressedLandingPage} type = "NAVIGATION"> </CustomButton> 
                //         <CustomButton Degree text={"Degree"} onPress = {pressedProfile} type = "NAVIGATION"> </CustomButton>
                //         <Button title = "Hello" style = {styles.anyName}></Button>
                // </View>


                <View style = {styles.navbarMenu}>
                        <CustomButton Logout text={"Logout"} onPress = {pressedLogout} type = "NAVIGATION">    </CustomButton>
                        <CustomButton Profile text={"Profile"} onPress = {pressedProfile} type = "NAVIGATION"> </CustomButton>
                        <CustomButton LP text={"LP"} onPress = {pressedLandingPage} type = "NAVIGATION">       </CustomButton> 
                        <CustomButton Degree text={"Degree"} onPress = {pressedDegree} type = "NAVIGATION">   </CustomButton>
                        <CustomButton Degree text={"Both"} onPress = {pressedboth} type = "NAVIGATION">   </CustomButton>
                </View>
                
        )
}

const styles = StyleSheet.create({
        navbarMenu: {
                display: "flex",
                flex: 0.1,
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                backgroundColor: "#D9D9D9",
        },
})


export default HamburgerMenu

