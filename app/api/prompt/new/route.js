import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
export const POST = async (req) => {
  const { userId, prompt, tag } = await req.json();
  try {
    await connectToDB();
    const newPropmt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });
    await newPropmt.save();
    return new Response(JSON.stringify(newPropmt), { status: 201 });
  } catch (err) {
    return new Response("Failed to create a new prompt.", { status: 500 });
  }
};
