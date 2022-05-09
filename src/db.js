import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyA4RZQqyDrhRNP3UOv1sV-AGWsh4SJWrJI',
  authDomain: 'fir-vue-chat-af974.firebaseapp.com',
  projectId: 'fir-vue-chat-af974',
  storageBucket: 'fir-vue-chat-af974.appspot.com',
  messagingSenderId: '669008409660',
  appId: '1:669008409660:web:69dfa6190a06207981ff39',
};
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { db };
