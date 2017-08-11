import * as firebase from 'firebase';

const auth = {
  // 이메일 그리고 패스워드 회원가입
  createUserWithEmailAndPassword(email, password) {
    const provider = firebase.auth().createUserWithEmailAndPassword(email, password);
    return provider;
  },
  // 로그인
  signInWithEmailAndPassword(email, password) {
    const provider = firebase.auth().signInWithEmailAndPassword(email, password);
    return provider;
  },

  // 실시간 리스너
  onAuthStateChanged: (callback) => {
    const provider = firebase.auth().onAuthStateChanged(callback);
    return provider;
  },
  // 구글 로그인
  google: () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
  }
}

export default auth;
