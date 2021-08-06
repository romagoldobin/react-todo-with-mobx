import { makeAutoObservable } from 'mobx';

class ToDo {
  toDos = [
    {
      id: Date.now(),
      name: 'Посмотреть JS конференцию',
      isDone: false,
    },
  ]

  constructor() {
    makeAutoObservable(this);
  }

  get toDoList() {
    return this.toDos;
  }

  addToDo(toDo) {
    this.toDos.push(toDo);
  }

  deleteToDo(toDoId) {
    this.toDos = this.toDos.filter(({ id }) => toDoId !== id);
  }

  changeStatus(toDo) {
    // const findIdx = this.toDos.findIndex(({ id }) => id === toDo.id);
    // const changedItem = { ...toDo, isDone: !toDo.isDone };
    // this.toDos.splice(findIdx, 1, changedItem);

    this.toDos = this.toDos.map((item) => (
      item.id !== toDo.id ? item
        : { ...item, isDone: !item.isDone }
    ));
  }
}

export default new ToDo();
