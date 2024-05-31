import { chatIndex } from "@/lib/db/pinecone";
import openai, { getEmbedding } from "@/lib/openai";
import { auth } from "@clerk/nextjs";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { ChatCompletionMessage } from "openai/resources/index.mjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages: ChatCompletionMessage[] = body.messages;

    const truncateMessages = messages.slice(-6);

    const embedding = await getEmbedding(
      truncateMessages.map((message) => message.content).join("\n")
    );

    // const userId = auth();

    // const vectorQueryResponse = await chatIndex.query({
    //   vector: embedding,
    //   topK: 1, // No of result we want to return
    //   filter: { userId },
    // });

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: [...truncateMessages],
    });

    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.log("object");
    console.error(error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
