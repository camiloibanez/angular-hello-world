import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styles: [
    `
    .bi {
      color: green;
    }

    .bi-star {
      background: black;
    }
    `
  ],
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent {
  @Input('isFavorite') isSelected: boolean;

  @Output('change') click = new EventEmitter();

  constructor() { 
    this.isSelected = false;
  }

  favorite() {
    this.isSelected = !this.isSelected;
    this.click.emit( { newValue: this.isSelected } );
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}