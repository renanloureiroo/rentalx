import { Router } from 'express';

import { SpecificationRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationRepository();

specificationsRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  try {
    const createSpecificationService = new CreateSpecificationService(
      specificationsRepository
    );

    createSpecificationService.execute({ name, description });

    return response.status(201).send();
  } catch (err) {
    return response.status(400).json({
      error: err.message,
    });
  }
});

export { specificationsRoutes };
