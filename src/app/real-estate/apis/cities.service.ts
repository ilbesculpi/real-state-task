/* Do not modify this file */

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { City } from '../models';
import { CITIES } from './cities.data';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  constructor() {}

  getCities(): Observable<City[]> {
    return of(CITIES);
  }
}
