
import firebase from "firebase";


// const firebaseConfig = {
//   apiKey: "AIzaSyAjybY4pev4zMhbDRioGMETj_8I70h4gNQ",
//   authDomain: "unacademy-clone-11a11.firebaseapp.com",
//   projectId: "unacademy-clone-11a11",
//   storageBucket: "unacademy-clone-11a11.appspot.com",
//   messagingSenderId: "830572030637",
//   appId: "1:830572030637:web:4ff4622053ed0b15927424",
//   measurementId: "G-8Q27YGG4TR"
// };
const firebaseConfig = {
  apiKey: "AIzaSyDDvYVNWDLQ3SI98yz0N2-a0IvJ-1swQeU",
  authDomain: "otp-unacdemy.firebaseapp.com",
  projectId: "otp-unacdemy",
  storageBucket: "otp-unacdemy.appspot.com",
  messagingSenderId: "1034844025495",
  appId: "1:1034844025495:web:937676bbbf75e6f5b0afd2"
};
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export { auth, firebase };
