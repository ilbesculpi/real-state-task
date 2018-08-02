/* Do not modify this file */

import { Injectable } from '@angular/core';
import * as R from 'ramda';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { House, HouseFilters } from '../models';
import { HOUSES } from './houses.data';

@Injectable({
  providedIn: 'root'
})
export class HousesService {
  getHouses({
    cityId,
    onSale,
    priceLessThan
  }: HouseFilters): Observable<House[]> {
    const where: { [key in keyof Partial<House>]: Function } = {};

    if (typeof cityId !== 'undefined') {
      where.cityId = R.equals(cityId);
    }

    if (typeof onSale !== 'undefined') {
      where.onSale = R.equals(onSale);
    }

    if (typeof priceLessThan !== 'undefined') {
      where.price = R.gt(priceLessThan);
    }

    const houses = R.filter(R.where(where))(HOUSES) as House[];

    return of(houses);
  }

  getHouse(id: number): Observable<House> {
    return of(HOUSES).pipe(
      map(R.find((house: House) => id === house.id))
    ) as Observable<House>;
  }
}
