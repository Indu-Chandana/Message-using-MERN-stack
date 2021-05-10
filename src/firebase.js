import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCVln4MAKQStgAhIr6Yq7rHUV0-Hc9OZ1w",
    authDomain: "whatsapp-mern-indu.firebaseapp.com",
    projectId: "whatsapp-mern-indu",
    storageBucket: "whatsapp-mern-indu.appspot.com",
    messagingSenderId: "696408449895",
    appId: "1:696408449895:web:7c754fec069b41950fc5c2"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };