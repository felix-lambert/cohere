require("dotenv").config();

const { CohereClient } = require("cohere-ai");

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

async function summarizeText(text) {
  try {
    const response = await cohere.generate({
      model: "command-light",
      prompt: `Summarize the following text:\n\n${text}\n\nSummary:`,
      max_tokens: 100,
      temperature: 0.5,
    });
    return response.generations[0].text.trim();
  } catch (error) {
    console.error("Error in generating summary:", error);
    return null;
  }
}

// Example usage
const inputText =
  "Cohere is a Canadian multinational technology company focused on artificial intelligence for the enterprise, specializing in large language models.[2] Cohere was founded in 2019 by Aidan Gomez, Ivan Zhang, and Nick Frosst,[3] and is headquartered in Toronto and San Francisco, with offices in Palo Alto and London. In 2017, a team of researchers at Google Brain, which included Aidan Gomez, published a paper called Attention is All You Need, which introduced the transformer machine learning architecture, setting state-of-the-art performance on a variety of natural language processing tasks. In 2019, Gomez and Nick Frosst, another researcher at Google Brain, founded Cohere along with Ivan Zhang, with whom Gomez had done research at FOR.ai. All of the co-founders attended University of Toronto. Gomez has served as the company's CEO since its founding.[8] On December 13, 2022, it was announced that Cohere hired former YouTube CFO Martin Kon as their new president and chief operating officer. In November 2021, Google Cloud announced that they would help power Cohere's platform using their robust infrastructure, and Cloud's TPUs would be used by Cohere for the development and deployment of their products. In June 2022, Cohere launched Cohere For AI, a nonprofit research lab and community dedicated to contributing open-source, fundamental machine learning research. It is led by Sara Hooker, a former research scientist at Google Brain.[13] In December 2022, Cohere released a multilingual model for understanding text that would work with over 100 languages, to help users search for documents by meaning instead of with keywords. This type of process was not previously widely available in languages other than English.[10] On June 13, 2023, Oracle announced a partnership with Cohere to provide generative AI services to help organizations automate end-to-end business processes. As a result, Cohere's technology is integrated into Oracle's business applications, including Oracle Fusion Cloud, Oracle NetSuite, and Oracle industry-specific applications.[14] On July 18, 2023, McKinsey announced a collaboration with Cohere, to help organizations integrate generative AI into their operations.[15] In 2023, Cohere collaborated with software company LivePerson to offer customized large language models for businesses. "; // Replace with your text
summarizeText(inputText).then((summary) => {
  console.log("\nSummary:\n", summary);
});
