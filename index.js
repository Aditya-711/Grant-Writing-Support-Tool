import bodyParser from "body-parser";
import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ejs from "ejs";
import dotenv from "dotenv";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));
dotenv.config();
console.log(process.env);
const api = process.env.API_KEY;
const genAI = new GoogleGenerativeAI(api);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.get("/",(req,res)=>{
    res.render("home.ejs");
})
app.get("/draftEditor",(req,res)=>{
    res.render("DraftEditor.ejs",{resp:"res"});
})
app.get("/resources",(req,res)=>{
    res.render("Resources.ejs");
})
app.listen(port,()=>{
    console.log("Started server at 3000");
})
app.post("/analyse",async (req,res)=>{
    const { text } = req.body;
    console.log(text);
    const result = await geminiAnalyse(text);
    console.log(result);
    res.json({res: result});
})

app.post("/suggest", async(req,res)=>{
    const { text } = req.body;
    const result = await model.generateContent(text);
    res.json({res: result.response.text()});
})
async function geminiAnalyse(text) {
    const prompt = "Specify whether the following contains any grammatical or tone errors in not: " + text;
    const result = await model.generateContent(prompt);
    return result.response.text();
}