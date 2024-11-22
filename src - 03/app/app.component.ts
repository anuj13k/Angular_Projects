import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CompFirstComponent } from './comp-first/comp-first.component';
import { CompSecondComponent } from './comp-second/comp-second.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CompFirstComponent, CompSecondComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Marvellous';
}
