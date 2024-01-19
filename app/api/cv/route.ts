import { storage } from "@/utils/firebase";
import { StorageError, getDownloadURL, ref } from "firebase/storage";
import { NextResponse } from "next/server";

export const GET = async () => {
  return getDownloadURL(ref(storage, "CV.pdf"))
    .then((url) => {
      return NextResponse.json(
        { message: "Successfully Uploaded", url },
        { status: 200 }
      );
    })
    .catch((error: StorageError) => {
      return NextResponse.json(
        {
          message: error.message,
          code: error.code,
        },
        { status: error.status }
      );
    });
};
