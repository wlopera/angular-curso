import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-decrease',
  templateUrl: './button-decrease.component.html',
  styleUrls: ['./button-decrease.component.css'],
})
export class ButtonDecreaseComponent {
  @Input()
  counter: number = 0;

  @Output()
  onDecrease: EventEmitter<number> = new EventEmitter();

  decrease = () => {
    this.onDecrease.emit(--this.counter);
  };
}
