var admin = require("firebase-admin");

// var serviceAccount = require("./my-companion-99989-firebase-adminsdk-dgemi-29a72520f0.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });


const firebaseConfig = {
  apiKey: "AIzaSyAU0x2FbWepHS10VrcRMpcjP0E6Ve9c798",
  authDomain: "my-companion-99989.firebaseapp.com",
  projectId: "my-companion-99989",
  storageBucket: "my-companion-99989.appspot.com",
  messagingSenderId: "568252458977",
  appId: "1:568252458977:web:0c9589742cd06a7b6214a0"
};

// Initialize Firebase
admin.initializeApp(firebaseConfig);

const db = admin.firestore();

module.exports = db;