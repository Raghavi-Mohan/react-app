import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable as fbHttpsCallable } from "firebase/functions";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAAGoGH9-CyErf0rH6UROAn-2p6Wx1SAmc",
  authDomain: "textureandtones-4cd74.firebaseapp.com",
  projectId: "textureandtones-4cd74",
  storageBucket: "textureandtones-4cd74.firebasestorage.app",
  messagingSenderId: "858074107604",
  appId: "1:858074107604:web:efcf9ad9ee3b61d0367541",
  measurementId: "G-T9LFQ0X52F"
};

const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);
const storage = getStorage(app);

// Wrap httpsCallable
export const httpsCallable = (fnName) => fbHttpsCallable(functions, fnName);
export { functions,storage };
