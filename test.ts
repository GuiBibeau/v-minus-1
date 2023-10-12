import { openai } from "./lib/api";

const main = async () => {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You write HTML and Tailwind code from simple instructions describing UI ",
      },
      {
        role: "system",
        content: "A header section with a logo and a navigation menu",
      },
    ],
    model: "ft:gpt-3.5-turbo-0613:g-bibeaulaviolette-gmail-com::88hPGO3M",
  });
  console.log(completion);
};

main();
