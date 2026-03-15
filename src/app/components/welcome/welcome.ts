import { Component, inject } from '@angular/core';
import { Argument } from '../argument/argument';
import { Forward } from '../forward/forward';
import { Service } from '../../services/service';

@Component({
  selector: 'app-welcome',
  imports: [Argument, Forward],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})

export class Welcome {
  service = inject(Service);

  setSelectedArgument(selectedArgument: number) {
    this.service.setSelectedArgument(selectedArgument);
  }
}