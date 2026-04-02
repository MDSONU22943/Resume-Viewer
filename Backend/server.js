import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs";
import pdfParse from "pdf-parse";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });

// ✅ Groq via OpenAI SDK
const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

app.post("/review", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const filePath = req.file.path;

    // 📄 Extract text from PDF
    const dataBuffer = fs.readFileSync(filePath);
    const pdfData = await pdfParse(dataBuffer);
    const resumeText = pdfData.text;

    // 🧠 Prompt
    const prompt = `
You are an expert resume reviewer.

Analyze the resume and return output in this JSON format:

{
  "strengths": [],
  "weaknesses": [],
  "suggestions": [],
  "ats_score": "",
  "improved_summary": ""
}

Resume:
${resumeText}
`;

    // 🤖 AI call
    const response = await client.responses.create({
      model: "openai/gpt-oss-20b",
      input: prompt,
    });

     
    let text = response.output_text;

// 🔥 remove markdown
text = text
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

// 🔥 extract JSON
const start = text.indexOf("{");
const end = text.lastIndexOf("}");

let parsed = {};

try {
  if (start !== -1 && end !== -1) {
    const cleanJson = text.substring(start, end + 1);
    parsed = JSON.parse(cleanJson);
  } else {
    throw new Error("Invalid JSON format");
  }
} catch (err) {
  console.error("Parsing error:", err);
  parsed = {};
}

// ✅ send OBJECT not string
res.json({
  feedback: parsed,
});

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});