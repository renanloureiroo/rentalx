import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AuthenticateUseUseCase } from './AuthenticateUserUseCase';

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;
    const authenticateUserUseCase = container.resolve(AuthenticateUseUseCase);

    try {
      const authenticated = await authenticateUserUseCase.execute({
        email,
        password,
      });

      return response.json(authenticated);
    } catch (err) {
      return response.status(401).json({
        error: err.message,
      });
    }
  }
}

export { AuthenticateUserController };
