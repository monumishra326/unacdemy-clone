
import firebase from "firebase";



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
