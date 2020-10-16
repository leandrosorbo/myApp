import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public tasks;

  public newTask = '';

  constructor(private todoService: TodoService) { }

  ngOnInit() {
          this.tasks = this.todoService.allTasks();  
  }

  public addToList() {
    this.todoService.addTask(this.newTask);
    this.newTask = '';
  }

  public triggerUpdateStorage() {
    this.todoService.updateStorage();
  }

}