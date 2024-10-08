import Cors from "cors";

// Initialize the cors middleware
const cors = Cors({
    origin: "*", // Allow requests from this origin
    methods: ["GET", "POST"],        // Allowed methods
});

// Helper function to run middleware in Next.js
export default function runMiddleware(req, res) {
    return new Promise((resolve, reject) => {
        cors(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}