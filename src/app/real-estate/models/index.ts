export interface City {
  id: number;
  name: string;
}

export interface House {
  id: number;
  cityId: number;
  price: number;
  onSale: boolean;
  title: string;
  description: string;
  image: string;
}

export interface HouseFilters {
  cityId?: number;
  priceLessThan?: number;
  onSale?: boolean;
}
