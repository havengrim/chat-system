import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDxo7NENa1GNTsWJvy4EocNdx5tmmW0XpM",
  authDomain: "chat-system-f788c.firebaseapp.com",
  projectId: "chat-system-f788c",
  storageBucket: "chat-system-f788c.appspot.com",
  messagingSenderId: "79955504886",
  appId: "1:79955504886:web:79c5e1811f8815229ac6d7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

// Uncomment the following line to export the Firebase instance as the default export
// export default app;
