import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { City, HouseFilters } from '../models';

/* TODO(5pts): create form controls */
/* TODO(5pts): render form */

@Component({
    selector: 'app-houses-filters',
    template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()" class="mb-3">
      <div class="form-row">
        <div class="col-md-4 mb-3">
          <label for="cityId">City</label>
          <select class="form-control" formControlName="cityId">
            <option value=""></option>
            <option *ngFor="let city of cities" [value]="city.id">{{ city.name }}</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-4 mb-3">
          <label for="priceLessThan">Price less than</label>
          <input type="number" formControlName="priceLessThan" class="form-control" />
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-4 mb-3">
          <div class="form-check">
            <input class="form-check-input" type="radio" formControlName="onSale" value="All" checked>
            <label class="form-check-label">All</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" formControlName="onSale" value="Yes">
            <label class="form-check-label">Yes</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" formControlName="onSale" value="No">
            <label class="form-check-label">No</label>
          </div>
        </div>
      </div>
      <button class="btn-primary">Search</button>
    </form>
  `
})
export class HousesFiltersComponent {

    @Output()
    filtersChange = new EventEmitter<HouseFilters>();

    @Input()
    set filters(v: HouseFilters) {
        this.form.patchValue(v || {});
    }

    @Input()
    cities: City[];

    form: FormGroup = new FormGroup({
        cityId: new FormControl(''),
        priceLessThan: new FormControl(''),
        onSale: new FormControl('')
    });

    onSubmit() {
        const filters = this.clean(this.form.value);
        this.filtersChange.emit(filters);
    }

    private clean(obj: any): any {
        for (var propName in obj) {
            if (obj[propName] === null || obj[propName] === undefined || String(obj[propName]).trim() === '') {
                delete obj[propName];
            }
        }
        return obj;
    }

}
