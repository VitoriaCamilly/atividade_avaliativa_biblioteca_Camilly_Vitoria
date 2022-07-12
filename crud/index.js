const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
  query,
  where,
  getDocs,
  getDoc, 
  deleteDoc
} = require('firebase/firestore/lite');

const firebaseConfig = {
  apiKey: "AIzaSyC5by9DF6rPHRGODpT4SjLOO8y1iXj-ISg",
  authDomain: "atvdd-avaliativa-biblioteca.firebaseapp.com",
  projectId: "atvdd-avaliativa-biblioteca",
  storageBucket: "atvdd-avaliativa-biblioteca.appspot.com",
  messagingSenderId: "10031328067",
  appId: "1:10031328067:web:08d670b3179e32405bddf6",
  measurementId: "G-WE5HJ90SS9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

async function save(nomeTabela, id, dado) {
  if (id) {
      const referenceEntity = await setDoc(doc(db, nomeTabela, id), dado);
      const savedData = {
          ...dado,
          id: id
      }
      return savedData;
  } else {
      const referenceEntity = await addDoc(collection(db, nomeTabela), dado);
      const savedData = {
          ...dado,
          id: referenceEntity.id
      }
      return savedData;
  }
}

async function get(nomeTabela) {
  const tableRef = collection(db, nomeTabela);

  const q = query(tableRef);

  const querySnapshot = await getDocs(q);

  const lista = [];

  querySnapshot.forEach((doc) => {
      const data = {
          ...doc.data(),
          id: doc.id
      }
      lista.push(data);
  });
  return lista;
}

async function getById(nomeTabela, id) {
  const docRef = doc(db, nomeTabela, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
      return docSnap.data();
  } else {
      return new Error("Not found!")
  }
}

async function remove(nomeTabela, id) {
 const dado = await deleteDoc(doc(db, nomeTabela, id));
 return {
  message:`${id} deleted` 
 }
}

module.exports = {
  save,
  get, 
  getById,
  remove
}