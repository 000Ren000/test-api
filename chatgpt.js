import OpenAI from "openai"
import dotenv from 'dotenv'
dotenv.config()

const client = new OpenAI({
    apiKey: process.env.OPENAI_KEY
});

const model = process.env.OPENAI_MODEL;

export const sendGPT = async () => {
    return client.chat.completions.create({
        model,
        messages: [
            {
                role: "user",
                content: "Write a one-sentence bedtime story about a unicorn.",
            },
        ],
    });
}
