import { Component } from '@angular/core';
import { Task } from './app.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ArryaFunctions';

  tasks: Task[] = [
    new Task(1, 'Task 1', true),
    new Task(2, 'Task 2', false),
    new Task(3, 'Task 3', true),
    new Task(4, 'Task 4', false),
    new Task(5, 'Task 5', true)
  ];

  filteredTasks: Task[] = this.tasks.filter(task => task.name.includes('Task'));

  completedTasks: Task[] = this.tasks.filter(task => task.completed);

  taskNames: string[] = this.tasks.map(task => task.name);

  taskCount: number = this.tasks.reduce((count, task) => count + 1, 0);

  taskNamesConcatenated: string = this.tasks.reduce((concatenated, task) => concatenated + task.name + ', ', '');

  taskWithId3: Task | undefined = this.tasks.find(task => task.id === 3);

  areAllTasksCompleted: boolean = this.tasks.every(task => task.completed);

  hasIncompleteTask: boolean = this.tasks.some(task => !task.completed);
}
