import * as firebase from 'firebase';

const auth = (function() {
  return {
      // 실시간 리스너
      onAuthStateChanged: (callback) => {
        const provider = firebase.auth().onAuthStateChanged(callback);
        return provider;
      },
      createUserWithEmailAndPassword: (email, password) => {
        const provider = firebase.auth().createUserWithEmailAndPassword(email, password);
        return provider;
      },
      signInWithEmailAndPassword: (email, password) => {
        const provider = firebase.auth().signInWithEmailAndPassword(email, password);
        return provider;
      },
      google: () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider)
      },
      facebook: () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        return firebase.auth().signInWithPopup(provider)
      }
  }
})();

export default auth;
