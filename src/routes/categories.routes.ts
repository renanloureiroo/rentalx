import { Router } from "express";
import { v4 as uuid } from "uuid";

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post("/categories", (request, response) => {
  const { name, description } = request.body;

  const newCategory = {
    id: uuid(),
    name,
    description,
    created_at: new Date(),
  };

  categories.push(newCategory);

  return response.status(201).json(newCategory);
});

export { categoriesRoutes };
