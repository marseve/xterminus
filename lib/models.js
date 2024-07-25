// the ordering of these matters, it determines the order in the UI
const MODELS = [
{
    id: 88,
    owner: "fofr",
    name: "sd3-explorer",
    default_params: {
        model: "sd3_medium_incl_clips_t5xxlfp16.safetensors",
      shift: 3,
      steps: 28,
      width: 1024,
      height: 1024,
      sampler: "dpmpp_2m",
      scheduler: "sgm_uniform",
      output_format: "webp",
      guidance_scale: 4.5,
      output_quality: 80,
      negative_prompt: "",
      triple_prompt_t5: "",
      use_triple_prompt: false,
      triple_prompt_clip_g: "",
      triple_prompt_clip_l: "",
      negative_conditioning_end: 0,
      triple_prompt_empty_padding: true
    },
    version: "a9f4aebd943ad7db13de8e34debea359d5578d08f128e968f9a36c3e9b0148d4",
    checked: true,
    source: "replicate",
    url: "https://replicate.com/stability-ai/sdxl?utm_source=project&utm_campaign=zoo",
    description:
      "sd3",
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
    id: 87,
    owner: "fofr",
    name: "kolors",
    default_params: {
      cfg: 5,
      steps: 25,
      width: 1024,
      height: 1024,
      scheduler: "EulerDiscreteScheduler",
      output_format: "webp",
      output_quality: 80,
      negative_prompt: "",
    },
    version: "6145c9c5cbd646873232d661fe0398ab87ac93db66d5c365959a471c651862d7",
    checked: true,
    source: "replicate",
    url: "https://replicate.com/stability-ai/sdxl?utm_source=project&utm_campaign=zoo",
    description:
      "kolors",
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
    version: "5f24084160c9089501c1b3545d9be3c27883ae2239b6f412990e82d4a6210f8f",
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
   {
    id: 77,
    owner: "asiryan",
    name: "reliberate-v3",
    version: "d70438fcb9bb7adb8d6e59cf236f754be0b77625e984b8595d1af02cdf034b29",
    checked: false,
    description:
      "reliberate-v3",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
     input: {
      width: 512,
      height: 512,
      strength: 1,
      scheduler: "Euler A Karras",
      guidance_scale: 7.5,
      negative_prompt: "deformed, disfigured, poorly drawn face, bad anatomy, extra limb, missing limb, mutated hands, mutated fingers, blurry, extra legs, extra arms, extra feet, out of frame, cross-eye",
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
    id: 78,
    owner: "asiryan",
    name: "absolutereality-v1.8",
    version: "e7ed05b327c0132e22c0818591d8ac63edf5ea9fc6929b4d6841713de24eb146",
    checked: false,
    description:
      "absolutereality-v1.8",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
     input: {
      width: 512,
      height: 512,
      strength: 1,
      scheduler: "Euler A Karras",
      guidance_scale: 7.5,
      negative_prompt: "disfigured, kitsch, ugly, oversaturated, greain, low-res, deformed, blurry, bad anatomy, poorly drawn face, mutation, mutated, extra limb, poorly drawn hands, missing limb, floating limbs, disconnected limbs, malformed hands, blur, out of focus, long neck, long body, disgusting, poorly drawn, childish, mutilated, mangled, old, surreal, calligraphy, sign, writing, watermark, text, body out of frame, extra legs, extra arms, extra feet, out of frame, poorly drawn feet, cross-eye",
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
    id: 79,
    owner: "asiryan",
    name: "anime-v2",
    version: "34db37717e63885236436961149c93bcc1284bb06aedc6264e6cf3ea97a8a297",
    checked: false,
    description:
      "anime-v2",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
     input: {
      width: 512,
      height: 512,
      strength: 1,
      scheduler: "K_EULER_ANCESTRAL",
      guidance_scale: 7.5,
      negative_prompt: "deformed, disfigured, bad anatomy, extra limb, missing limb, mutated hands, mutated fingers, blurry, extra legs, extra arms, extra feet, out of frame, cross-eye",
      use_karras_sigmas: false,
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
    id: 80,
    owner: "lorenzomarines",
    name: "astra",
    version: "6ce68112bcaefc7273692243c933c2dcbe0307757a932fede1ca5e12956e0029",
    checked: false,
    description:
      "astra",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
     input: {
      width: 1024,
      height: 1024,
      refine: "no_refiner",
      scheduler: "K_EULER",
      lora_scale: 0.6,
      guidance_scale: 7.5,
      apply_watermark: true,
      high_noise_frac: 0.8,
      negative_prompt: "deformed iris, deformed pupils, semi-realistic, text, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck, blurry, low quality , bad quality , Not detailed, watermark, deformed figures, lack of details, bad anatomy, blurry, extra arms, extra fingers, poorly drawn hands, disfigured, tiling, deformed, mutated ,ugly, disfigured, low quality, blurry ,distorted, blur, smooth, low-quality, warm, haze, over-saturated, high-contrast, out of focus, dark, worst quality, low quality",
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
    id: 81,
    owner: "lorenzomarines",
    name: "d-journey",
    version: "2d84f3049a0b3ed1a20fc657f39c4b1bdef1f7a8ea0ea8b6258e7c37296e039a",
    checked: false,
    description:
      "d-journey",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
     input: {
      width: 1024,
      height: 1024,
      refine: "no_refiner",
      scheduler: "K_EULER",
      lora_scale: 0.6,
      guidance_scale: 7.5,
      apply_watermark: true,
      high_noise_frac: 0.8,
      negative_prompt: "deformed iris, deformed pupils, semi-realistic, text, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck, blurry, low quality , bad quality , Not detailed, watermark, deformed figures, lack of details, bad anatomy, blurry, extra arms, extra fingers, poorly drawn hands, disfigured, tiling, deformed, mutated ,ugly, disfigured, low quality, blurry ,distorted, blur, smooth, low-quality, warm, haze, over-saturated, high-contrast, out of focus, dark, worst quality, low quality",
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
    id: 82,
    owner: "fofr",
    name: "sdxl-2004",
    version: "54a4e82bf8357890caa42f088f64d556f21d553c98da81e59313054cd10ce714",
    checked: false,
    description:
      "sdxl-2004",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
     input: {
      width: 1024,
      height: 1024,
      refine: "no_refiner",
      scheduler: "K_EULER",
      lora_scale: 0.6,
      guidance_scale: 7.5,
      apply_watermark: false,
      high_noise_frac: 0.8,
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
    id: 83,
    owner: "fofr",
    name: "aura-flow",
    version: "ae5ab66a7d1ca7ee44cf8c50265d3bafdef23734d03d66063d1c8fcf82f0c17b",
    checked: false,
    description:
      "aura-flow",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
     input: {
      cfg: 3.5,
      shift: 1.73,
      steps: 25,
      width: 1024,
      height: 1024,
      sampler: "uni_pc",
      scheduler: "normal",
      output_format: "webp",
      output_quality: 80,
      negative_prompt: "ugly, broken",
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
    id: 84,
    owner: "fofr",
    name: "jib-mix-realistic-xl-lightning",
    version: "e5d7bf95840b189a16ea68d8105745a1979c4a9686a722be12dcf6ded24df65e",
    checked: false,
    description:
      "dark-sushi-mix-225d",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
     input: {
      width: 1024,
      height: 1024,
      output_format: "webp",
      output_quality: 80,
      negative_prompt: "",
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
    id: 85,
    owner: "bhavnicksm",
    name: "sdxl-hiroshinagai",
    version: "05dae7a6eb21f7a940abff29ec294fa7b16afe2b076bf13826091e4f401a22f5",
    checked: false,
    description:
      "sdxl-hiroshinagai",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
     input: {
       width: 1024,
      height: 1024,
      refine: "no_refiner",
      scheduler: "K_EULER",
      lora_scale: 0.6,
      guidance_scale: 7.5,
      apply_watermark: false,
      high_noise_frac: 0.8,
      negative_prompt: "dull, mediaeval, gore, break, gaps, lags",
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
    id: 86,
    owner: "asiryan",
    name: "urpm-v1.3",
    version: "8f7a2c8f9a752e296f14570894e833404af798eb626ef62149ab26ad811eef69",
    checked: false,
    description:
      "urpm-v1.3",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
     input: {width: 512,
      height: 512,
      strength: 1,
      scheduler: "K_EULER_ANCESTRAL",
      guidance_scale: 7.5,
      negative_prompt: "disfigured, animated, cartoon, duplicate, kitsch, ugly, oversaturated, greain, low-res, deformed, blurry, bad anatomy, poorly drawn face, mutation, mutated, extra limb, poorly drawn hands, missing limb, floating limbs, disconnected limbs, malformed hands, blur, out of focus, long neck, long body, disgusting, poorly drawn, childish, mutilated, mangled, old, surreal, calligraphy, sign, writing, watermark, text, body out of frame, extra legs, extra arms, extra feet, out of frame, poorly drawn feet, cross-eye",
      use_karras_sigmas: false,
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
    id: 89,
    owner: "fofr",
    name: "realistic-vision-hyper",
    version: "9194e2f965e67804438b928bc616496ca61abdd9f3e66f1f23b4b5b81a83b4e7",
    checked: false,
    description:
      "realistic-vision-hyper",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
     input: {
         width: 768,
      height: 768,
      output_format: "webp",
      output_quality: 80,
      negative_prompt: "",
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
    id: 90,
    owner: "fofr",
    name: "juggernaut-xl-lightning",
    version: "c9a24c321ceb0b7843b872dcae82109dddadd1f82e94b115ee39289e0e182e40",
    checked: false,
    description:
      "juggernaut-xl-lightning",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
     input: {
      width: 1024,
      height: 1024,
      output_format: "webp",
      output_quality: 80,
      negative_prompt: "",
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
    id: 91,
    owner: "fofr",
    name: "epicrealismxl-lightning-hades",
    version: "0ca10b1fd361c1c5568720736411eaa89d9684415eb61fd36875b4d3c20f605a",
    checked: false,
    description:
      "epicrealismxl-lightning-hades",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
     input: {
      width: 1024,
      height: 1024,
      output_format: "webp",
      output_quality: 80,
      negative_prompt: "",
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
    id: 92,
    owner: "charlesmccarthy",
    name: "anima_pencil-xl",
    version: "7e1d2d606d603ef3e4a4ecab1e7d1cf257efe2e5b3e5215a89f14c05113cceb3",
    checked: false,
    description:
      "epicrealismxl-lightning-hades",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
     input: {
      vae: "sdxl-vae-fp16-fix",
      seed: -1,
      model: "Anima_Pencil-XL-v4.safetensors",
      steps: 35,
      width: 1184,
      height: 1184,
      cfg_scale: 7,
      scheduler: "DPM++ 2M SDE Karras",
      negative_prompt: "unaestheticXL_Sky3.1, animal, cat, dog",
      guidance_rescale: 0.7
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
    id: 93,
    owner: "charlesmccarthy",
    name: "cog-iniverse",
    version: "265154b572c4b3780ee830d57d9770fb84c2c6951ff99b877fccb8d819e7e33b",
    checked: false,
    description:
      "cog-iniverse",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
     input: {
      vae: "sdxl-vae-fp16-fix",
      seed: -1,
      model: "guofengv11.safetensors",
      steps: 35,
      width: 1184,
      height: 1184,
      cfg_scale: 7,
      scheduler: "DPM++ 2M SDE Karras",
      negative_prompt: "unaestheticXL_Sky3.1, animal, cat, dog",
      guidance_rescale: 0.7,
      prepend_preprompt: true
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
    id: 94,
    owner: "charlesmccarthy",
    name: "pony-sdxl",
    version: "b070dedae81324788c3c933a5d9e1270093dc74636214b9815dae044b4b3a58a",
    checked: false,
    description:
      "pony-sdxl",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
     input: {
      vae: "sdxl-vae-fp16-fix",
      seed: -1,
      model: "ponyRealism21.safetensors",
      steps: 30,
      width: 1184,
      height: 1184,
      cfg_scale: 7,
      scheduler: "DPM++ 2M SDE Karras",
      guidance_rescale: 0.7,
      prepend_preprompt: true
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
    id: 95,
    owner: "buddhiraz",
    name: "chilloutmix-ni-pruned-fp32-fixx",
    version: "2c0516efe8bf57b00ce3b36388f3fdb167285a1c87f5beb073802f3ca1c12536",
    checked: false,
    description:
      "chill",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
     input: {
      num_steps: 20,
      guidance_scale: 5,
      negative_prompt: "nsfw, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry"
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
    id: 96,
    owner: "lucataco",
    name: "mobius",
    version: "3cdbd5c9ae0befe03344cf0bf7445d68eafa83e0b3d99fb6d1f917b2941ca44f",
    checked: false,
    description:
      "mobius",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
     input: {
      width: 1024,
      height: 1024,
      guidance_scale: 7,
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
    id: 97,
    owner: "asiryan",
    name: "kandinsky-3.0",
    version: "706edd88577cccfa826404969330e3d9121ad98ea3336acfcab8873a837070e2",
    checked: false,
    description:
      "kandinsky-3.0",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
     input: {
      width: 1024,
      height: 1024,
      strength: 0.75,
      negative_prompt: "lowres, text, error, cropped, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, out of frame, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck, username, watermark, signature",
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
    id: 98,
    owner: "cjwbw",
    name: "analog-diffusion",
    version: "1f7f51e8b2e43ade14fb7d6d62385854477e078ac870778aafecf70c0a6de006",
    checked: false,
    description:
      "analog-diffusion",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
     input: {
         width: 512,
      height: 512,
      scheduler: "K_EULER_ANCESTRAL",
      guidance_scale: 7,
      negative_prompt: "blur haze",
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
    id: 99,
    owner: "cjwbw",
    name: "altdiffusion-m9",
    version: "29007bf2cc13bda2e3128827ad757012c8d6acb48d3fe6cfb6d9941b66d639a9",
    checked: false,
    description:
      "altdiffusion-m9",
    url: "https://replicate.com/replicate/deepfloyd-if?utm_source=project&utm_campaign=zoo",
    source: "replicate",
     input: {
      width: 512,
      height: 512,
      guidance_scale: 7.5,
      prompt_strength: 0.8,
      num_inference_steps: 25
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
    id: 100,
    owner: "wglint",
    name: "2_sdv2-1",
    default_params: {
     width: 512,
      height: 512,
      NSFW_Detector: true,
      num_inteference_steps: 20
    },
    version: "1ad4da90b374e783c40371954aecf8a7e7c87387e0b67252ae148d87117fbb24",
    checked: true,
    source: "replicate",
    url: "https://replicate.com/stability-ai/sdxl?utm_source=project&utm_campaign=zoo",
    description:
      "2_sdv2-1",
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
    id: 101,
    owner: "delta-lock",
    name: "ponynai3",
    default_params: {
     vae: "default",
      seed: -1,
      model: "tPonynai3_v55.safetensors",
      steps: 35,
      width: 1184,
      height: 1184,
      lora_url: "",
      strength: 0.7,
      cfg_scale: 7,
      scheduler: "DPM++ 2M SDE Karras",
      blur_factor: 5,
      negative_prompt: "animal, cat, dog",
      guidance_rescale: 0.7,
      prepend_preprompt: true
    },
    version: "ec2129c46a5b301088c3f6f58091a3d12d1eece3b3682bf569db940d6b081bb2",
    checked: true,
    source: "replicate",
    url: "https://replicate.com/stability-ai/sdxl?utm_source=project&utm_campaign=zoo",
    description:
      "ponynai3",
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
    id: 102,
    owner: "felixyifeiwang",
    name: "eom-phase1",
    default_params: {
      width: 1024,
      height: 1024,
      refine: "no_refiner",
      scheduler: "K_EULER",
      lora_scale: 0.6,
      guidance_scale: 7.5,
      apply_watermark: true,
      high_noise_frac: 0.8,
      negative_prompt: "out of frame, mutated, deformed, extras, sprites",
      prompt_strength: 0.8,
      num_inference_steps: 50
    },
    version: "04a0c87f4d2e4cd1402b103c9545762f545cde100de8739eea8671b15bf399af",
    checked: true,
    source: "replicate",
    url: "https://replicate.com/stability-ai/sdxl?utm_source=project&utm_campaign=zoo",
    description:
      "eom-phase1",
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
    id: 103,
    owner: "lucataco",
    name: "thinkdiffusionxl",
    default_params: {
      width: 1024,
      height: 1024,
      scheduler: "DPMSolverMultistep",
      nsfw_checker: true,
      guidance_scale: 6,
      negative_prompt: "anime, cartoon, graphic, text, painting, crayon, graphite, abstract, glitch, blur, bokeh",
      num_inference_steps: 30
    },
    version: "c41c12756b561bc81047a9307c9143589d158ef084655dbb3073b4f08ff54f32",
    checked: true,
    source: "replicate",
    url: "https://replicate.com/stability-ai/sdxl?utm_source=project&utm_campaign=zoo",
    description:
      "thinkdiffusionxl",
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
    id: 104,
    owner: "anotherjesse",
    name: "sd15-consistency-decoder-vae",
    default_params: {
      width: 512,
      height: 512,
      scheduler: "DPMSolverMultistep",
      guidance_scale: 7.5,
      consistency_decoder: true,
      num_inference_steps: 50
    },
    version: "7a5d96bdd41ffe8c449f6c6818a9aaa31db3fb4d7d7154feef3fd778318c64a3",
    checked: true,
    source: "replicate",
    url: "https://replicate.com/stability-ai/sdxl?utm_source=project&utm_campaign=zoo",
    description:
      "sd15-consistency-decoder-vae",
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
    id: 105,
    owner: "afiaka87",
    name: "sd-aesthetic-guidance",
    input: {
      width: "768",
      height: 768,
      scheduler: "DPMSolverMultistep",
      guidance_scale: "6.55",
      prompt_strength: 0.8,
      num_inference_steps: "50"
    },
    version: "e5e1fd333a08c8035974a01dd42f799f1cca4625aec374643d716d9ae40cf2e4",
    checked: true,
    source: "replicate",
    url: "https://replicate.com/stability-ai/stable-diffusion?utm_source=project&utm_campaign=zoo",
    description:
      "sd-aesthetic-guidance",
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
    id: 106,
    owner: "felixyifeiwang",
    name: "eom-phase2",
    input: {
      width: 1024,
      height: 1024,
      refine: "no_refiner",
      scheduler: "K_EULER",
      lora_scale: 0.6,
      guidance_scale: 7.5,
      apply_watermark: true,
      high_noise_frac: 0.8,
      negative_prompt: "out of frame, mutated, deformed, extras, sprites",
      prompt_strength: 0.8,
      num_inference_steps: 50
    },
    version: "875ce3cef1e29db5ecf7004250d695e9e7304588ea79064bdd342567b01d51b3",
    checked: true,
    source: "replicate",
    url: "https://replicate.com/stability-ai/stable-diffusion?utm_source=project&utm_campaign=zoo",
    description:
      "eom-phase2",
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
    id: 107,
    owner: "datacte",
    name: "proteus-v0.5",
    input: {
      width: 1024,
      height: 1024,
      scheduler: "DPM++2MSDE",
      guidance_scale: 7,
      negative_prompt: "",
      prompt_strength: 0.8,
      disable_safety_checker: true,
      num_inference_steps: 50
    },
    version: "f72450d49fa7cb6ebfc940755b8935b5bc309f1a9d10119d5e66ca7cb228c4ca",
    checked: true,
    source: "replicate",
    url: "https://replicate.com/stability-ai/stable-diffusion?utm_source=project&utm_campaign=zoo",
    description:
      "proteus-v0.5",
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
    id: 108,
    owner: "felixyifeiwang",
    name: "eom-phase3",
    input: {

      width: 1024,
      height: 1024,
      refine: "no_refiner",
      scheduler: "K_EULER",
      lora_scale: 0.6,
      guidance_scale: 7.5,
      apply_watermark: true,
      high_noise_frac: 0.8,
      negative_prompt: "out of frame, mutated, deformed, extras, sprites",
      prompt_strength: 0.8,
    disable_safety_checker: true,
      num_inference_steps: 50
    },
    version: "cb54f13a1e5107440378e594fd45011fd911f556f5e1deef8a10f5c9f2a7a489",
    checked: true,
    source: "replicate",
    url: "https://replicate.com/stability-ai/stable-diffusion?utm_source=project&utm_campaign=zoo",
    description:
      "eom-phase3",
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
    id: 7,
    owner: "fofr",
    name: "ultrapixel",
    input: {
      width: 2048,
      height: 2048,
      stage_b_cfg: 1.1,
      stage_c_cfg: 4,
      output_format: "webp",
      stage_b_steps: 10,
      stage_c_steps: 20,
      output_quality: 80,
    },
    version: "48934fc160c585169143f55dde57966cf466c08541bc937746ef91408a9dac7b",
    checked: true,
    source: "replicate",
    url: "https://replicate.com/stability-ai/stable-diffusion?utm_source=project&utm_campaign=zoo",
    description:
      "ultrapixel",
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
    id: 2,
    owner: "datacte",
    name: "prometheusv1",
    input: {
     width: 1024,
      height: 1024,
      scheduler: "DPM++2MSDE",
      guidance_scale: 7,
      negative_prompt: "",
      prompt_strength: 0.8,
      num_inference_steps: 50
    },
    version: "48934fc160c585169143f55dde57966cf466c08541bc937746ef91408a9dac7b",
    checked: true,
    source: "replicate",
    url: "https://replicate.com/stability-ai/stable-diffusion?utm_source=project&utm_campaign=zoo",
    description:
      "prometheusv1",
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
];

export default MODELS;
