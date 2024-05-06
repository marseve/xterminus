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
      disable_safety_checker: true,
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
    owner: "cjwbw",
    name: "stable-diffusion-v2",
    input: {
      width: "768",
      height: 768,
      scheduler: "DPMSolverMultistep",
      init_image: "https://replicate.delivery/pbxt/HtCXRc5QMwvXfOOqx56gzsZcmTxmOwzSzN4CpzQj8q9pzaOt/sketch-mountains-input.jpeg",
      guidance_scale: "6.55",
      prompt_strength: 0.8,
      num_inference_steps: "50"
    },
    version: "e5e1fd333a08c8035974a01dd42f799f1cca4625aec374643d716d9ae40cf2e4",
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
      disable_safety_checker: true,
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
      disable_safety_checker: true,
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
      disable_safety_checker: true,
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
      apply_watermark: false,
      disable_safety_checker: true,
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
  {
    id: 24,
    owner: "lucataco",
    name: "proteus-v0.3",
    version: "b28b79d725c8548b173b6a19ff9bffd16b9b80df5b18b8dc5cb9e1ee471bfa48",
    checked: false,
    description:
      "proteus-v0.3",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
    default_params: {
      width: 1024,
      height: 1024,
      scheduler: "DPM++2MSDE",
      disable_safety_checker: true,
      guidance_scale: 7.5,
      apply_watermark: false,
      negative_prompt: "worst quality, low quality",
      prompt_strength: 0.8,
      num_inference_steps: 30
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
    id: 25,
    owner: "lucataco",
    name: "proteus-v0.4",
    version: "34a427535a3c45552b94369280b823fcd0e5c9710e97af020bf445c033d4569e",
    checked: false,
    description:
      "proteus-v0.4",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
    default_params: {
      width: 1024,
      height: 1024,
      disable_safety_checker: true,
      scheduler: "DPM++2MSDE",
      guidance_scale: 7.5,
      apply_watermark: false,
      negative_prompt: "nsfw, bad quality, bad anatomy, worst quality, low quality, low resolutions, extra fingers, blur, blurry, ugly, wrongs proportions, watermark, image artifacts, lowres, ugly, jpeg artifacts, deformed, noisy image",
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
    id: 26,
    owner: "prompthero",
    name: "openjourney",
    version: "ad59ca21177f9e217b9075e7300cf6e14f7e5b4505b87b9689dbd866e9768969",
    checked: false,
    description:
      "openjourney",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
    default_params: {
      width: 512,
      height: 512,
      scheduler: "DPMSolverMultistep",
      guidance_scale: 7,
      prompt_strength: 0.8,
      num_inference_steps: 50
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
    id: 27,
    owner: "prompthero",
    name: "epicrealism",
    version: "dd027f64fca42dca8a3debe12920c876f5dca7a0f6dcb08fab5ded5c42e4b4ad",
    checked: false,
    description:
      "epicrealism",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
    default_params: {
      width: 512,
      height: 512,
      scheduler: "K_EULER_ANCESTRAL",
      guidance_scale: 5,
      negative_prompt: "(worst quality, low quality, normal quality:2), (watermark), immature, child, (huge head), nude, nsfw, naked",
      prompt_strength: 0.8,
      num_inference_steps: 35
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
    id: 28,
    owner: "prompthero",
    name: "majicmix",
    version: "a11dab78f9dd9d9356b7b364cb93045ea89de1899543280ca9a9f4b77062b761",
    checked: false,
    description:
      "majicmix",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
    default_params: {
      width: 512,
      height: 512,
      disable_safety_checker: true,
      NSFW_Detector: true,
      scheduler: "K_EULER_ANCESTRAL",
      guidance_scale: 7.5,
      negative_prompt: "(worst quality:2), (low quality:2), (normal quality:2), lowres, bad anatomy, bad hands, normal quality, ((monochrome)), ((grayscale))",
      prompt_strength: 0.8,
      num_inference_steps: 30
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
    id: 29,
    owner: "konieshadow",
    name: "fooocus-api-realistic",
    version: "8958d6f677f825b57175bf644471fddfee6210a165cc20037323575a84d16afb",
    checked: false,
    description:
      "fooocus-api-realistic",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
    input: {
      cn_type1: "ImagePrompt",
      cn_type2: "ImagePrompt",
      cn_type3: "ImagePrompt",
      cn_type4: "ImagePrompt",
      sharpness: 2,
      uov_method: "Disabled",
      guidance_scale: 3,
      refiner_switch: 0.5,
      negative_prompt: "unrealistic, saturated, high contrast, big nose, painting, drawing, sketch, cartoon, anime, manga, render, CG, 3d, watermark, signature, label",
      style_selections: "Fooocus V2,Fooocus Photograph,Fooocus Negative",
      uov_upscale_value: 0,
      outpaint_selections: "",
      outpaint_distance_top: 0,
      performance_selection: "Speed",
      outpaint_distance_left: 0,
      aspect_ratios_selection: "1152*896",
      outpaint_distance_right: 0,
      outpaint_distance_bottom: 0,
      inpaint_additional_prompt: ""
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
    id: 62,
    owner: "cjwbw",
    name: "hasdx",
    version: "6d6e9b8c70d1447e946362d5c9060e42cb0f3e1ac122bdf725a0f3726cf67774",
    checked: false,
    description:
      "hasdx",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
    input: {
      width: 512,
      height: 512,
      scheduler: "DPMSolverMultistep",
      guidance_scale: 7,
      negative_prompt: "Asian, cartoon, 3d, (disfigured), (bad art), (deformed), (poorly drawn), (extra limbs), (close up), strange colors, blurry, boring, sketch, lackluster, big breast, large breast, huge breasts, face portrait, self-portrait, signature, letters, watermark",
      num_inference_steps: "50"
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
    id: 63,
    owner: "cjwbw",
    name: "hyper-sdxl-1step-t2i",
    version: "1c549e93d8d2e2beb6937146b0e82f6dab1b5ca5d8832015bbca25d5ad98750a",
    checked: false,
    description:
      "hyper-sdxl-1step-t2i",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
    input: {
      width: 1024,
      height: 1024,
      output_format: "webp",
      output_quality: 80
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
    id: 64,
    owner: "pagebrain",
    name: "epicrealism-v4",
    version: "b4cb8a9b18fefd2bfd854193281ffe8dae913b72056a147af25ca21c866bf190",
    checked: false,
    description:
      "epicrealism-v4",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
    input: {
      width: "576",
      height: "1024",
      scheduler: "KarrasDPM",
      guidance_scale: 5,
      safety_checker: true,
      negative_prompt: "UnrealisticDream, BadDream, FastNegativeV2",
      prompt_strength: 0.8,
      num_inference_steps: 30
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
    id: 65,
    owner: "pagebrain",
    name: "wuerstchen-v2",
    version: "fba2b69c67341c193ffda8710f484d79ee93846ba5c539d1c9af515145f9bd3f",
    checked: false,
    description:
      "wuerstchen-v2",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
    input: {
      width: 1024,
      height: 1024,
      num_inference_steps: 12,
      prior_guidance_scale: 4,
      decoder_guidance_scale: 0,
      prior_num_inference_steps: 30
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
    id: 66,
    owner: "pagebrain",
    name: "cyberrealistic-v3-3",
    version: "02d575aeefff93cc32262e65c2784e00bf1af37071a6b6202adf62285c71f559",
    checked: false,
    description:
      "cyberrealistic-v3-3",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
     input: {
      width: 512,
      height: 512,
      scheduler: "KarrasDPM",
      guidance_scale: 5,
      safety_checker: false,
      negative_prompt: "(deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime, mutated hands and fingers:1.4), (deformed, distorted, disfigured:1.3), poorly drawn, bad anatomy, wrong anatomy, extra limb, missing limb, floating limbs, disconnected limbs, mutation, mutated, ugly, disgusting, amputation",
      prompt_strength: 0.8,
      num_inference_steps: 60
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
    id: 67,
    owner: "pagebrain",
    name: "deliberate-v3",
    version: "dec5faca84724a70948a36cd9bf857afb254ec549dde9b0e47a06bddd37ba83a",
    checked: false,
    description:
      "deliberate-v3",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
     input: {
      width: "1024",
      height: "1024",
      scheduler: "KarrasDPM",
      guidance_scale: 6,
      safety_checker: false,
      negative_prompt: "[deformed | disfigured], poorly drawn, [bad : wrong] anatomy, [extra | missing | floating | disconnected] limb, (mutated hands and fingers), blurry",
      prompt_strength: 0.8,
      num_inference_steps: 22
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
    id: 68,
    owner: "pagebrain",
    name: "absolutereality-v1-6",
    version: "9bdf7ad3db4f0af8985f2988854380588fca5d6b9d08026405059be34448f014",
    checked: false,
    description:
      "absolutereality-v1-6",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
     input: {
      width: "1024",
      height: "1024",
      scheduler: "K_EULER_ANCESTRAL",
      guidance_scale: 5,
      safety_checker: false,
      negative_prompt: "(worst quality:2),(low quality:2),(blurry:2),bad_prompt,text, (bad and mutated hands:1.3),(bad hands),badhandv4,mutated hands, bad anatomy, missing fingers,extra fingers,fused fingers,too many fingers,(interlocked fingers:1.2), extra limbs,malformed limbs,multiple limbs, extra arms, extra legs, long neck, cross-eyed, negative_hand, negative_hand-neg, text, label, caption, nude, nsfw, naked, explicit, porn",
      prompt_strength: 0.8,
      num_inference_steps: 30
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
    id: 69,
    owner: "pagebrain",
    name: "epicphotogasm-v1",
    version: "a85289848da9d5a040510b0d787ff9df6f5a0de20298dd0d4e9ed287eaa1524b",
    checked: false,
    description:
      "absolutereality-v1-6",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
     input: {
      width: "1024",
      height: "1024",
      scheduler: "K_EULER_ANCESTRAL",
      guidance_scale: 5,
      negative_prompt: "(worst quality:2),(low quality:2),(blurry:2),bad_prompt,text, (bad and mutated hands:1.3),(bad hands),badhandv4,mutated hands, bad anatomy, missing fingers,extra fingers,fused fingers,too many fingers,(interlocked fingers:1.2), extra limbs,malformed limbs,multiple limbs, extra arms, extra legs, long neck, cross-eyed, negative_hand, negative_hand-neg, text, label, caption, nude, nsfw, naked, explicit, porn",
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
    id: 71,
    owner: "charlesmccarthy",
    name: "animagine-xl",
    version: "db29f76d40ecf86335295ca5b24ed95e6b1eca4e29239c47cfefa68f408cbf5e",
    checked: false,
    description:
      "animagine-xl",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
     input: {
      width: 1024,
      height: 1024,
      scheduler: "KarrasDPM",
      guidance_scale: 7.5,
      apply_watermark: false,
      negative_prompt: "worst quality, low quality",
      prompt_strength: 0.8,
      num_inference_steps: 60
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
    id: 72,
    owner: "charlesmccarthy",
    name: "terminus-xl-gamma-v2",
    version: "991d0656366cbaec46d5457fe8994b1a09cca74f3f7590370d1a3669ad891189",
    checked: false,
    description:
      "terminus-xl-gamma-v2",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
     input: {
      width: 1024,
      height: 1024,
      scheduler: "DPMSolverMultistep",
      guidance_scale: 6.5,
      apply_watermark: false,
      negative_prompt: "",
      num_inference_steps: 32
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
    id: 73,
    owner: "re-mix-1",
    name: "sdxl-lightning-8step",
    version: "a13d8c2278aa031d65892177b7b08694bfe629e1e9c0f8b0d59cbaf62bf71fa7",
    checked: false,
    description:
      "sdxl-lightning-8step",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
     input: {
      width: 1024,
      height: 1024,
      scheduler: "K_EULER",
      guidance_scale: 0,
      negative_prompt: "worst quality, low quality",
      num_inference_steps: 8
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
    id: 74,
    owner: "xiankgx",
    name: "sdxl-evolution-0.1",
    version: "534ed872c202a71cf717c1cabbe4fb5d33f6ad92d6da8e11c7fa2bb6f5419038",
    checked: false,
    description:
      "ssdxl-evolution-0.1",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
     input: {
      seed: -1,
      steps: 8,
      width: 1024,
      height: 1024,
      guidance_scale: 2,
      negative_prompt: ""
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
    id: 75,
    owner: "asiryan",
    name: "dark-sushi-mix-225d",
    version: "f4f0f05388c49da7faf6c5db4eb4b3c7f693a82e86bedfced2a69ef3c1c6b4c4",
    checked: false,
    description:
      "dark-sushi-mix-225d",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
     input: {
      width: 1024,
      height: 1024,
      strength: 0.8,
      scheduler: "Euler A Karras",
      guidance_scale: 7.5,
      negative_prompt: "disfigured, kitsch, ugly, oversaturated, greain, low-res, deformed, blurry, bad anatomy, poorly drawn face, mutation, mutated, extra limb, poorly drawn hands, missing limb, floating limbs, disconnected limbs, malformed hands, blur, out of focus, long neck, long body, disgusting, poorly drawn, childish, mutilated, mangled, old, surreal, calligraphy, sign, writing, watermark, text, body out of frame, extra legs, extra arms, extra feet, out of frame, poorly drawn feet, cross-eye",
      num_inference_steps: 50
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
    id: 76,
    owner: "asiryan",
    name: "deliberate-v6",
    version: "605a9ad23d7580b2762173afa6009b1a0cc00b7475998600ba2c39eda05f533e",
    checked: false,
    description:
      "deliberate-v6",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
     input: {
      width: 512,
      height: 512,
      strength: 1,
      scheduler: "Euler A Karras",
      guidance_scale: 7.5,
      negative_prompt: "[disfigured, poorly drawn], [bad : wrong] anatomy, [extra | missing | floating | disconnected] limb, mutated, blurry",
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
];

export default MODELS;
