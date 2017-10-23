import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDBLNfmuxv6iOb_zJAJagvFBTAeeZ3fCsA",
  authDomain: "addicted-to-mnt-1508257931368.firebaseapp.com",
  databaseURL: "https://addicted-to-mnt-1508257931368.firebaseio.com",
  projectId: "addicted-to-mnt-1508257931368",
  storageBucket: "addicted-to-mnt-1508257931368.appspot.com",
  messagingSenderId: "573882104417"
};


firebase.initializeApp(config);
const database = firebase.database();

export default database;
