import firebase from "firebase/app";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyApEpJPtsxhIx6QEnbJrnLqlw07BNEurdY",
	authDomain: "fir-react-upload-b2f25.firebaseapp.com",
	projectId: "fir-react-upload-b2f25",
	storageBucket: "fir-react-upload-b2f25.appspot.com",
	messagingSenderId: "1084361617349",
	appId: "1:1084361617349:web:6c5b4c07e47450b7cce5ac",
	measurementId: "G-6MZ5H02QNF",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
