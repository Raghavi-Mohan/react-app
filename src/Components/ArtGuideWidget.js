import React, { useState } from "react";
import OpenAI from "openai";
import { functions, httpsCallable } from '../firebase';
import "../ArtGuideWidget.css";

export default function ArtGuideWidget() {
  const [open, setOpen] = useState(false);
  const [room, setRoom] = useState("");
  const [wallColor, setWallColor] = useState("");
  const [occasion, setOccasion] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [userInput, setUserInput] = useState("");


  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_KEY,
    dangerouslyAllowBrowser: true
  });

  const generateRecommendation = async () => {
    if (!room.trim() || !wallColor.trim() || !occasion.trim()) {
      setLoading(false);
      setResult("please enter valid details for Room, Price Preference, and Occasion.");
      return;
    }

    setLoading(true);
    setResult("");
    const input = {
      ArtNeed: `${room}`,
      PriceRange: `${wallColor}`,
      Occasion: `${occasion}`,
      Description: `${description}`
    };

    try {

      const getArt = httpsCallable('getArtRecommendations');
      const result = await getArt({ input });
      const sug = "◆ AI suggestions are coming soon";
      //const processed = applyProductLink(result.data.suggestions);
      const processed = applyProductLink(sug);
      setResult(processed);
      setLoading(false);
      console.log("Cost of this call : " + result.data.cost);
    } catch (err) {
      console.error(err);
      setResult("Hmm… looks like the AI went to wash its palettes.");
      setLoading(false);
    }

    setLoading(false);

  };

  function renderTextWithLinks(line) {
    const regex = /\[\[LINK:(.*?)\|(.*?)\]\]/g;
    const parts = [];
    let lastIndex = 0;

    let match;
    while ((match = regex.exec(line)) !== null) {
      const [full, url, text] = match;

      parts.push(line.slice(lastIndex, match.index));

      parts.push(
        <a key={match.index} href={url} target="_blank" rel="noopener noreferrer" className="productLink">
          {text}
        </a>
      );

      lastIndex = match.index + full.length;
    }

    parts.push(line.slice(lastIndex));

    return <>{parts}</>;
  }

  function applyProductLink(llmResponse) {
    const productLinks = {
      FridgeMagnets: "https://raghavi-mohan.github.io/react-app/#/painting/Minis",
      Bookmarks: "https://raghavi-mohan.github.io/react-app/#/painting/StoryStems",
      Keychains: "https://raghavi-mohan.github.io/react-app/#/painting/Charms",
      Paintings: "https://raghavi-mohan.github.io/react-app/#/products",
      MiniCanvas: "https://raghavi-mohan.github.io/react-app/#/products",
      WallArt: "https://raghavi-mohan.github.io/react-app/#/products",
    };
    console.log(llmResponse);
    return llmResponse
      .split("\n")
      .map((line) => {
        if (line.startsWith("◆ Best Product Option")) {
          const option = line.split(":")[1].trim();
          const url = productLinks[option];
          console.log(line);

          if (url) {
            // Insert clean placeholder token
            return `${line} [[LINK:${url}| - View Product]]`;
          }
        }
        return line;
      })
      .join("\n");
  }

  function resetState() {
    setRoom("");
    setWallColor("");
    setOccasion("");
    setResult("");
    setDescription("");
    setLoading(false);
  }

  return (
    <>
      {/* Floating Button */}
      <button
        className="ai-floating-button"
        onClick={() => setOpen(true)}
      >
        🎨 Art Guide
      </button>

      {/* Sidebar Panel */}
      <div className={`ai-sidebar ${open ? "open" : ""}`}>
        <div className="ai-sidebar-header">
          <h3>Smart Art Guide - Coming Soon</h3>
          <button onClick={() => {
            resetState();
            setOpen(false);
          }} className="close-btn">✕</button>
        </div>

        <div className="ai-form">
          <label>Your art need</label>
          <input
            type="text"
            value={room}
            placeholder="Home Decor, Gifts, Art Collection..."
            onChange={(e) => setRoom(e.target.value)}
          />

          <label>Price Preference</label>
          <input
            type="text"
            value={wallColor}
            placeholder="From $4 to $400"
            onChange={(e) => setWallColor(e.target.value)}
          />

          <label>Occasion</label>
          <input
            type="text"
            value={occasion}
            placeholder="Housewarming, Return Gifts..."
            onChange={(e) => setOccasion(e.target.value)}
          />

          <label>Optional Description</label>
          <input
            type="text"
            value={description}
            placeholder="What’s the theme, mood, colors, or inspiration behind your idea (optional)"
            onChange={(e) => setDescription(e.target.value)}
          />

          <button
            className="submit-btn"
            onClick={generateRecommendation}
            disabled={loading}
          >
            {loading ? "Thinking..." : "Get Suggestions"}
          </button>

          {result && (
            <div className="ai-result">
              <h4>Recommendations :</h4>
              <div className="ai-scroll">
                <pre>{result
                  .split("\n")
                  .map((line, i) => (
                    <div className="ai-line" key={i}>{renderTextWithLinks(line)}</div>
                  ))}
                </pre>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}