import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReverseStringPipe } from './reverse-string.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReverseStringPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'revString';

  name = 'Marvellous';
}
