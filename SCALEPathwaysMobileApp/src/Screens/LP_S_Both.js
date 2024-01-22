import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Button, SafeAreaView, StatusBar, FlatList, Pressable, Alert, ActivityIndicator, RefreshControl} from "react-native";
import CustomInputs from "../components/CustomeInputs/CustomInputs"; // for the custom inputs 
import CustomButton from "../components/CustomeButton/CustomButton"; // for the custom button
import { useNavigation } from '@react-navigation/native'
import Search_Bar from "../components/Search_Bar/Search_Bar"
import CurrentSchedule from "./CurrentSchedule";
import { func } from "prop-types";

const LP_S_Both = () => {
    
    const svdSchURL = "http://10.0.2.2:3031/getSavedSchedules"
    const [isBusy, setBusy] = useState(true)
    let [isLoading, setIsLoading] = useState(true);
    let [response, setResponse] = useState([]);
    const navigation = useNavigation();
    let fetchdata = {};

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
          setRefreshing(false);
        }, 2000);
    }, []);
    
    const goToSchedule = ( item ) =>
    {
        global.selectedSchedule = item
        navigation.navigate('CurrentSchedule',{ selectedSchedule: item})
    }
    
    const eachButton = ( {item} ) => (
        <View>
            <Button title={item.name + ""} onPress={() => goToSchedule(item)} style={styles.listButton}></Button>
            {/* Once we SCALE has the back end to display the name of the schedule we can display the name of the schedule with the id */}
        </View>
    )

    async function fetchData2()
    {
        const fetchresponse = await fetch(svdSchURL);
        // global.scheduleList = await fetchresponse.json();
        setResponse(await fetchresponse.json());
        // console.error("fetch data: " + JSON.stringify(scheduleList));
        setIsLoading(false);
    }

    // const fetchData = () => {
    //     fetch(svdSchURL)
    //       .then((response) => response.json())
    //       .then((json) => setResponse(json.body))
    //       .catch((error) => console.error(error))
    //       .finally(() => 
    //       {
    //         setIsLoading(false)
    //         console.error(JSON.stringify(response))
    //     });
    // };

    // useEffect(() => {
    //     setIsLoading(true);
    //     // fetchData();
    //     fetchData2();
    //     console.warn("UNIVERSITIES: " + JSON.stringify(global.scheduleList.body.universities[0].schedules))
    // }, [scheduleName]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            await fetchData2();
            //console.warn("UNIVERSITIES: " + JSON.stringify(global.scheduleList.body.universities[0].schedules))
            setIsLoading(false);
        }
        fetchData();
    }, [scheduleName]);

    const getContent = () => {
        if (isLoading) {
            return <ActivityIndicator size="large"/>
        }
        else
        {
            return (
                <View style={styles.view_padding}>
                    <Text style={styles.title}>My Schedules</Text>
                    <ScrollView
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }>
                        <FlatList style={styles.flat_list}
                            data={response.body.universities[0].schedules}
                            renderItem = {eachButton}
                        />
                    </ScrollView>
                </View>
            )
        }
    };
    
    return(
        <View style={styles.view_padding}>
            {getContent()}
        </View>
    )
}

const styles = StyleSheet.create({
    view_padding: {
        flex: 1,
        paddingTop:10
    },
    root: {
        alignItems: 'center',
        padding: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "black",
        margin:10,
    },
    heading: {
        fontSize: 20,
        color: "#051C60",
        margin:10
    },
    text: {
        color: 'gray',
        marginVertical: 10,
        margin:8,
    },
    link: {
        color: '#FDB075',
    },
    class_pressable: {
        borderRadius: 10,
        backgroundColor: "#D9D9D9",
        flex: 1,
        padding:10,
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
    listButton: {
        marginBottom: 10
    }
    
});


export default LP_S_Both;