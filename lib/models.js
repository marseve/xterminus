// the ordering of these matters, it determines the order in the UI
const MODELS = [
  {
    id: 31,
    owner: "playgroundai",
    name: "playground-v2.5-1024px-aesthetic",
    default_params: {
      width: 1024,
      height: 1024,
      scheduler: "DPMSolver++",
      guidance_scale: 3,
      apply_watermark: false,
      negative_prompt: "ugly, deformed, noisy, blurry, distorted",
      prompt_strength: 0.8,
      num_inference_steps: 25
    },
    version: "a45f82a1382bed5c7aeb861dac7c7d191b0fdf74d8d57c4a0e6ed7d4d0bf7d24",
    checked: true,
    source: "replicate",
    url: "https://replicate.com/stability-ai/sdxl?utm_source=project&utm_campaign=zoo",
    description:
      "A text-to-image generative AI model that creates beautiful 1024x1024 images",
    links: [
      {
        name: "replicate",
        url: "https://replicate.com/stability-ai/sdxl?utm_source=project&utm_campaign=zoo",
      },
      {
        name: "github",
        url: "https://github.com/Stability-AI/generative-models",
      },
    ],
  },
  {
    id: 1,
    owner: "stability-ai",
    name: "stable-diffusion 2.1",
    default_params: {
      image_dimensions: "512x512",
    },
    version: "db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",
    checked: true,
    source: "replicate",
    url: "https://replicate.com/stability-ai/stable-diffusion?utm_source=project&utm_campaign=zoo",
    description:
      "A latent text-to-image diffusion model capable of generating photo-realistic images given any text input",
    links: [
      {
        name: "replicate",
        url: "https://replicate.com/stability-ai/stable-diffusion?utm_source=project&utm_campaign=zoo",
      },
      {
        name: "github",
        url: "https://github.com/replicate/cog-stable-diffusion?utm_source=project&utm_campaign=zoo",
      },
    ],
  },
  {
    id: 3,
    owner: "stability-ai",
    name: "stable-diffusion 1.5",
    default_params: {
      image_dimensions: "512x512",
    },
    version: "328bd9692d29d6781034e3acab8cf3fcb122161e6f5afb896a4ca9fd57090577",
    checked: true,
    source: "replicate",
    url: "https://replicate.com/stability-ai/stable-diffusion?utm_source=project&utm_campaign=zoo",
    description:
      "A latent text-to-image diffusion model capable of generating photo-realistic images given any text input",
    links: [
      {
        name: "replicate",
        url: "https://replicate.com/stability-ai/stable-diffusion?utm_source=project&utm_campaign=zoo",
      },
      {
        name: "github",
        url: "https://github.com/replicate/cog-stable-diffusion?utm_source=project&utm_campaign=zoo",
      },
    ],
  },

  {
    id: 32,
    owner: "ai-forever",
    name: "kandinsky-2.2",
    default_params: {
      height: 1024,
      width: 1024,
    },
    version: "ad9d7879fbffa2874e1d909d1d37d9bc682889cc65b31f7bb00d2362619f194a",
    checked: true,
    description: "multilingual text2image latent diffusion model",
    url: "https://replicate.com/ai-forever/kandinsky-2.2?utm_source=project&utm_campaign=zoo",
    links: [
      {
        name: "replicate",
        url: "https://replicate.com/ai-forever/kandinsky-2.2?utm_source=project&utm_campaign=zoo",
      },
      {
        name: "github",
        url: "https://github.com/chenxwh/Kandinsky-2.2?utm_source=project&utm_campaign=zoo",
      },
    ],
    source: "replicate",
  },
  {
    id: 4,
    owner: "ai-forever",
    name: "kandinsky-2",
    default_params: {
      image_dimensions: "512x512",
    },
    version: "3c6374e7a9a17e01afe306a5218cc67de55b19ea536466d6ea2602cfecea40a9",
    checked: true,
    description:
      "text2img model trained on LAION HighRes and fine-tuned on internal datasets",
    url: "https://replicate.com/ai-forever/kandinsky-2?utm_source=project&utm_campaign=zoo",
    links: [
      {
        name: "replicate",
        url: "https://replicate.com/ai-forever/kandinsky-2?utm_source=project&utm_campaign=zoo",
      },
      {
        name: "github",
        url: "https://github.com/chenxwh/Kandinsky-2?utm_source=project&utm_campaign=zoo",
      },
    ],
    source: "replicate",
  },
  {
    id: 6,
    owner: "bytedance",
    name: "sdxl-lightning-4step",
    version: "727e49a643e999d602a896c774a0658ffefea21465756a6ce24b7ea4165eba6a",
    checked: true,
    source: "replicate",
    default_params: {
      width: 1024,
      height: 1024,
      scheduler: "K_EULER",
      guidance_scale: 0,
      negative_prompt: "worst quality, low quality",
      num_inference_steps: 4,
    },
    description:
      "sdxl-lightning-4step.",
    url: "https://openai.com/product/dall-e-2?utm_source=project&utm_campaign=zoo",
    links: [
      {
        name: "lightning",
        url: "https://openai.com/product/dall-e-2?utm_source=project&utm_campaign=zoo",
      },
    ],
    source: "replicate",
  },
  {
    id: 10,
    owner: "replicate",
    name: "deepfloyd-if",
    version: "fb84d659df149f4515c351e394d22222a94144aa1403870c36025c8b28846c8d",
    checked: false,
    description:
      "The DeepFloyd IF model has been initially released as a non-commercial research-only model. Please make sure you read and abide to the license before using it.",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
    links: [
      {
        name: "replicate",
        url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
      },
      {
        name: "github",
        url: "https://github.com/replicate/cog-deepfloyd-if?utm_source=project&utm_campaign=zoo",
      },
    ],
  },
  {
    id: 5,
    owner: "tstramer",
    name: "material-diffusion",
    default_params: {
      image_dimensions: "512x512",
    },
    version: "a42692c54c0f407f803a0a8a9066160976baedb77c91171a01730f9b0d7beeff",
    checked: false,
    description:
      "Stable diffusion fork for generating tileable outputs using v1.5 model",
    url: "https://replicate.com/tstramer/material-diffusion?utm_source=project&utm_campaign=zoo",
    links: [
      {
        name: "replicate",
        url: "https://replicate.com/tstramer/material-diffusion?utm_source=project&utm_campaign=zoo",
      },
    ],
    source: "replicate",
  },
  {
    id: 19,
    owner: "lucataco",
    name: "pixart-xl-2",
    version: "816c99673841b9448bc2539834c16d40e0315bbf92fef0317b57a226727409bb",
    checked: false,
    description:
      "pixart-xl-2",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
    links: [
      {
        name: "replicate",
        url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
      },
      {
        name: "github",
        url: "https://github.com/replicate/cog-deepfloyd-if?utm_source=project&utm_campaign=zoo",
      },
    ],
  },
  {
    id: 20,
    owner: "akisakurai",
    name: "stable-karlo",
    version: "bba407e2c36b98cd752488019ef092429f1575d91176634908b759d9ef537723",
    checked: false,
    description:
      "stable-karlo",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
    default_params: {
      width: 768,
      height: 768,
      scheduler: "K_EULER_ANCESTRAL",
      guidance_scale: 7.5,
      negative_prompt: "amateur, mediocre, grainy, blur",
      num_inference_steps: 50,
    },
    links: [
      {
        name: "replicate",
        url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
      },
      {
        name: "github",
        url: "https://github.com/replicate/cog-deepfloyd-if?utm_source=project&utm_campaign=zoo",
      },
    ],
  },
  {
    id: 21,
    owner: "cjwbw",
    name: "karlo",
    version: "455a98ada3991e6e133b1f5a04a3031a8c8c5a5f9697d77d7329d085f93a1b46",
    checked: false,
    description:
      "karlo",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
    default_params: {
      prior_guidance_scale: 4,
      decoder_guidance_scale: 8,
      prior_num_inference_steps: 25,
      decoder_num_inference_steps: 25,
      super_res_num_inference_steps: 7,
    },
    links: [
      {
        name: "replicate",
        url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
      },
      {
        name: "github",
        url: "https://github.com/replicate/cog-deepfloyd-if?utm_source=project&utm_campaign=zoo",
      },
    ],
  },
  {
    id: 22,
    owner: "lucataco",
    name: "proteus-v0.2",
    version: "06775cd262843edbde5abab958abdbb65a0a6b58ca301c9fd78fa55c775fc019",
    checked: false,
    description:
      "proteus-v0.2",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
    default_params: {
      width: 1024,
      height: 1024,
      scheduler: "KarrasDPM",
      guidance_scale: 7.5,
      apply_watermark: true,
      negative_prompt: "worst quality, low quality",
      prompt_strength: 0.8,
      num_inference_steps: 20
    },
    links: [
      {
        name: "replicate",
        url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
      },
      {
        name: "github",
        url: "https://github.com/replicate/cog-deepfloyd-if?utm_source=project&utm_campaign=zoo",
      },
    ],
  },
  {
    id: 23,
    owner: "lucataco",
    name: "sdxs-512-0.9",
    version: "d360529f0597955de5443666ea21310d6c541c8bb7db3cd6e6d99b68516bfc80",
    checked: false,
    description:
      "sdxs-512-0.9",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
    default_params: {
      width: 512,
      height: 512,
    },
    links: [
      {
        name: "replicate",
        url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
      },
      {
        name: "github",
        url: "https://github.com/replicate/cog-deepfloyd-if?utm_source=project&utm_campaign=zoo",
      },
    ],
  },
];

export default MODELS;
