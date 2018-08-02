import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HousesService } from '../apis/houses.service';
import { House } from '../models';

@Component({
  selector: 'app-house-details',
  template: `
  <app-house-card [house]="house$ | async" data-test-house-card></app-house-card>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class HouseDetailsComponent implements OnInit {

  house$: Observable<House>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private houseAPI: HousesService
  ) {}

  ngOnInit() {
    /* TODO(3pts)
      Goal: fetch house based on the activated route's :id
    */
   const houseId: number = parseInt(this.activatedRoute.snapshot.paramMap.get('id') || "0");
   this.house$ = this.houseAPI.getHouse(houseId);
  }
}
