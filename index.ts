import fs from "fs";
import fetch from "node-fetch";
import OpenAI, { toFile } from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// If you have access to Node fs we recommend using fs.createReadStream():

const main = async () => {
  //   const file = await openai.files.create({
  //     file: fs.createReadStream("training-data/tailwind-ui.jsonl"),
  //     purpose: "fine-tune",
  //   });

  //   console.log(file);

  //   const fineTune = await openai.fineTuning.jobs.create({
  //     training_file: file.id,
  //     model: "gpt-3.5-turbo",
  //   });
  let fineTune = await openai.fineTuning.jobs.retrieve(
    "ftjob-wHxi1IuBsFVCr4s6PD5AfBym"
  );

  console.log(fineTune);
};

main();
