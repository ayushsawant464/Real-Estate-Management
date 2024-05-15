// authMiddleware.js
const admin = require('firebase-admin');
require('dotenv').config();

const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const verifyToken = (req, res, next) => {
  const token = req.cookies.jwtToken;

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  admin.auth().verifyIdToken(token)
    .then(decodedToken => {
      // Token is valid, attach user information to the request object
      req.user = decodedToken;
      next();
    })
    .catch(error => {
      return res.status(403).json({ message: 'Invalid token' });
    });
};

module.exports = verifyToken;
