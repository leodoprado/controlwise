import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { Usuario } from './db/models';
import { generateToken, comparePassword } from './auth';

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    // Verificar se o usuário já existe
    const existingUser = await Usuario.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'O usuário já existe' });
    }

    // Criptografar a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar um novo usuário
    const newUser = await Usuario.create({ name, email, password: hashedPassword });

    // Gerar token de autenticação
    const token = generateToken(newUser.USR_COD);

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Verificar se o usuário existe
    const user = await Usuario.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Usuário não encontrado' });
    }

    // Comparar as senhas
    const isMatch = await comparePassword(password, Usuario.USR_SENHA);
    if (!isMatch) {
      return res.status(401).json({ message: 'Senha incorreta' });
    }

    // Gerar token de autenticação
    const token = generateToken(user.USR_COD);

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
};
