import OpenAI from 'openai';

export default defineEventHandler(async (event) => {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      store: true, 
      messages: [
        { role: "developer", content: "You are a helpful assistant." },
        {
            role: "user",
            content: "Write my code that i said.",
        },
    ],
    });

    console.log(completion.choices[0].message);

    return {
      statusCode: 200,
      body: {
        message: completion.choices[0].message.content, 
      },
    };
  } catch (error) {
    console.error('Error generating snippet:', error);
    return {
      statusCode: 500,
      body: {
        error: 'An error occurred while generating the snippet.',
      },
    };
  }
});
