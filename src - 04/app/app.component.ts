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
  title = 'twoButtons';

  public text: string = "Marvellous Infosystems"

  public toUpperCase(){
    this.text = this.text.toUpperCase();
  }

  public toLowerCase(){
    this.text = this.text.toLowerCase();
  }
}
