import {
  faClose,
  faCheckToSlot,
  faBars,
  faUser,
  faTag,
  faCheckSquare,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import { Component, Inject, OnInit } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { ToDo } from 'src/app/models/todo.model';

interface InputData {
  todo: ToDo;
}
interface OutputData {
  res: boolean;
}

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
})
export class TodoDialogComponent implements OnInit {
  icons = icons;
  todo: ToDo;

  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) public data: InputData
  ) {
    this.todo = data.todo;
  }

  ngOnInit(): void {}

  onClosed(res = false) {
    this.dialogRef.close({
      res,
    });
  }
}

const icons = {
  faClose,
  faCheckToSlot,
  faBars,
  faUser,
  faTag,
  faCheckSquare,
  faClock,
};
