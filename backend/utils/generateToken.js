import jwt from 'jsonwebtoken'; // import JWT

// generate access token (short-lived)
export const generateAccessToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email }, // payload
    process.env.JWT_ACCESS_SECRET, // secret
    { expiresIn: '15m' } // expires in 15 minutes
  );
};

// generate refresh token (long-lived)
export const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user._id }, // minimal payload
    process.env.JWT_REFRESH_SECRET, // secret
    { expiresIn: '7d' } // expires in 7 days
  );
};

export { generateAccessToken, generateRefreshToken };