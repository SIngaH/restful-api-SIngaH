const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyB73ccR8Tyt96gQ2Wqbf5lop-lU0r9VTf8",
  authDomain: "briansostebiks-singah.firebaseapp.com",
  databaseURL: "https://briansostebiks-singah.firebaseio.com",
  projectId: "briansostebiks-singah",
  storageBucket: "briansostebiks-singah.appspot.com",
  messagingSenderId: "426193672049",
  appId: "1:426193672049:web:ea14ee7cc7d7eebf9848d0"
};

const db = firebase.initializeApp(firebaseConfig);

module.exports = db;

