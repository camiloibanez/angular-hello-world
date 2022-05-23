import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input() isActive: boolean;

  @Input() likesCount: number;

  constructor() { 
    this.isActive = false;
    this.likesCount = 0;
   }

  toLike() {
    this.isActive = !this.isActive;
    if(this.isActive) {
      this.likesCount++;
    }
    else {
      this.likesCount--;
    }
  }
}
