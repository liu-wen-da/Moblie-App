import React from "react";
import { View, Text, } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninScreen from "../Screens/SigninScreen";
import SignupScreen from "../Screens/SignupScreen";
import LandingPage_S_Universities from "../Screens/LP_S_Universities";
import LP_S_Both from "../Screens/LP_S_Both";
import Profile from "../Screens/Profile";
import Degree from "../Screens/JoinDegree";
import NoUni from "../Screens/LP_S_NoUni";
import ForgotPassword from "../Screens/ForgotPassword";
import Holder from "../Screens/Holder";
import Term from "../Screens/JoinTerm";
import ScheduleNaming from "../Screens/ScheduleNaming";
import EditProfile from "../Screens/EditProfile";
import CurrentSchedule from "../Screens/CurrentSchedule";


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Sign in" component={SigninScreen} />
                <Stack.Screen name="Sign up" component={SignupScreen} />
                <Stack.Screen name="Forgot Password" component={ForgotPassword} />
                <Stack.Screen name="Landing Page" component={LandingPage_S_Universities} />
                <Stack.Screen name="LP_S_Both" component={LP_S_Both} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Degree" component={Degree} />
                <Stack.Screen name="NoUni" component={NoUni} />
                <Stack.Screen name="Holder" component={Holder} />
                <Stack.Screen name="Term" component={Term} />
                <Stack.Screen name="ScheduleNaming" component={ScheduleNaming} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen name="CurrentSchedule" component={CurrentSchedule} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;