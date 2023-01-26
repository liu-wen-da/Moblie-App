import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import Tabs from "../components/Navbar-React/Tabs"

// This screen is to hold the navigation bar.
const Holder = () => {

        const navigation = useNavigation();

        return (
                <Tabs/>
        )
}

export default Holder;