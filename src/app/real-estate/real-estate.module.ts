import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HouseCardComponent } from './components/house-card.component';
import { HousesFiltersComponent } from './components/houses-filters.component';
import { HousesListComponent } from './components/houses-list.component';
import { HouseDetailsComponent } from './containers/house-details.component';
import { HouseListingsComponent } from './containers/house-listings.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: HouseListingsComponent },
      { path: ':id', component: HouseDetailsComponent }
    ])
  ],
  declarations: [
    HousesListComponent,
    HouseDetailsComponent,
    HousesFiltersComponent,
    HouseListingsComponent,
    HouseCardComponent
  ]
})
export class RealEstateModule {}
