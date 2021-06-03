import firebase from 'firebase'
import fb from "firebase/app"
const firebaseConfig = {
    apiKey: "AIzaSyDHNkQtuNEuavTiTCYjSxoyT1G2VJGu88s",
    authDomain: "projectnew-46f5b.firebaseapp.com",
    projectId: "projectnew-46f5b",
    storageBucket: "projectnew-46f5b.appspot.com",
    messagingSenderId: "140749101342",
    appId: "1:140749101342:web:f785ada217263e2a28d10f",
    measurementId: "G-Y07B5MW1Y8"
  };
  export const fire = !fb.apps.length ? fb.initializeApp(firebaseConfig) : fb.app()
  export default fire;