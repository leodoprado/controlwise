import { z } from 'zod';

export const loginUserFormSchema = z.object({
    email: z.string()
        .nonempty('Digite seu e-mail cadastrado!')
        .email('Formato de e-mail inválido!'),
    password: z.string()
        .min(6, 'A senha precisa ter no mínimo 6 caracteres!')
})

export const registerUserFormSchema = z.object({
    email: z.string()
        .nonempty('Digite seu e-mail para realizar o cadastro!')
        .email('Formato de e-mail inválido!'),
    password: z.string()
        .min(6, 'A senha precisa ter no mínimo 6 caracteres!'),
    phone: z.string()
        .nonempty('Digite seu telefone para realizar o cadastro!')
        .min(11, 'Número de telefone inválido!')
        .max(11, 'Número de telefone inválido!')
})
