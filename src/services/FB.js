import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/database";
import "@firebase/storage";

export const GET = async (path) => {
  let data;
  await firebase
    .database()
    .ref(path)
    .once("value", snapshot => {
      data = snapshot.val();
    });

  return data;
};

export const POST = async (data, path) => {
  let success = false;
  await firebase
    .database()
    .ref(path)
    .push(data)
    .then(() => (success = true));
  return success;
};

export const POSTFILE = async (type, file, filename) => {
  const storageRef = firebase.storage().ref();
  const fileRef = storageRef.child(`${type}/${filename}.jpg`);
  let success = false;
  await fileRef.put(file).then(() =>
    success = true
  );
  return success;
};

export const GETFILE = async (type, filename) => {
  const storageRef = firebase.storage().ref()
  const fileRef = storageRef.child(`${type}/${filename}.jpg`)
  if (!fileRef) {
    return false
  }
  return await fileRef.getDownloadURL()
};

export const PUT = async (data, path) => {
  let success = false;
  await firebase
    .database()
    .ref(path)
    .update(data)
    .then(() => (success = true));
  return success;
};

export const DELETE = async path => {
  let success = false;
  await firebase
    .database()
    .ref(path)
    .remove()
    .then(() => (success = true));
  return success;
};
