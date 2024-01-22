import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, FlatList, ActivityIndicator, Modal, TouchableHighlight, Alert, RefreshControl } from "react-native";
import CustomButton from "../components/CustomeButton/CustomButton";
import Profile from "../../assets/images/profile.png";
import { useNavigation } from '@react-navigation/native';
import HamburgerMenu from "../components/HamburgerMenu/HamburgerMenu";
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';


const ProfileScreen = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [major, setMajor] = useState('Not Selected');
    const [user, userData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [image, setImage] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const [refreshing, setRefreshing] = React.useState(false);

    const getData = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key)
            console.log(key + " " + value);
            return value;
        } catch (e) {
            // error reading value
        }
    }

    async function _getStorageValue(key) {
        var value = await AsyncStorage.getItem(key)
        setName(key);
        console.log(key + " " + value);
        return value;
    }

    const navigation = useNavigation();

    const onReturnPressed = () => {
        console.warn('Return Pressed');
        navigation.navigate('Sign in');
    };

    const onDegreePagepressed = () => {
        console.warn('Turn to degree page');
        navigation.navigate('Degree');
    };

    const onProfileEditPressed = () => {
        console.warn('Edit Profile');
        navigation.navigate('EditProfile');
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
                const json = await response.text();
                console.log('Log out ' + json);
                const parsed_json = JSON.parse(json);
                if (parsed_json.message === "root") {
                    console.log('Response is "' + json + '", Logout Succeeded');
                    navigation.navigate("Sign in");
                }
                else {
                    console.log('Response is "' + json + '", Logout Failed');
                }
                // if json.parse == {"message":"root"}
                // { navigation.navigate("Sign in"); }

            }
            catch (error) {
                console.error(error);
            }
        };
    }

    const onClickTake = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        const source = { uri: result.uri };
        console.log(source);
        setImage(source);
    };

    const onClickSelect = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        const source = { uri: result.uri };
        console.log(source);
        setImage(source);
    };

    const onUpload = async () => {
        setUploading(true);
        let formData = new FormData(); //the request parameters for image uploads use the formData object 
        let file = {uri: image.uri, type: 'multipart/form-data', name: 'image.png' }; //the key (uri, type and name) is unchangeable 
        formData.append("file", file);  //the files here is the key needed by the backend 
        try {
            const response = await fetch("http://10.0.2.2:3031//profile/editImage", { // 10.0.2.2 is the address used by the android emulator for the localhost.
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body: formData,
            })
            const json = await response.text();
            console.log(json);
            let time = new Date().getTime() / 1000
            global.newTime = time
            navigation.navigate("Profile", {newTime: time})
            // const source = ret.data.iamges[0].onRequestClose
        }
        catch (error) {
            console.error("IMAGE UPLOAD ERROR " + error);
        }
        setUploading(false);
        console.warn("file: " + JSON.stringify(file));
        console.warn("user.profile_image: " + user.profile_image);
        Alert.alert('Photo Uploaded');
        setImage(file);
        setModalVisible(!modalVisible);
    };

    async function getUserData()
    {
        fetch('http://10.0.2.2:3031/getUserInfo')
        .then((response) => response.json())
        .then((json) => (
            userData(json.body.userInfo),
            console.warn("PROFILE: " + json.body.userInfo.name)
        )
        )
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
        // const fetchresponse = await fetch('http://10.0.2.2:3031/getUserInfo')
        // userData(await fetchresponse.json())
        // userData(user.body.userInfo)
        // setLoading(false);
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
          setRefreshing(false);
        }, 2000);
    }, []);

    useEffect(() => {
        // fetch('http://10.0.2.2:3031/getUserInfo')
        //     .then((response) => response.json())
        //     .then((json) => (
        //         userData(json.body.userInfo),
        //         console.warn("PROFILE: " + json.body.userInfo.name)
        //     )
        //     )
        //     .catch((error) => console.error(error))
        //     .finally(() => setLoading(false));
        const fetchData = async () => {
            await getUserData();
        }
        fetchData();
    }, [newTime]);


    // TODO: Have 3 seperate containers, use flex space to order our components to get consistent spacing in our buttons/navbar. 
    return (
        <View style={styles.view_padding}>
        <ScrollView
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }>

            <Text style={styles.title}> {user.name} </Text>
            {/* To-do: be able to edit the profile  */}
            {/* To-do: allow user to upload their profile picture  */}

            <Modal animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Model has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centerView}>
                    <View style={styles.modalView}>
                    <TouchableHighlight style={{ ...styles.openButton }} onPress={onClickTake}>
                            <Text style={styles.modalText}>Take Picture</Text>
                        </TouchableHighlight>
                        
                        <TouchableHighlight style={{ ...styles.openButton }} onPress={onClickSelect}>
                            <Text style={styles.modalText}>Select Picture</Text>
                        </TouchableHighlight>

                        <TouchableHighlight style={{ ...styles.openButton }} onPress={onUpload}>
                            <Text style={styles.modalText}>Upload Picture</Text>
                        </TouchableHighlight>

                        <TouchableHighlight style={{ ...styles.openButton }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}>
                            <Text style={styles.modalText}>Cancel</Text>
                        </TouchableHighlight>

                    </View>
                </View>
            </Modal>

            <View style={styles.userPic}>
                <Image source={user.profile_image} style={[styles.logo]} /> 
                {/* <Image source={ (image.uri == null) ? user.profile_image : image.uri } style={[styles.logo]} />  */}
                <Icon name='pencil-square-o' onPress={() => {
                    setModalVisible(true);
                }} style={styles.iconEdit} size={15} />
            </View>

            {isLoading ? <ActivityIndicator /> : (
                <View>
                    <Text style={styles.userInfo}>Email: {user.email}</Text>
                    <Text style={styles.userInfo}>Phone: {user.phone}</Text>
                    <Text style={styles.userInfo}>Birth Date: {user.birthDate}</Text>
                    <Text style={styles.userInfo}>High School: {user.highSchool}</Text>
                    <Text style={styles.userInfo}>State: {user.state}</Text>
                    <Text style={styles.userInfo}>City: {user.city}</Text>
                </View>
            )}
            <CustomButton Edit text={"Edit Profile"} onPress={onProfileEditPressed} type="NAVIGATION">  </CustomButton>
            <CustomButton Logout text={"Logout"} onPress={pressedLogout} type="NAVIGATION">    </CustomButton>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#051C60",
        margin: 10,
    },
    text: {
        color: 'black',
        marginVertical: 15,
        margin: 9,
        borderBottomWidth: 1,
        borderBottomColor: '#B7B7B7'
    },
    userPic: {
        backgroundColor: '#F0F0F0',
        flexDirection: 'row'
    },
    logo: {
        width: 80,
        height: 80,
        borderRadius: 40,
        margin: 10
    },
    iconEdit: {
        color: 'black',
        marginTop: 5
    },
    userInfo: {
        color: 'black',
        marginVertical: 15,
        margin: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#B7B7B7'
    },
    view_padding: {
        flex: 1,
        paddingTop: 40
    },
    flat_list:
    {
        flex: 1,
        margin: 20,
        height: 100,
    },
    centerView:
    {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView:
    {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton:
    {
        backgroundColor: "#B7B7B7",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginVertical: 15,
    },
    modalText:
    {
        color: "black",
        textAlign: "center",
    }
});

export default ProfileScreen;