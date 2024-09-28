// import { auth } from "./firebaseInit"; // Make sure this file is correctly configured to initialize Firebase

// Middleware function
async function authMiddleware(req, res, next) {
  try {
    // Check API key
    const apiKey = req.headers["x-api-key"];
    if (apiKey !== process.env.SEC_KE) {
      return res.status(403).json({ error: "Forbidden: Invalid API key" });
    }

    // // Check token
    // const token = req.headers["authorization"]?.split("Bearer ")[1];
    // if (!token) {
    //   return res.status(401).json({ error: "Unauthorized: No token provided" });
    // }

    // // Verify token
    // const decodedToken = await auth.verifyIdToken(token);

    // console.log(decodedToken);

    // // Check authorization
    // if (!decodedToken.admin) {
    //   return res
    //     .status(403)
    //     .json({ error: "Forbidden: Insufficient permissions" });
    // }

    // // Attach decoded token to request object
    // req.user = decodedToken;

    // Call next middleware or route handler
    next();
  } catch (error) {
    console.error("Authorization error:", error);
    if (error.message.includes("Unauthorized")) {
      return res.status(401).json({ error: "Unauthorized: Invalid token" });
    } else if (error.message.includes("Forbidden")) {
      return res.status(403).json({ error: "Forbidden: Access denied" });
    } else {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = authMiddleware;
