import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  @Input()
  public counter: number = 1;
  @Output()
  counterChange = new EventEmitter<number>();

  increaseBy(value: number):void {
    if(value === -1 && this.counter === 1){
      this.counter = 1
      this.counterChange.emit(this.counter)
    }else {
      this.counter += value
      this.counterChange.emit(this.counter)
    };
  }
}
