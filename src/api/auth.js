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
      // 이메일 그리고 패스워드 회원가입
      createUserWithEmailAndPassword: (email, password) => {
        const provider = firebase.auth().createUserWithEmailAndPassword(email, password);
        return provider;
      },
      // 로그인
      signInWithEmailAndPassword: (email, password) => {
        const provider = firebase.auth().signInWithEmailAndPassword(email, password);
        return provider;
      },
      // 구글 로그인
      google: () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider)
      },
      // 페이스북 로그인
      facebook: () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        return firebase.auth().signInWithPopup(provider)
      },
      connectOauth: (email) => {
        /*
          현재 충돌이 일어난 이메일을 가져온다.
          충돌이 일어난 계정이 어디 oauth로 연동되어있는가를 확인한다.
        */
        firebase.auth().fetchProvidersForEmail(email).then((existProviders) => {
          const Exist = existProviders[0].split('.')[0];
          /*
            우리 웹애플리케이션은 '구글'과 '페이스북'만 허용한다.
            만약, 구글이라면 페이스북과 연동하는 것이고, 페이스북이라면 구글과 연동하는 것이다.
          */
          const Link = Exist === 'google' ? 'facebook' : 'google';
          // 연동한다.
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
