import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC84OALOvgtEqhhjciS3j2_fAor8tzxlUU',
  authDomain: 'bookish-764df.firebaseapp.com',
  projectId: 'bookish-764df',
  storageBucket: 'bookish-764df.appspot.com',
  messagingSenderId: '959416573634',
  appId: '1:959416573634:web:27138d7fe0003e7b64255b',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
