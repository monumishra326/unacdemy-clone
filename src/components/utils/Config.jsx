
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
  apiKey: "AIzaSyAyBrIeJHLeoIIls59g3L0TSdScSkdii_0",
  authDomain: "unacdemy-clone-7f3b2.firebaseapp.com",
  projectId: "unacdemy-clone-7f3b2",
  storageBucket: "unacdemy-clone-7f3b2.appspot.com",
  messagingSenderId: "283554583688",
  appId: "1:283554583688:web:6c2031d499dfee2900bb3d",
  measurementId: "G-2CMNVXC64R"
};
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export { auth, firebase };
