import express from "express";
import CalledController from "./controllers/CalledController";
import CategoriesController from "./controllers/CategoriesController";
import SetorController from "./controllers/SetorController";
import ManifestController from "./controllers/ManifestController";

const routes = express.Router();
const calledControllers = new CalledController();
const categoriesControllers = new CategoriesController();
const setorControllers = new SetorController();
const manifestsControlers = new ManifestController();

routes.get('/lists_calleds', calledControllers.index);
routes.get('/lists_categories', categoriesControllers.index);
routes.get('/lists_setores', setorControllers.index);
routes.get('/lists_manifests', manifestsControlers.index);

routes.post('/created_calleds', calledControllers.create);
routes.post('/created_categories', categoriesControllers.create);

routes.put('/edit_calleds', calledControllers.edit)

export default routes;