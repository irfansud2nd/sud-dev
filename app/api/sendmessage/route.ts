import { firestore } from "@/utils/firebase";
import { FirestoreError, collection, doc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const data = await req.json();

  if (
    !data?.senderName ||
    !data?.senderEmail ||
    !data?.message ||
    !data?.sentAt
  ) {
    return NextResponse.json(
      { message: "Message not complete", code: "message" },
      { status: 500 }
    );
  }

  const newDocRef = doc(collection(firestore, "messages"));
  return setDoc(newDocRef, {
    ...data,
    id: newDocRef.id,
  })
    .then(() => {
      return NextResponse.json(
        {
          message: "Message successfully sent",
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
