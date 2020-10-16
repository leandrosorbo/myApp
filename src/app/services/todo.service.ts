import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'

interface Task {
  name: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private tasks: Task[] = [];

  constructor(private storage: Storage) {
    this.fetchFromStorage();
   }

   private async fetchFromStorage() {
     const storedTasks = await this.storage.get('tasks');
     this.tasks.push(... storedTasks);
   }

   public async updateStorage() {
     this.storage.set('tasks', this.tasks);
   }

  public allTasks() {
    return this.tasks;
  }

  public addTask(name: string){
    this.tasks.push({
      completed: false,
      name,
    });
    this.updateStorage();
  }
}
