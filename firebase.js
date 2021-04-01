import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAsy7Nz_VqbXE7Z8aeRZb9piZTxUKj3gnY",
    authDomain: "covid-19-a1f35.firebaseapp.com",
    databaseURL: "https://covid-19-a1f35-default-rtdb.firebaseio.com",
    projectId: "covid-19-a1f35",
    storageBucket: "covid-19-a1f35.appspot.com",
    messagingSenderId: "890045963532",
    appId: "1:890045963532:web:9cc9fc9e07b65d6b7bbd29"
  };
  // Initialize Firebase
  var fireDb= firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();