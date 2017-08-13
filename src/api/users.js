import * as firebase from 'firebase';
import generateRandomColor from '../helpers/color';

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
      color: generateRandomColor(),
      displayName
    })
  },

  createDisplayName(uid, displayName) {
    return firebase.database().ref('/users/'+ uid).update({
      displayName,
      photoURL: 'default.jpg'
    })
  }
}


export default users;
