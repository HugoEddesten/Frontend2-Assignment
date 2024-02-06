import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCwMMtfoqaIC4jHrmJCazcj2qMzD5fsXaE",
    authDomain: "super-yarn-store.firebaseapp.com",
    projectId: "super-yarn-store",
    storageBucket: "super-yarn-store.appspot.com",
    messagingSenderId: "706763141649",
    appId: "1:706763141649:web:6030fc60dbf2b317ca37b0",
    measurementId: "G-VJM6LMCKK8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);