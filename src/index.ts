import * as dotenv from 'dotenv';
dotenv.config();

import { blue, red, yellow } from "colors";
import { question } from "readline-sync";
import OpenAI from 'openai';
import { eje1 } from './eje1';

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

const OPENAI_MODEL = 'gpt-3.5-turbo';

// Define los tipos de mensaje explícitamente
interface ChatCompletionMessageParam {
  role: 'system' | 'user' | 'assistant';
  content: string;
  name?: string;
}

async function askToChatGPT() {
  console.log(yellow("Welcome to the chat!"));
  console.log(yellow("You can start chatting with the AI now!"));
  console.log(yellow("Type 'exit' to stop the chat."));

  const systemMessage: ChatCompletionMessageParam = {
    role: 'system',
    content: `You are a teaching assistant. Please respond only using the provided theoretical framework: ${eje1}`,
  };

  let messages: ChatCompletionMessageParam[] = [systemMessage];

  while (true) {
    const userInput: string = question(yellow("You: "));

    if (userInput.toLowerCase() === "exit") {
      console.log(red(`Goodbye! Command: ${userInput}`));
      return;
    }

    messages.push({ role: 'user', content: userInput });

    try {
      const response = await openai.chat.completions.create({
        model: OPENAI_MODEL,
        messages: messages,
      });

      const assistantResponse = response.choices[0]?.message?.content;
      console.log(blue(`Assistant: ${assistantResponse}`));

      messages.push({ role: 'assistant', content: assistantResponse || '' });
    } catch (error) {
      console.error(red("Error fetching response from OpenAI: "), error);
    }
  }
}

askToChatGPT();
