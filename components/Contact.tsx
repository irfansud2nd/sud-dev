"use client";

import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "sonner";
import axios from "axios";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState({
    senderName: "",
    senderEmail: "",
    text: "",
  });

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { senderName, senderEmail, text } = message;

    if (!senderName || !senderEmail || !text) {
      toast.error("Please fill the empty Input");
      return;
    }

    setSubmitting(true);
    const toastId = toast.loading("Sending your message");

    axios
      .post("/api/sendmessage", {
        senderName: senderName,
        senderEmail: senderEmail,
        message: text,
        sentAt: Date.now(),
      })
      .then((res) => {
        setMessage({
          senderName: "",
          senderEmail: "",
          text: "",
        });
        toast.success("Message succesfully sent", { id: toastId });
      })
      .catch((error) => {
        toast.error(
          `${error.response.data.message} | ${error.response.data.code}`,
          {
            id: toastId,
          }
        );
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div
      className="w-full py-5 md:py-20 flex flex-col justify-center items-center scroll-mt-16"
      id="contact"
    >
      <form
        className="flex flex-col justify-center items-center gap-5 w-[500px] max-w-[95vw]"
        onSubmit={(e) => sendMessage(e)}
      >
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="font-medium">
          or get in touch with me through another platform linked at the bottom
          of this page.
        </p>
        <div className="flex flex-col w-full gap-1">
          <label className="font-semibold">Name</label>
          <Input
            className="border-2 border-gray-400 focus:outline-none px-2"
            type="text"
            value={message.senderName}
            onChange={(e) =>
              setMessage((prev) => ({ ...prev, senderName: e.target.value }))
            }
            placeholder="Your name..."
            required
          />
        </div>
        <div className="flex flex-col w-full gap-0.5">
          <label className="font-semibold">Email</label>
          <Input
            className="border-2 border-gray-400 focus:outline-none px-2"
            type="email"
            value={message.senderEmail}
            onChange={(e) =>
              setMessage((prev) => ({ ...prev, senderEmail: e.target.value }))
            }
            placeholder="Your email..."
            required
          />
        </div>
        <div className="flex flex-col w-full gap-0.5">
          <label className="font-semibold">Message</label>
          <Textarea
            className="border-2 border-gray-400 focus:outline-none px-2 resize-none"
            value={message.text}
            onChange={(e) =>
              setMessage((prev) => ({ ...prev, text: e.target.value }))
            }
            placeholder="Your message..."
            rows={5}
            required
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="bg-blue-400 rounded-full font-bold text-white hover:bg-gray-100 hover:text-blue-400 border-2 border-transparent hover:border-blue-400 px-2 py-0.5 self-end transition-all"
        >
          {submitting ? (
            <span className="flex gap-1">
              Sending
              <AiOutlineLoading3Quarters className="animate-spin mt-1" />
            </span>
          ) : (
            "Send"
          )}
        </button>
      </form>
    </div>
  );
};
export default Contact;
