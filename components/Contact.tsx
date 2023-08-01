"use client";

import { useState } from "react";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState({
    senderName: "",
    senderEmail: "",
    text: "",
  });

  const messageStat = (text: string) => {
    console.log(text);
  };

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("api/send-message", {
        method: "POST",
        body: JSON.stringify({
          senderName: message.senderName,
          senderEmail: message.senderEmail,
          message: message.text,
        }),
      });
      if (res.ok) {
        messageStat("message sent");
      }
    } catch (error: any) {
      messageStat(error.message);
    } finally {
      setSubmitting(false);
      setMessage({
        senderName: "",
        senderEmail: "",
        text: "",
      });
    }
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
          <label className="font-semibold">Email</label>
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
    </div>
  );
};
export default Contact;
