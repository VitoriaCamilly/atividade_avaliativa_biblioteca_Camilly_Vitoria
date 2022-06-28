
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC5by9DF6rPHRGODpT4SjLOO8y1iXj-ISg",
  authDomain: "atvdd-avaliativa-biblioteca.firebaseapp.com",
  projectId: "atvdd-avaliativa-biblioteca",
  storageBucket: "atvdd-avaliativa-biblioteca.appspot.com",
  messagingSenderId: "10031328067",
  appId: "1:10031328067:web:08d670b3179e32405bddf6",
  measurementId: "G-WE5HJ90SS9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);