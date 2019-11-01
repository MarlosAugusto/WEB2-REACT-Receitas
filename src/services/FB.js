import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/database";

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
