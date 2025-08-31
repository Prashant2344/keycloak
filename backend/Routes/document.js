import express from "express";

const router = express.Router();

let data = [
    {
        id: 1,
        title: "Document 1",
        description: "Document 1 description"
    },
    {
        id: 2,
        title: "Document 2",
        description: "Document 2 description"
    },
    
    {
        id: 3,
        title: "Document 3",
        description: "Document 3 description"
    },
    {
        id: 4,
        title: "Document 4",
        description: "Document 4 description"
    },
    {
        id: 5,
        title: "Document 5",
        description: "Document 5 description"
    }
];

const getDocuments = async (req, res) => {
    try {
        const documents = await data;
        res.json(documents);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

router.get("/", getDocuments);


export default router;