import Link from "next/link";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoIosDocument } from "react-icons/io";
import { Button } from "../ui/button";

const DownloadCv = () => {
  return (
    <Button variant={"outline"} size={"sm"} className="rounded-xl">
      <Link
        href="https://firebasestorage.googleapis.com/v0/b/sud-dev-e350e.appspot.com/o/CV.pdf?alt=media&token=0e7de7b0-edf4-4ee9-8bb6-2cfd0837e9a7"
        target="_blank"
      >
        <IoIosDocument className="text-lg inline-block mb-1" /> CV
      </Link>
    </Button>
  );
};
export default DownloadCv;
