import { Component, Input } from '@angular/core';
import { House } from '../models';

// TODO(5pts): render house

@Component({
  selector: 'app-house-card',
  template: `<div class="card">
    <img class="card-img-top" [src]="house.image" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{{ house.title }}</h5>
      <div class="price">Price: {{ '$' + house.price }}</div>
      <div *ngIf="house.onSale">On Sale!</div>
      <p class="card-text">{{ house.description }}</p>
    </div>
  </div>`,
  styles: []
})
export class HouseCardComponent {
  @Input() house: House;
}
