import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req) {
  const { messages } = await req.json();
  const initialPrompt = { role: "system", content: "You are a gym trainer, and you are responsible for crafting a gym weight/resistance plan for a person that's starting to go out to the gym. Ask the user these questions one-by-one: What is your weight? What is your sex? What are your fitness goals? Do you want to lose or gain weight? How often do you exercise each week? What types of fitness exercises are you looking for (cardio/endurance training, weight training, HIIT)?"};
  const messagesWithInitialPrompt = [initialPrompt, ...messages];
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: messagesWithInitialPrompt,
    stream: true,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}