"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoIosDocument } from "react-icons/io";

const DownloadCv = () => {
  const [downloadLink, setDownloadLink] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getLink();
  }, []);
  const getLink = () => {
    fetch("/api/cv", { method: "GET" })
      .then((res) => res.json().then((url) => setDownloadLink(url.url)))
      .catch((error) => {
        setErrorMessage("CV not found");
      });
  };
  return downloadLink ? (
    <Link
      href={downloadLink}
      target="_blank"
      className="font-bold whitespace-nowrap items-center px-2 pt-1 pb-0.5 bg-gray-50 rounded-full"
    >
      <IoIosDocument className="text-lg inline-block mb-1" /> CV
    </Link>
  ) : (
    <p className="font-bold whitespace-nowrap items-center px-2 pt-1 pb-0.5 bg-gray-50 rounded-full">
      {errorMessage ? (
        "CV not found"
      ) : (
        <AiOutlineLoading3Quarters className="animate-spin mt-1" />
      )}
    </p>
  );
};
export default DownloadCv;
