import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  // Generate JWT token
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  // Set token in cookie with production-ready settings
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Use secure cookies in production
    sameSite: process.env.NODE_ENV === "production" ? "none" : "strict", // Allow cross-site in production
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    domain: process.env.NODE_ENV === "production" ? undefined : "localhost", // Let browser handle domain in production
  });

  return token; // Also return token for potential header usage
};

export default generateToken;
