const firebaseConfig = {
    apiKey: "AIzaSyB8SPIHdlDqj-c3_1qHEk0PEOibm9tYYT8",
    authDomain: "messaging761.firebaseapp.com",
    databaseURL: "https://messaging761-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "messaging761",
    storageBucket: "messaging761.appspot.com",
    messagingSenderId: "766173576790",
    appId: "1:766173576790:web:1a3905fc8cb7d0059045f7",
    measurementId: "G-NB10CCNHXZ"
};


const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
const auth = firebase.auth();
const rdb = firebase.database();
const stg = firebase.storage();
const dcm = firebase.firestore();
