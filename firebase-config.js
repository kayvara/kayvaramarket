import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

const firebaseConfig = {

apiKey:"YOUR_API_KEY",

authDomain:"YOUR_PROJECT.firebaseapp.com",

projectId:"YOUR_PROJECT",

storageBucket:"YOUR_PROJECT.appspot.com",

messagingSenderId:"123456",

appId:"APP_ID"

};

export const app =
initializeApp(firebaseConfig);
