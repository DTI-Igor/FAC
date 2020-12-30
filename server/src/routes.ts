import express from "express";
import CalledController from "./controllers/CalledController";
import CategoriesController from "./controllers/CategoriesController";

const routes = express.Router();
const calledControllers = new CalledController();
const categoriesControllers = new CategoriesController();

routes.get('/lists_calleds', calledControllers.index);
routes.get('/lists_categories', categoriesControllers.index);

routes.post('/created_calleds', calledControllers.create);
routes.post('/created_categories', categoriesControllers.create);

export default routes;