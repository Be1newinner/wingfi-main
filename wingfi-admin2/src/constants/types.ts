export interface Product {
  title: string;
  price: number;
  mrp: number;
  slug: string;
  image: string;
  rating: number;
  sku: string;
  special: number;
}

export enum productType {
  "product",
  "bundle",
  "subscription",
}
