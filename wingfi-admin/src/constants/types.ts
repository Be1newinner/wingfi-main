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

export const STATUS = {
  PENDING: "PENDING", // 0
  ACCEPTED: "ACCEPTED", // 1
  OUT_FOR_DELIVERY: "OUT_FOR_DELIVERY", //2
  DELIVERED: "DELIVERED", // 3
  FAILED: "FAILED", // 9
};
