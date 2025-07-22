import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBN9cCrLWAnhiVRLLXVCDKEZvLPTFFqRmc",
  authDomain: "micheal-joseph-portfolio.firebaseapp.com",
  projectId: "micheal-joseph-portfolio",
  storageBucket: "micheal-joseph-portfolio.appspot.com",
  messagingSenderId: "372853949517",
  appId: "1:372853949517:web:29a8e516c59d72a5334804",
  measurementId: "G-QGHL0EPC3R"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);

export { app, analytics };
