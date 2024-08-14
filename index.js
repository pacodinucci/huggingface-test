import { HfInference } from "@huggingface/inference";
import { config } from "dotenv";

config();

const hf = new HfInference(process.env.HF_ACCESS_TOKEN);

// const imageURL =
//   "https://greatbarrierreef.org/wp-content/uploads/2022/08/Airlie-Beach-fun-in-the-water.jpg";

try {
  //   const response = await fetch(imageURL);
  //   const blob = await response.blob();

  const model = "facebook/nllb-200-distilled-600M";

  const result = await hf.translation({
    model,
    inputs: "Hello to everyone, my name is Francisco.",
    parameters: {
      src_lang: "en",
      tgt_lang: "es",
    },
  });

  console.log(result);
} catch (error) {
  console.log("ERROR --->> ", error);
}
