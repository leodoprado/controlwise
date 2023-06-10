import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Usuario } from './db/models';

const JWT_SECRET = 'seu_secreto'; // Troque por uma chave segura em produção

export const generateToken = (userId: number) => {
  const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
  return token;
};

export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    throw new Error('Token inválido');
  }
};

export const comparePassword = async (password: string, hashedPassword: string) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};
