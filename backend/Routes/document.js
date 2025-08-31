import express from "express";

const router = express.Router();

let data = [
    {
        id: 1,
        title: "Document 1",
        description: "Document 1 description",
        email: "prashant@3bird.nl"
    },
    {
        id: 2,
        title: "Document 2",
        description: "Document 2 description",
        email: "silpakarprashant@gmail.com"
    }
];

const getDocuments = async (req, res) => {
    try {
        const email = req.user;
        console.log(email);
        const documents = await data.filter(document => document.email === email);
        res.json(documents);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

router.get("/", getDocuments);


export default router;