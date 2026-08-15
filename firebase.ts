import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjWkHvCgfSLOpsjOYNadKmN4XX7Xz6nmg",
  authDomain: "smart-bazar-a8db6.firebaseapp.com",
  projectId: "smart-bazar-a8db6",
  storageBucket: "smart-bazar-a8db6.firebasestorage.app",
  messagingSenderId: "1054971092117",
  appId: "1:1054971092117:web:db0253d8cce825cf5d4f9c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);