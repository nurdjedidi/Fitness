import { c as defineEventHandler } from '../../_/nitro.mjs';
import OpenAI from 'openai';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';

const softai = defineEventHandler(async (event) => {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      store: true,
      messages: [
        { role: "user", content: "write a code" }
      ]
    });
    console.log(completion);
    return {
      statusCode: 200,
      body: {
        message: completion.choices[0].message.content
      }
    };
  } catch (error) {
    console.error("Error generating snippet:", error);
    return {
      statusCode: 500,
      body: {
        error: "An error occurred while generating the snippet."
      }
    };
  }
});

export { softai as default };
//# sourceMappingURL=softai.mjs.map
