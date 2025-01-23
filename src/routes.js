import express from "express";
import AnnotationController from "./controllers/AnnotationController.js";
import PriorityController from "./controllers/PriorityController.js";
import ContentController from "./controllers/ContentController.js";

const routes = express.Router();

//Rotas Annotations
routes.get("/annotations", AnnotationController.read);
routes.post("/annotations", AnnotationController.createAnnotation);
routes.delete("/annotations/:id", AnnotationController.delete);

//Rotas Priorities
routes.get("/priorities", PriorityController.read);
routes.post("/priorities/:id", PriorityController.updatePriority);

//Rota Content
routes.post("/content/:id", ContentController.updateContent)

export default routes;