/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../shared/utils/firebase";
import { revalidatePath } from "next/cache";
import { getCookies } from "@/app/shared/utils/cookies";

interface IUser{
  user: string;
  pass: string;
}

export const apiLoginFirebase = async ({user,pass}:IUser) => {
  try {    
    const array: any = [];
    const q = query(collection(db, "USERS"), where("user", "==", user.toLocaleLowerCase()), where("password", "==", pass));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      data.id = doc.id;
      array.push(data);
    });
    revalidatePath("/");
    return array;
  } catch (e) {
    console.log(e);
  }
};

export const apiTaskByUserId = async () => {
  try {
    const jwt = await getCookies("__session-seek");
    const userId = JSON.parse(jwt ?? "").id;
    const array: any = [];
    const q = query(collection(db, "TASKS"), where("userId", "==", userId));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      data.id = doc.id;
      array.push(data);
    });
    revalidatePath("/");
    return array;
  } catch (e) {
    console.log(e);
  }
};

export const addDocFirebase = async (collectionValue: string, data: any) => {
  const jwt = await getCookies("__session-seek");
  const userId = JSON.parse(jwt ?? "").id;
  revalidatePath("/");
  const newData = { ...data, userId };
  const docsRef = collection(db, collectionValue);
  const res = await addDoc(docsRef, newData);
  return res;
};

export const updateDocFirebase = async (
  collectionValue: string,
  data: any,
  id: any
) => {
  revalidatePath("/");
  const docRef = doc(db, collectionValue, id);
  const res = await updateDoc(docRef, data);
  return res;
};

export const deleteDocFirebase = async (
  collectionValue: string,
  data: any,
  id: any
) => {
  revalidatePath("/");
  const docRef = doc(db, collectionValue, id);
  const res = await updateDoc(docRef, data);
  return res;
};
