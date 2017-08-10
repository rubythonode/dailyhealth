import * as firebase from 'firebase';

const auth = {
  createUserWithEmailAndPassword(email, password) {
    const provider = firebase.auth().createUserWithEmailAndPassword(email, password);
    return provider;
  },
  signInWithEmailAndPassword(email, password) {
    const provider = firebase.auth().signInWithEmailAndPassword(email, password);
    return provider;
  },
  onAuthStateChanged: (callback) => {
    const provider = firebase.auth().onAuthStateChanged(callback);
    return provider;
  }
}

export default auth;
