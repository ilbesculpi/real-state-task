import { Component, Input } from '@angular/core';
import {Router} from '@angular/router';
import { House } from '../models';


/* TODO(5pts): render houses list */
@Component({
  selector: 'app-houses-list',
  template: `<div class="mt-3">
    <table class="table" *ngIf="houses.length > 0">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Price</th>
          <th>OnSale</th>
      </thead>
      <tbody>
        <tr *ngFor="let house of houses" (click)="onSelectHouse(house)">
          <td>{{ house.id }}</td>
          <td>{{ house.title }}</td>
          <td>{{ house.price }}</td>
          <td>{{ house.onSale }}</td>
        </tr>
      </tbody>
    </table>
  </div>`,
  styles: []
})
export class HousesListComponent {

  @Input() houses: House[];

  constructor(private router: Router) {

  }

  onSelectHouse(house: House) {
    this.router.navigate(['real-estate', house.id]);
  }

}
