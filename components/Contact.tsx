"use client";

import axios from "axios";
import { useRef, useState } from "react";
import { ToastContainer, toast, Id } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState({
    senderName: "",
    senderEmail: "",
    text: "",
  });

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const toastId = toast.loading("Sending your message", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    const currentTime = new Date();
    axios
      .post("api/send-message", {
        senderName: message.senderName,
        senderEmail: message.senderEmail,
        message: message.text,
        sentAt: currentTime.toDateString(),
      })
      .then((res) =>
        toast.update(toastId, {
          render: "Message successfully sent",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        })
      )
      .catch((error) => {
        console.log(error);
        toast.update(toastId, {
          render: "Failed to send message, please email me directly",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      })
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
          {submitting ? "Send..." : "Send"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};
export default Contact;
