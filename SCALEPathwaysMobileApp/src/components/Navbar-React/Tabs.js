import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image } from 'react-native';
import ProfileScreen from '../../Screens/Profile';
import LpBothScreen from '../../Screens/LP_S_Both';
import LP from '../../Screens/JoinDegree';
import UniScreen from '../../Screens/LP_S_Universities'

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
                        <Tab.Screen name="LP" component={LP} options = {{
                               tabBarIcon: ({focused}) => (
                                        <View style = {{allignItems: 'center', justifyContent: 'center'}}>
                                                <Image 
                                                        source={require('../../../assets/Icons/home.png')}
                                                        resizeMode='contain'
                                                        style={{
                                                                width: 25,
                                                                height: 25,
                                                                tintColor: focused ? '#4990E2' : '#1c1c21'
                                                        }}
                                                />
                                                <Text 
                                                        style={{allignItems: 'center', tintColor: focused ? '#4990E2' : '#1c1c21', fontSize: 12}}>
                                                        HOME
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
                        <Tab.Screen name="Schedule" component={LpBothScreen} options = {{
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
                                                        SCHEDULE
                                                </Text>
                                        </View>
                               ), 
                        }}/>
                        <Tab.Screen name="Uni" component={UniScreen} options = {{
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
                                                        UNIVERSITY
                                                </Text>
                                        </View>
                               ), 
                        }}/>
                        
                </Tab.Navigator>
        )
}

export default Tabs;