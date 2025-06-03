import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCx7oJAQrXbZiC3SReDyK7kqfHsprKu-3A",
  authDomain: "chill-chat-9ac85.firebaseapp.com",
  projectId: "chill-chat-9ac85",
  storageBucket: "chill-chat-9ac85.firebasestorage.app",
  messagingSenderId: "908671885995",
  appId: "1:908671885995:web:690f3d1aeb0c757bf60dee",
  measurementId: "G-L9EMHGCZXM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };