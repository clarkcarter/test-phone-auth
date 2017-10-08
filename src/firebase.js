import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyBnKqJXmptLQwvwRbpa7XR0txH3pCDQSoQ",
  authDomain: "test-a9088.firebaseapp.com",
  databaseURL: "https://test-a9088.firebaseio.com",
  projectId: "test-a9088",
  storageBucket: "test-a9088.appspot.com",
  messagingSenderId: "541563702694"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;
