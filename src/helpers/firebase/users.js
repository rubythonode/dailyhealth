import * as firebase from 'firebase';

const users = {
  findUserById: (uid) => {
    return firebase.database().ref('/users/'+ uid).once('value');
  },

  createUserData(user) {
    const { uid, email, providerData, photoURL, displayName } = user;
    return firebase.database().ref('/users/' + uid).set({
      email,
      providerData,
      photoURL,
      displayName
    })
  },

  registerUpdateUserData(uid, displayName) {
    const updates = {
      ['/users/'+ uid]: {
        displayName
      }
    }
    return firebase.database().ref().update(updates);
  },

  pushDisplayName(uid, displayname) {
    return firebase.database().ref('/users/'+ uid).update({
      displayname,
      photoURL: 'default.jpg'
    })
  }
}


export default users;
