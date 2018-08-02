import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HousesListComponent } from './houses-list.component';

describe('HousesListComponent', () => {
  let component: HousesListComponent;
  let fixture: ComponentFixture<HousesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HousesListComponent],
      imports: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO(3pts)
  it('should render list of houses', () => {});
});
