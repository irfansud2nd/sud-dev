import Message from "@/models/message";
import { connectToDB } from "@/utils/database";

export const POST = async (req: any) => {
  const { senderName, senderEmail, message } = await req.json();

  try {
    await connectToDB();
    const newMessage = new Message({
      senderName,
      senderEmail,
      message,
    });
    await newMessage.save();
    return new Response(JSON.stringify(newMessage), { status: 201 });
  } catch (error) {
    return new Response("Failed to create new Prompt", { status: 500 });
  }
};
