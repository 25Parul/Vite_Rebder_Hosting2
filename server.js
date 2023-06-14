import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const port = 3025;
const app =express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "/dist")));

app.listen(port, ()=>{
    console.log("listening on port", port)
});
