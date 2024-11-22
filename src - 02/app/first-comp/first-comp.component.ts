import { Component } from '@angular/core';


@Component({
  selector: 'app-first-comp',
  standalone: true,
  imports: [],
  templateUrl: './first-comp.component.html',
  styleUrl: './first-comp.component.css'
})
export class FirstCompComponent {

  text: string = "Educating for Better Tommarow"

  public fun(){
    this.text = this.text === "Educating for Better Tommarow" ? "Marvelous Infosystems" : "Educating for Better Tommarow";
  }

}
