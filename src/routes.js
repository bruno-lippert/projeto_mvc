const express = require("express");
const { listController } = require("./controllers/listController");

const router = express.Router();

router.get("/", listController.index);
router.get("/app", listController.app);
router.post("/create", listController.save);
router.get("/app/nova-lista", listController.createList);
router.get("/app/:id", listController.edit);
router.post("/app/:id/nova-tarefa", listController.addTask);
router.post("/app/:id/confirm/:itemId", listController.completeTask);
router.post("/app/:id/undo/:itemId", listController.undoTask);
router.post("/delete/list/:id", listController.delete);

module.exports = router;
