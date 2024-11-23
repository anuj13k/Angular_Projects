import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() dataEmitter = new EventEmitter<string>();

  sendData(value: string) {
    this.dataEmitter.emit(value);
  }
}
