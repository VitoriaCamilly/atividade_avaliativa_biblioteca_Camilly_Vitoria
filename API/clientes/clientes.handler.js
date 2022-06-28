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

    // async function cadastrarCliente(nomeTabela) {
    //     const tableRef = collection(id, nomeTabela);
    
    //     const q = query(tableRef);
    
    //     const querySnapshot = await getDocs(q);
    
    //     const lista = [];
    
    //     querySnapshot.forEach((doc) => {
    //         const data = {
    //             ...doc.data(),
    //             id: doc.id
    //         }
    //         lista.push(data);
    //     });
    //     return lista;
    // }
// async function save(nomeTabela, id, dado) {
//     if (id) {
//         const referenceEntity = await setDoc(doc(db, nomeTabela, id), dado);
//         const savedData = {
//             ...dado,
//             id: id
//         }
//         return savedData;
//     } else {
//         const referenceEntity = await addDoc(collection(db, nomeTabela), dado);
//         const savedData = {
//             ...dado,
//             id: referenceEntity.id
//         }
//         return savedData;
//     }
// }

// module.exports = {
//     cadastrarCliente
// }