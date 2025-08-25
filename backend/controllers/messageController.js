import { Conversation } from "../models/conversationModel";

export const sendMessage = async (req, res) => {
  try {
    const senderId = req.id;
    const recieverId = req.params.id;
    const { message } = req.body;

    let gotConversation = await Conversation.findOne({
        participants: 
    })
  } catch (error) {
    console.log(error);
  }
};
