import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nonNG';

    stringLength: number = 0;
  
    updateLength(event: any) {
      this.stringLength = event.target.value.length;
    }
  
}
