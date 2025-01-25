import OpenAI from 'openai';

export default defineEventHandler(async (event) => {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4', 
      messages: [
        { role: 'user', content: 'write a code' },
      ],
    });

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
