import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { HousesFiltersComponent } from './houses-filters.component';

describe('HousesFiltersComponent', () => {
  let component: HousesFiltersComponent;
  let fixture: ComponentFixture<HousesFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HousesFiltersComponent],
      imports: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create filters form', () => {
    expect(component.form instanceof FormGroup).toBe(true);
  });

  // TODO(1pts)
  it('form should have cityId control', () => {});

  // TODO(1pts)
  it('should render cityId control', () => {});

  // TODO(1pts)
  it('form should have priceLessThan control', () => {});

  // TODO(1pts)
  it('should render priceLessThan control', () => {});

  // TODO(1pts)
  it('form should have onSale control', () => {});

  // TODO(1pts)
  it('should render onSale control', () => {});
});
