import React, { useState, useEffect} from "react";
import { View, Text, StyleSheet, useWindowDimensions, ScrollView, FlatList, Pressable, ActivityIndicator, Image} from "react-native";
import CustomInputs from "../components/CustomeInputs/CustomInputs"; // for the custom inputs 
import CustomButton from "../components/CustomeButton/CustomButton"; // for the custom button
import { useNavigation } from '@react-navigation/native';
import  HamburgerMenu from "../components/HamburgerMenu/HamburgerMenu";
import Search_Bar from "../components/Search_Bar/Search_Bar"
import GestureFlipView from 'react-native-gesture-flip-card';
import WSU_Image from "../../assets/images/loading.jpg"



const uniURL = "http://10.0.2.2:3031/universities"

const LandingPage_S_Universities = () => {

    global.scheduleName = '';
    
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const navigation = useNavigation();
    //const universityJSON = GETUniversites();

    // let state = {
    //     universityName: 'BAD'
    // }

    useEffect(() => {
        fetch(uniURL)
          .then((response) => response.json())
          .then((json) => setData(json.body))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

    const renderFront = () => {
        return (
            <View style = {styles.frontStyle}>
                {isLoading ? <ActivityIndicator/> : (
                    <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <Text style = {styles.frontStyle}>
                            {item.universityName} </Text>
                    )}
                    />
                    
                )}
                {/* <Text style = {{color: "black", fontSize: 20}}>Front</Text>  */}
            </View>
        );
      };
      
      const renderBack = () => {
        return (
            <View style = {styles.backStyle}>
                {isLoading ? <ActivityIndicator/> : (
                    <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <Text style = {styles.backStyle}>
                            {item.universityDescription} </Text>
                        
                    )}
                    />
                )}
                {/* <Text style = {{color: "black", fontSize: 20}}>Back</Text> */}
            </View>
        );
      };

    return (
        <>
            <View style={styles.view_padding}>
                <Search_Bar></Search_Bar>
                <Text style={styles.title}>Universities</Text>
            </View>
            <View style={styles.container}>
                <GestureFlipView width={500} height={300}>
                    {renderFront()}
                    {renderBack()}
                </GestureFlipView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "black",
        margin:10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
        margin:8,
    },
    link: {
        color: '#FDB075',
    },
    view_padding: {
        paddingTop:40
    },
    university_pressable: {
        borderRadius: 10,
        backgroundColor: "#D9D9D9",
        flex: 1,
        padding:20,
        margin:10,
    },    
    class_text: {
        fontSize:18,
        fontWeight: 'bold', 
    },
    flat_list: 
    {
        flex: 1,
    }, 
    container: {
        marginTop:1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    frontStyle: {
        flex: 1,
        width: 300,
        height: 200,
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 20,
        marginTop: 20,
        
    },
    backStyle: {
        flex: 1,
        width: 300,
        height: 200,
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 20,
    },
});

export default LandingPage_S_Universities;