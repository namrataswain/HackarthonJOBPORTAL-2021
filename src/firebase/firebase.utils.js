import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCo04hjNMtJ6X-b-Kr472g89uqviSTLmeU",
    authDomain: "jobportal-e35d9.firebaseapp.com",
    projectId: "jobportal-e35d9",
    storageBucket: "jobportal-e35d9.appspot.com",
    messagingSenderId: "1045574667212",
    appId: "1:1045574667212:web:049c0765c7253009466b69",
    measurementId: "G-R4S0ZN8GHQ"
  };

  

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  console.log(snapShot);
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  

 
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;