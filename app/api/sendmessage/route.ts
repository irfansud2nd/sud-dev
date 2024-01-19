import { firestore } from "@/utils/firebase";
import { FirestoreError, collection, doc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { data } = await req.json();
  const newDocRef = doc(collection(firestore, "messages"));
  return setDoc(newDocRef, {
    ...data,
    id: newDocRef.id,
  })
    .then(() => {
      return NextResponse.json(
        {
          message: "Data berhasil dikirimkan",
        },
        {
          status: 200,
        }
      );
    })
    .catch((err: FirestoreError) => {
      return NextResponse.json(
        { message: err.message, code: err.code },
        { status: 500 }
      );
    });
};
