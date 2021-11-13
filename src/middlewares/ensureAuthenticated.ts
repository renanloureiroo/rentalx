import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayload {
  sub: string;
}

export const ensureAuthenticated = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('Token missing');
  }
  const [, token] = authHeader.split(' ');
  try {
    const { sub: user_id } = verify(token, process.env.SECRET_KEY) as IPayload;

    const userRepository = new UsersRepository();

    const user = await userRepository.findById(user_id);

    if (!user) {
      throw new Error('User does not exists!');
    }

    return next();
  } catch (err) {
    return response.status(401).end();
  }
};
