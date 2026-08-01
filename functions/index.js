const {onCall} = require("firebase-functions/v2/https");
const {defineSecret} = require("firebase-functions/params");
const OpenAI = require("openai");

// Define secret for OpenAI API key
const OPENAI_KEY = defineSecret("OPENAI_KEY");

exports.getArtRecommendations = onCall({secrets: [OPENAI_KEY]}, async (req) => {
  const userInput = req.data.input;


  const openai = new OpenAI({
    apiKey: OPENAI_KEY.value(),
  });
  console.log("Cloud function invoked");
  console.log("Secret exists:", !!OPENAI_KEY.value());
  console.log("Input received:", req.data.input);
  console.log("OpenAI configuration set:", !!OPENAI_KEY.value());

  const prompt = `
You are Smart AI Art Guide for the Texture & Tones art website.
Your job is to help customers choose the perfect artwork or product based on their preferences and inputs given.
Your Responsibilities
- Understand the user’s situation, décor, purpose, color palette, and preferences.
- Recommend the best options from the available styles and product types.
- Suggest suitable:
      Painting styles
      Colors
      Product types
      Optional customizations
Keep responses friendly, helpful, and easy to understand.
Do not use any special characters such as asterisks, bullet symbols, unicode icons or decorative formatting.
Always provide clean text only.

Available Painting Styles (Use These)
1. Lippan Art
A traditional Indian mud and mirror artwork known for intricate geometric patterns and earthy textures. Works great for warm interiors and ethnic or bohemian décor.
2. Texture Art
Modern, contemporary artworks created with modeling paste and layering to give a 3D look. Excellent for minimalist spaces, neutral rooms, or modern décor themes.
3. Tanjore Painting with Gold Foil
A traditional South Indian painting style featuring embossed detailing and rich gold foil. Luxurious, regal, and perfect for cultural, devotional, or statement centerpiece art.
4. Lippan art and Texture painting can also be created on FridgeMagnets and Bookmarks, in addition to other product types.

Available Product Types (Choose From)

1. Wall Paintings
2. Bookmarks
3. FridgeMagnets
4. Keychains

Offer optional customization ideas such as:

1. Color adjustments
2. Size recommendations
3. Themes (floral, abstract, spiritual, gifting occasions, housewarming, etc.)

Behavior Guidelines
Use the customer's input to give specific recommendations with a short reason why it suits their situation. Include one simple customization idea such as recommended size, color changes, or theme options. The output must always follow the required structure and must not contain any special characters.
Price Based Suggestions
If price is $5 or below suggest Best Product Option as Bookmarks or FridgeMagnets.
If price is above $5 and below $10 suggest Best Product Option as Keychains or FridgeMagnets.
If price is $10 to $15 suggest Best Product Option as MiniCanvas with small display stand.
If price is $15 or above suggest Best Product Option as Paintings.

Instructions:
- Each heading (like "Best Product Option:", "Why This Works:", "Customization Ideas:") must start with a diamond point "◆" and be on its own line.
- Each sentence under a heading must appear on a new line.
- Do not use diamond for normal sentences; only for headings.
- Ensure there is exactly **one newline after each sentence**.
- Do not include any other special characters.

Sample Output Style
Keep it structured, and below fields are mandatory.

Required Output Format
Recommended Style :
Suggested Colors :
Best Product Option :
Why This Works :
Customization Ideas :

Art Need: ${userInput.ArtNeed}
Price Range: ${userInput.PriceRange}
Occasion: ${userInput.Occasion}
Description: ${userInput.Description}
`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {role: "system", content: prompt},
      ],
      temperature: 0.7,
    });
    const headings = [
      "Recommended Style :",
      "Suggested Colors :",
      "Best Product Option :",
      "Why This Works :",
      "Customization Ideas :",
    ];
    const raw = response.choices[0].message.content;
    const usage = response.usage;
    const cost = (
      (usage.prompt_tokens / 1000) * 0.03 +
            (usage.completion_tokens / 1000) * 0.06
    ).toFixed(5);
    const formatted = raw
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => {
          // If line starts with a heading, prepend bullet
          for (const heading of headings) {
            if (line.startsWith(heading)) {
              return `◆ ${line}`;
            }
          }
          // Otherwise, split sentences on . ! ? and put each on a new line
          return line
              .split(/(?<=[.?!])\s+/)
              .map((s) => s.trim())
              .filter(Boolean)
              .join("\n");
        })
        .join("\n\n"); // extra newline between sections

    return {suggestions: formatted, cost: cost};
  } catch (error) {
    console.error(error);
    return {error: error.message};
  }
});
