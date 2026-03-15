import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'argument',
  imports: [NgClass],
  templateUrl: './argument.html',
  styleUrls: [
    './argument.css',
    '../../app.css'
  ]
})

export class Argument {
  id = input<number>(0); 
  title = input<string>(''); 
  iconClass = input<string>('');

  isSelected = input<boolean>(false);

  argumentClicked = output<number>();

  onArgumentClicked() {
    this.argumentClicked.emit(this.id());
  }
}
