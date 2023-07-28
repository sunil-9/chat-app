import Chat from "@/models/Chat";
import type { NextApiRequest, NextApiResponse } from "next";
import ConnectDb from "../../middleware/mongoose";
import type { ResponseData } from "@/types/ApiResponse";
import {
  consumeFromRabbitMq,
  createChatQueue,
  publishToRabbitMq,
} from "./helper/rabbitmqHelper";

// Call the function to create the "chatQueue" queue
createChatQueue("theChatQueue");

// Call the function to consume messages from RabbitMQ
// consumeFromRabbitMq();
//provide the callback function to consumeFromRabbitMq
consumeFromRabbitMq(async (data: any) => {
  console.log(data, "data");
  const model = new Chat(data);
  await model.save();
  console.log("Data saved in the database");
});

const get = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  let data: string[] = [];
  try {
    data = await Chat.find();
    return res.status(200).json({ success: true, data });
  } catch (e: any) {
    console.log(e, "error");
    return res.status(200).json({
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? "error: " + e.message
          : "Something went wrong",
    });
  }
};

const post = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  let data: string[] = [];
  try {
    // Publish the message to RabbitMQ
    await publishToRabbitMq(req.body);

    return res
      .status(200)
      .json({ success: true, message: "Message published to RabbitMQ" });
  } catch (e: any) {
    console.log(e, "error");
    return res.status(200).json({
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? "error: " + e.message
          : "Something went wrong",
    });
  }
};

export default ConnectDb(
  async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
    try {
      return req.method === "POST"
        ? await post(req, res)
        : req.method === "GET"
        ? await get(req, res)
        : res.status(404).json({ success: true, message: "404 not Found" });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  }
);
