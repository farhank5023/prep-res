import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC4KCzfwEp0VPp2wBOOUHfyk5ffu36odkY",
  authDomain: "resource-portal-db6e6.firebaseapp.com",
  projectId: "resource-portal-db6e6",
  storageBucket: "resource-portal-db6e6.appspot.com",
  messagingSenderId: "905547130111",
  appId: "1:905547130111:web:8024387bc84931726b18ca",
  measurementId: "G-5HXL50ELPH",
};

const app = initializeApp(firebaseConfig);
export { app };
