import { Component, inject } from '@angular/core';
import { Forward } from "../forward/forward";
import { Service } from '../../services/service';

@Component({
  selector: 'app-rules',
  imports: [Forward],
  templateUrl: './rules.html',
  styleUrl: './rules.css',
})

export class Rules {
  service = inject(Service);

  getArgumentTitle() {
    return this.service.getCurrentArgument().title;
  }
}
