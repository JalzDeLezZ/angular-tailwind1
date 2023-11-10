import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { ToDo, Column } from 'src/app/models/todo.model';
import { Dialog } from '@angular/cdk/dialog';
import { TodoDialogComponent } from '../../components/todo-dialog/todo-dialog.component';

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
  colums: Column[] = api_columns;

  constructor(public dialog: Dialog) {}

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

  addColumn() {
    this.colums.push({
      title: 'New Column',
      todos: [],
    });
  }

  dropHorizontal(event: CdkDragDrop<Column[]>) {
    moveItemInArray(this.colums, event.previousIndex, event.currentIndex);
  }

  openDialog(todo: ToDo) {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      maxWidth: '50%',
      minWidth: '300px',
      autoFocus: false,
      data: {
        todo,
      },
    });

    dialogRef.closed.subscribe((result) => {
      console.log(result);
    });
  }
}

/* -------------------------------------------------------------------- */
/* -------------------------------------------------------------------- */
/* -------------------------------------------------------------------- */

const api_columns = [
  {
    title: 'To Do',
    todos: [
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
    ],
  },
  {
    title: 'Doing',
    todos: [
      {
        id: '1',
        title: 'Make dishes',
      },
      {
        id: '2',
        title: 'Buy a unicorn',
      },
    ],
  },
  {
    title: 'Done',
    todos: [
      {
        id: '1',
        title: 'Make dishes',
      },
    ],
  },
];
