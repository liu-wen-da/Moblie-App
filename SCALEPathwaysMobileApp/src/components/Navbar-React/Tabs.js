import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image } from 'react-native';
import ProfileScreen from '../../Screens/Profile';
import LpBothScreen from '../../Screens/LP_S_Both';
import JoinDegree from '../../Screens/JoinDegree';
import UniScreen from '../../Screens/LP_S_Universities'
import Term from '../../Screens/JoinTerm'
import ScheduleNaming from '../../Screens/ScheduleNaming';
import EditProfile from '../../Screens/EditProfile';
import CurrentSchedule from '../../Screens/CurrentSchedule';

const Tab = createBottomTabNavigator();

// Add to navigation bar here. Make sure to import screens from correct directory.
const Tabs = () => {
        
        return(
                <Tab.Navigator 
                        tabBarOptions={{
                                showLabel: false,
                        }}
                        screenOptions={{
                        tabBarHideOnKeyboard: true,
                }}>
                        <Tab.Screen name="University" component={UniScreen} options = {{
                               tabBarIcon: ({focused}) => (
                                        <View style = {{allignItems: 'center', justifyContent: 'center',}}>
                                                <Image 
                                                        source={require('../../../assets/Icons/uni.png')}
                                                        resizeMode='contain'
                                                        style={{
                                                                width: 25,
                                                                height: 25,
                                                                tintColor: focused ? '#4990E2' : '#1c1c21'
                                                        }}
                                                />
                                                <Text 
                                                        style={{allignItems: 'center', tintColor: focused ? '#4990E2' : '#1c1c21', fontSize: 12}}>
                                                        UNIVERSITY
                                                </Text>
                                        </View>
                               ), 
                                                        
                        }}/>
                        <Tab.Screen name="Degrees" component={JoinDegree} options = {{
                                tabBarIcon: ({focused}) => (
                                        <View style = {{allignItems: 'center', justifyContent: 'center'}}>
                                                <Image 
                                                        source={require('../../../assets/Icons/education.png')}
                                                        resizeMode='contain'
                                                        style={{
                                                                width: 25,
                                                                height: 25,
                                                                tintColor: focused ? '#4990E2' : '#1c1c21'
                                                        }}
                                                />
                                                <Text 
                                                        style={{allignItems: 'center', tintColor: focused ? '#4990E2' : '#1c1c21', fontSize: 12}}>
                                                        DEGREES
                                                </Text>
                                        </View>
                               ), 
                        }} />
                        <Tab.Screen name="Profile" component={ProfileScreen} options = {{
                               tabBarIcon: ({focused}) => (
                                        <View style = {{allignItems: 'center', justifyContent: 'center'}}>
                                                <Image 
                                                        source={require('../../../assets/Icons/user.png')}
                                                        resizeMode='contain'
                                                        style={{
                                                                width: 25,
                                                                height: 25,
                                                                tintColor: focused ? '#4990E2' : '#1c1c21'
                                                        }}
                                                />
                                                <Text 
                                                        style={{allignItems: 'center', tintColor: focused ? '#4990E2' : '#1c1c21', fontSize: 12}}>
                                                        PROFILE
                                                </Text>
                                        </View>
                               ), 
                        }} />
                        <Tab.Screen name="MySchedule" component={LpBothScreen} options = {{
                               tabBarIcon: ({focused}) => (
                                        <View style = {{allignItems: 'center', justifyContent: 'center'}}>
                                                <Image 
                                                        source={require('../../../assets/Icons/calendar.png')}
                                                        resizeMode='contain'
                                                        style={{
                                                                width: 25,
                                                                height: 25,
                                                                tintColor: focused ? '#4990E2' : '#1c1c21'
                                                        }}
                                                />
                                                <Text 
                                                        style={{tintColor: focused ? '#4990E2' : '#1c1c21', fontSize: 12}}>
                                                        MY SCHEDULE
                                                </Text>
                                        </View>
                               ), 
                        }}/>
                                                
                        <Tab.Screen name="JoinTerm" component={Term} options = {{
                                tabBarButton: () => null,
                                tabBarIconStyle : {display: "none"}
                        }}/>

                         <Tab.Screen name="ScheduleNaming" component={ScheduleNaming} options = {{
                                tabBarButton: () => null,
                                tabBarIconStyle : {display: "none"}
                        }}/>
                        <Tab.Screen name="EditProfile" component={EditProfile} options = {{
                                tabBarButton: () => null,
                                tabBarIconStyle : {display: "none"}
                        }}/>                    

                        <Tab.Screen name="LP_S_Both" component={LpBothScreen} options = {{
                                tabBarButton: () => null,
                                tabBarIcon : {display: "none"}
                        }}/>
                        
                        <Tab.Screen name="CurrentSchedule" component={CurrentSchedule} options = {{
                                tabBarButton: () => null,
                                tabBarIconStyle : {display: "none"}
                        }}/>
                        
                </Tab.Navigator>
        )
}

export default Tabs;