export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST method required" });
  }

  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    // Demo response — पछि यहाँ वास्तविक AI API जोड्न सकिन्छ
    const result = {
      success: true,
      prompt: prompt,
      message: "AI generation request received",
      videoPrompt: `Create a cinematic short video based on: ${prompt}`
    };

    return res.status(200).json(result);

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server error"
    });
  }
}
