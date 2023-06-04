import { z } from 'zod';

export const validationSchema = z.object({
  nome: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres').max(20, 'O nome deve ter no máximo 20 caracteres').nonempty('O nome é obrigatório'),
  email: z.string().email('Insira um endereço de e-mail válido').nonempty('O e-mail é obrigatório'),
  // Adicione outras validações para os campos do seu formulário
});
