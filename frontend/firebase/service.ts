import { db, getTimeStamp } from './initialize';

export function convertCollectionsSnapshotToMap(snapshots: any) {
  return snapshots.docs.reduce((accumulator: any, collection: any) => {
    accumulator[collection.id] = collection.data();
    return accumulator;
  }, {});
}

export async function getNewDocRef(collectionName: any) {
  return await db.collection(collectionName).doc();
}

export async function addDocument(collectionName: any, documentData: any) {
  const data = { ...documentData, createdAt: getTimeStamp() };
  return await db
    .collection(collectionName)
    .add(data)
    .then(docRef => docRef.id);
}

export async function deleteDocument(collectionName: any, id: string) {
  return await db
    .collection(collectionName)
    .doc(id)
    .delete()
    .then(() => id);
}

export async function updateDocument(collectionName: any, documentData: any) {
  const data = { ...documentData, updatedAt: getTimeStamp() };
  return await db
    .collection(collectionName)
    .doc(documentData.id)
    .update(data)
    .then(() => documentData.id);
}

export async function setDocument(collectionName: any, documentData: any) {
  const data = { ...documentData, updatedAt: getTimeStamp() };
  return await db
    .collection(collectionName)
    .doc(documentData.id)
    .set(data, { merge: true })
    .then(() => documentData.id);
}

export async function getDocuments(collectionName: string) {
  return await db
    .collection(collectionName)
    .orderBy('createdAt', 'desc')
    .get()
    .then(querySnapshot =>
      querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    );
}
export async function getDocumentsByQuery(collectionName: any, query: any) {
  console.log(...query, collectionName, 'test');

  return await db
    .collection(collectionName)
    // @ts-ignore
    .where(...query)
    .get()
    .then((querySnapshot: any) =>
      querySnapshot.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))
    );
}

export async function deleteDocuments(collectionName: any) {
  const collectionRef = db.collection(collectionName);
  var batch = db.batch();
  await collectionRef
    .get()
    .then(querySnapshot =>
      querySnapshot.docs.map(doc => batch.delete(collectionRef.doc(doc.id)))
    );

  return await batch.commit().then(() => {
    console.log('Batch Deletion successfully committed!');
  });
}

export const addCollectionAndDocuments = async (
  collectionKey: any,
  objectsToAdd: any
) => {
  const collectionRef = db.collection(collectionKey);
  const batch = db.batch();
  objectsToAdd.forEach((obj: any) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit().then(() => {
    console.log('Batch Addition successfully committed!');
  });
};
