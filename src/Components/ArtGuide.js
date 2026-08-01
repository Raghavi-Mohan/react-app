import React, { useState } from "react";
import OpenAI from "openai";

export default function ArtGuide() {
  const [room, setRoom] = useState("");
  const [wallColor, setWallColor] = useState("");
  const [wallSize, setWallSize] = useState("");
  const [occasion, setOccasion] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_KEY,dangerouslyAllowBrowser: true
  });

  const generateRecommendation = async () => {
    setLoading(true);
    setResult("");

    const prompt = `
You are the "Smart Art Guide" for Texture & Tones.
Recommend painting styles, colors, and product types based on:

Room: ${room}
Wall Color: ${wallColor}
Wall Size: ${wallSize}
Occasion: ${occasion}

Give practical suggestions in bullet points.
`;

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4.1",
        messages: [{ role: "user", content: prompt }]
      });

      setResult(completion.choices[0].message.content);
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="art-guide-container">
      <h2 className="guide-title">🎨 Smart AI Art Guide</h2>
      <p className="guide-subtitle">
        Tell us about your wall and get personalized art recommendations.
      </p>

      <div className="guide-form">
        <label>Room Type</label>
        <input
          type="text"
          placeholder="Living room, bedroom, office…"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />

        <label>Wall Color</label>
        <input
          type="text"
          placeholder="Grey, beige, blue, bright white…"
          value={wallColor}
          onChange={(e) => setWallColor(e.target.value)}
        />

        <label>Wall Size</label>
        <input
          type="text"
          placeholder="e.g., 12 ft width, 8 ft height"
          value={wallSize}
          onChange={(e) => setWallSize(e.target.value)}
        />

        <label>Occasion</label>
        <input
          type="text"
          placeholder="Housewarming, festival, new baby, decor..."
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        />

        <button
          className="btn btn-primary mt-3"
          onClick={generateRecommendation}
          disabled={loading}
        >
          {loading ? "Thinking..." : "Get Recommendation"}
        </button>
      </div>

      {result && (
        <div className="guide-result mt-4">
          <h4>Suggested Art Direction</h4>
          <pre>{result}</pre>
        </div>
      )}
    </div>
  );
}
