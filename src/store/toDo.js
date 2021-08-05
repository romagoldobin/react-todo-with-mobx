import { makeAutoObservable } from 'mobx';

class ToDo {
  toDos = [
    {
      id: Date.now(),
      name: 'Посмотреть JS конференцию',
      done: false,
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
}

export default new ToDo();
