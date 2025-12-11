let list = [
  {
    id: "1",
    description: "Lista 1",
    listItems: [
      {
        id: "1",
        description: "Item Lista 1",
        confirmed: true,
      },
    ],
  },
];

const listModel = {
  getAllLists() {
    return list;
  },

  create(description) {
    return {
      id: Date.now().toString(),
      description,
      listItems: [],
    };
  },

  save(item) {
    list.push(item);
  },

  getListById(id) {
    return list.find((item) => item.id === id);
  },

  addTask(id, description) {
    const newTask = {
      id: Date.now().toString(),
      description,
      confirmed: false,
    };
    this.getListById(id).listItems.push(newTask);
  },

  completeTask(idList, idItemList) {
    const taskList = this.getListById(idList);
    if (!taskList) return;

    const task = taskList.listItems.find((item) => item.id === idItemList);
    if (!task) return;

    task.confirmed = true;
  },

  undoTask(idList, idItemList) {
    const taskList = this.getListById(idList);
    if (!taskList) return;

    const task = taskList.listItems.find((item) => item.id === idItemList);
    if (!task) return;

    task.confirmed = false;
  },

  deleteListById(id) {
    const listIndex = list.findIndex((item) => item.id === id);
    list.splice(listIndex, 1);
  },
};

export default listModel;
