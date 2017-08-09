import * as firebase from 'firebase';

const users = {
  findUserById: (uid) => {
    return firebase.database().ref('/users/'+ uid).once('value');
  },

  createUserData(user) {
    const { uid, email, providerData, photoURL, displayName } = user;
    return firebase.database().ref('/usres/' + uid).set({
      email,
      providerData,
      photoURL,
      displayName
    })
  }
}


export default users;
