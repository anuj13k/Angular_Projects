import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() messageFromParent: string = '';
  @Output() messageToParent = new EventEmitter<string>();

  sendMessage() {
    this.messageToParent.emit('Hello from Child');
  }

}
