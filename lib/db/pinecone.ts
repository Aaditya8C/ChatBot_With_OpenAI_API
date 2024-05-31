import { Pinecone } from "@pinecone-database/pinecone";

const apiKey = process.env.PINCONE_API_KEY;
if (!apiKey) {
  throw new Error("Pinecoin API Key Not Defined");
}

const pinecone = new Pinecone({
  // environment: "gcp-starter",
  apiKey,
});

export const chatIndex = pinecone.Index("ai-chatbot");
