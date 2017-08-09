import * as firebase from 'firebase';

const auth = (function() {

  const providers = {
    google: (new firebase.auth.GoogleAuthProvider()),
    facebook: (new firebase.auth.FacebookAuthProvider())
  }
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
      },
      link: (email) => {
        firebase.auth().fetchProvidersForEmail(email).then((existProviders) => {
          const Exist = existProviders[0].split('.')[0];
          const Link = Exist === 'google' ? 'facebook' : 'google';

          return firebase.auth().signInWithPopup(providers[Exist]).then((result) => {
            return result.user.linkWithRedirect(providers[Link]);
          })
        })

      },
      logout: () => {
        return firebase.auth().signOut();
      }
  }
})();

export default auth;
