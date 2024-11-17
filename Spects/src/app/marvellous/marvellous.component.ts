import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [FormsModule],
  template: `
  <h1>Inline Method</h1>
  <input [(ngModel)] = "Message" type = "text" />
  <h2 [style.color] = "'Blue'">{{Message}}</h2> 
    
  `,
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent 
{
  Message: string = "";

}
