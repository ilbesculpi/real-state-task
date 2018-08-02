import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { House } from '../models';
import { HouseCardComponent } from './house-card.component';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from '../mocks/activated-route';
import { HousesService } from '../apis/houses.service';
import { of } from 'rxjs';

describe('HouseCardComponent', () => {

  let component: HouseCardComponent;
  let fixture: ComponentFixture<HouseCardComponent>;
  let activeRoute: ActivatedRouteStub;
  const housesService = jasmine.createSpyObj('HousesService', ['getHouse']);
  const expectedHouse: House = {
    id: 1,
    cityId: 1,
    price: 1000,
    onSale: false,
    title: 'My House',
    description: 'Lorem Ipsm',
    image: 'image.jpg'
  };
  let getHouseSpy = housesService.getHouse.and.returnValue( of(expectedHouse) );

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HouseCardComponent],
      imports: [],
      providers: [
        { provide: HousesService, useValue: housesService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    activeRoute = new ActivatedRouteStub();
    activeRoute.setParamMap({ id: 1 });
    fixture = TestBed.createComponent(HouseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO(1pts)
  it('should render house title', () => {
    const cardElement: HTMLElement = fixture.nativeElement;
    const title: HTMLElement | null = cardElement.querySelector('.card-title');
    expect(title!.textContent).toEqual('House 1');
  });

  // TODO(1pts)
  it('should render card desription', () => {
    const cardElement: HTMLElement = fixture.nativeElement;
    const content: HTMLElement | null = cardElement.querySelector('.card-text');
    expect(content!.textContent!.trim()).toEqual(`Do nostrud cupidatat dolore eiusmod cillum nisi ut id velit. Culpa amet culpa do anim adipisicing et do exercitation magna irure ipsum incididunt veniam. Occaecat id cillum proident qui in voluptate. Amet sunt elit non labore exercitation. Esse enim esse minim duis in enim magna id elit nulla tempor.`);
  });

  // TODO(1pts)
  it('should render card image', () => {});

  // TODO(1pts)
  it('should render house price', () => {});

  // TODO(1pts)
  it('should render house onSale if house is on sale', () => {});

  // TODO(1pts)
  it('should NOT render house onSale if house is not on sale', () => {});
});
