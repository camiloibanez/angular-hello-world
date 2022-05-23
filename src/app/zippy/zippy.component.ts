import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  @Input() title: string;
  isOpen: boolean;

  constructor() { 
    this.title = "";
    this.isOpen = false;
  }

  onClick() {
    this.isOpen = !this.isOpen;
  }
}
