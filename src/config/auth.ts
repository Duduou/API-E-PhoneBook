import dotenv from 'dotenv';
dotenv.config();

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET não foi definida em .env');
}

export const authConfig = {
  secret: process.env.JWT_SECRET,
  //expiresIn: "1d"
};
