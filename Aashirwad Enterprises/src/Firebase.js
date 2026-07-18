
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHjpea3UptmjuNwL0pnw_gphPwmX_CmH0",
  authDomain: "aashirwadenterprises-a3e7a.firebaseapp.com",
  projectId: "aashirwadenterprises-a3e7a",
  storageBucket: "aashirwadenterprises-a3e7a.firebasestorage.app",
  messagingSenderId: "191932970537",
  appId: "1:191932970537:web:18dacae9a5872b95cf4e38"
};


const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
  export const auth = getAuth(app);