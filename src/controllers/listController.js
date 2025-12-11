import listModel from "../models/listModel.js";

export const listController = {
  //GET /
  index(req, res) {
    res.render("index");
  },

  //GET /app/
  app(req, res) {
    const list = listModel.getAllLists();
    res.render("app", { list });
  },

  //GET /createList/
  createList(req, res) {
    res.render("newListForm");
  },

  //POST /createList
  save(req, res) {
    const { description } = req.body;
    const newList = listModel.create(description);
    listModel.save(newList);

    res.redirect("/app");
  },

  //GET /app/:id
  edit(req, res) {
    const id = req.params.id;

    const list = listModel.getListById(id);

    res.render("editListForm", { list });
  },

  //POST /app/:id
  addTask(req, res) {
    const id = req.params.id;
    const { description } = req.body;

    if (!description) {
      throw new Error("Description is required");
    }

    listModel.addTask(id, description);

    res.redirect(`/app/${id}`);
  },

  //POST /app/:id/confirm/:itemId
  completeTask(req, res) {
    const { id, itemId } = req.params;
    listModel.completeTask(id, itemId);
    res.redirect(`/app/${id}`);
  },

  //POST /app/:id/undo/:itemId
  undoTask(req, res) {
    const { id, itemId } = req.params;
    listModel.undoTask(id, itemId);
    res.redirect(`/app/${id}`);
  },

  //POST delete/list/:id
  delete(req, res) {
    const id = req.params.id;
    listModel.deleteListById(id);
    res.redirect("/app");
  },
};
