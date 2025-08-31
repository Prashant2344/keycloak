import jwtmod from "jsonwebtoken";

export default async (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    const token = bearerHeader && bearerHeader.split(" ")[1];
    if(token == null) return res.status(401).json({ message: "Unauthorized" });
    const public_key = `-----BEGIN PUBLIC KEY-----\n${process.env.JWT_PUBLIC_KEY}\n-----END PUBLIC KEY-----`;

    const decodedToken = jwtmod.verify(token, public_key,
        { algorithms: ["RS256"]
    });
    
    const {email} = decodedToken;
    req.user = email;
    next();
}