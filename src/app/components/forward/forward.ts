import { Component, inject, input, output } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../../services/service';

@Component({
  selector: 'forward',
  imports: [],
  templateUrl: './forward.html',
  styleUrl: './forward.css',
})

export class Forward {
  service = inject(Service);

  nextRoute = input.required<string>();
  forwardClicked = output<void>();

  text: string = "Avanti";

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.nextRoute() == "/") {
      this.text = "Ricomincia quiz";
    }
  }

  goForward() {
    if (this.nextRoute() == "/") {
      this.service.resetQuiz();
    }

    this.router.navigate([this.nextRoute()]);
    this.forwardClicked.emit();
  }
}
