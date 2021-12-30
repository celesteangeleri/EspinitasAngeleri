import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDu3yRpdonMs_Lqua8pzXl9ZgwUE7SFlKw",
    authDomain: "reactjs-espinitas.firebaseapp.com",
    projectId: "reactjs-espinitas",
    storageBucket: "reactjs-espinitas.appspot.com",
    messagingSenderId: "846518585939",
    appId: "1:846518585939:web:c50c7afe3f5f4b049214a6"
  };

  const app= initializeApp(firebaseConfig)
  export const db = getFirestore(app)