

import firebase from 'firebase/app';


const config = {
    "apiKey": "AIzaSyDCoXNJC3KyLIdKxAOMjvYeGNi7Ex3KPOQ",
    "authDomain": "pathways-artifact.firebaseapp.com",
    "databaseURL": "https://pathways-artifact.firebaseio.com",
    "projectId": "pathways-artifact",
    "storageBucket": "pathways-artifact.appspot.com",
    "messagingSenderId": "1081611522357",
    "appId": "1:1081611522357:web:95cce937bf6e54a4d0bc7c",
    "measurementId": "G-R6GTPSDW41"
}

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export default firebase