import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDyx9SPW_clp7gm7g6CX38T6ylZIt9RNIE',
  authDomain: 'intagram-12345.firebaseapp.com',
  databaseURL: 'https://intagram-12345.firebaseio.com',
  projectId: 'intagram-12345',
  storageBucket: 'intagram-12345.appspot.com',
  messagingSenderId: '610032864689',
};
firebase.initializeApp(config);


export const auth = firebase.auth();
