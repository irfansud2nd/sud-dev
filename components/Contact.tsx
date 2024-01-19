"use client";

import { controlToast } from "@/utils/functions";
import { useRef, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState({
    senderName: "",
    senderEmail: "",
    text: "",
  });

  const toastId = useRef(null);

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    controlToast("Sending your message", toastId, "loading", true);

    fetch("api/sendmessage", {
      method: "POST",
      body: JSON.stringify({
        data: {
          senderName: message.senderName,
          senderEmail: message.senderEmail,
          message: message.text,
          sentAt: Date.now(),
        },
      }),
    })
      .then((res) => {
        if (res.ok) {
          controlToast("Message succesfully sent", toastId, "success");
        }
      })
      .catch((error) => controlToast(error.message, toastId, "error"))
      .finally(() => {
        setMessage({
          senderName: "",
          senderEmail: "",
          text: "",
        });
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
          <input
            className="border-2 border-gray-400 focus:outline-none px-2"
            type="text"
            value={message.senderName}
            onChange={(e) =>
              setMessage({ ...message, senderName: e.target.value })
            }
            placeholder="Your name..."
            required
          />
        </div>
        <div className="flex flex-col w-full gap-0.5">
          <label className="font-semibold">Email</label>
          <input
            className="border-2 border-gray-400 focus:outline-none px-2"
            type="email"
            value={message.senderEmail}
            onChange={(e) =>
              setMessage({ ...message, senderEmail: e.target.value })
            }
            placeholder="Your email..."
            required
          />
        </div>
        <div className="flex flex-col w-full gap-0.5">
          <label className="font-semibold">Message</label>
          <textarea
            className="border-2 border-gray-400 focus:outline-none px-2"
            value={message.text}
            onChange={(e) => setMessage({ ...message, text: e.target.value })}
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
      <ToastContainer />
    </div>
  );
};
export default Contact;
