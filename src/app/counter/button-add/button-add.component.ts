import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
})
export class ButtonAddComponent {
  @Input()
  counter: number = 0;

  @Output()
  onAdd: EventEmitter<number> = new EventEmitter();

  add = () => {
    this.onAdd.emit(++this.counter);
  };
}
