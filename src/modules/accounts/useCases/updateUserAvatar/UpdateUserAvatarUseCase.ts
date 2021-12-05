import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

interface IRequest {
  user_id: string;
  avatar_file: string;
}

// Adicionar coluna Avatar na tabela users
// Refatorar usuário com coluna avatar
// Configuração upload multer
// Criar regra de negócio do upload
// Criar controller

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ user_id, avatar_file }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);
    user.avatar = avatar_file;

    await this.usersRepository.create(user);
  }
}

export { UpdateUserAvatarUseCase };
