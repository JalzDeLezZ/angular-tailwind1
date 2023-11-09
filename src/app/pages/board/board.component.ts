import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { ToDo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
      /* Animate items as they're being sorted. */
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped. */
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class BoardComponent {
  todos: ToDo[] = [
    {
      id: '1',
      title: 'Make dishes',
    },
    {
      id: '2',
      title: 'Buy a unicorn',
    },
    {
      id: '2',
      title: 'Watch Angular Path in Platzi',
    },
  ];

  doing: ToDo[] = [
    {
      id: '1',
      title: 'Make dishes',
    },
    {
      id: '2',
      title: 'Buy a unicorn',
    },
  ];

  done: ToDo[] = [
    {
      id: '1',
      title: 'Make dishes',
    },
  ];

  drop(event: CdkDragDrop<ToDo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      ); // move item in array
    } else {
      transferArrayItem(
        event.previousContainer.data, // array from where to move
        event.container.data, // array to where to move
        event.previousIndex, // index from where to move
        event.currentIndex // index to where to move
      );
    }
  }
}
