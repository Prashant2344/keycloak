import express from "express";
import dotenv from "dotenv";
import documentRoutes from "./Routes/document.js";
import authenticate from "./Routes/authenticate.js";
(async function(){
    dotenv.config();

    const {PORT} = process.env;

    const app = express();

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

    app.use("/documents", authenticate, documentRoutes);
})();