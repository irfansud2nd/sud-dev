import { Schema, model, models } from "mongoose";

const MessageSchema = new Schema({
  senderName: {
    type: String,
    required: [true, "Name is Required"],
  },
  senderEmail: {
    type: String,
    required: [true, "Email is required!"],
  },
  message: {
    type: String,
    required: [true, "Message is required."],
  },
  sentAt: {
    type: String,
    required: [true, "Time is required"],
  },
  replied: {
    type: Boolean,
    required: [true, "Replied is required"],
  },
});

const Message = models.Message || model("Message", MessageSchema);
export default Message;
