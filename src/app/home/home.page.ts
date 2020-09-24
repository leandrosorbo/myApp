import { Component } from '@angular/core';

type Task = {
  name: string;
  completed: boolean;
};

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public tasks: Task[] =[
    { name: "Learn Ionic", completed: false },
    { name: "Buy Milk", completed: true },
  ];
  public filteredTasks = this.tasks.slice();
  public newTaskName = "";
  public percent = 0;
  public selectedSegment: "all" | "complete" | "incomplete" = "all";

  public addTask(){
    this.tasks.push({
      name: this.newTaskName,
      completed: false
    });
    this.newTaskName = "";
    this.calculatePercent();
  };

    public remove(toRemove: Task){
    this.tasks = this.tasks.filter(function (task) {
      return task.name !== toRemove.name;
    });
    this.segmentChanged();
    this.calculatePercent();
    }
  
    public calculatePercent(){
      const completedTasks = this.tasks.filter(function(task){
        return task.completed;
      });
      this.percent = completedTasks.length / this.tasks.length;
    }

       public segmentChanged(){
         if(this.selectedSegment === "all"){
           this.filteredTasks = this.tasks.slice();
         } else if (this.selectedSegment === "complete"){
           this.filteredTasks = this.tasks.filter(function (task){
             return task.completed;
           });
         } else {
           this.filteredTasks = this.tasks.filter(function (task) {
             return !task.completed;
           });
         }      
    }


  constructor() {
    this.calculatePercent();
  }

}
