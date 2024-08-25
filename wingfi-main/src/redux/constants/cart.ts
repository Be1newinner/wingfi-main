export interface CartItem {
  sku: string;
  qty: number;
  img: string;
  price: number;
  category: number;
  [key: string]: any;
  title: string;
}

export interface CartData {
  items: CartItem[];
  total: number;
  subtotal: number;
  tax: number;
  delivery: number;
  qty: number;
  discount: number;
  paymentMethod: number;
}

export interface CartDataReducer extends CartData {
  loading: boolean;
  error: null | string;
}

export interface CartItemData {
  qty: number;
  sku: string;
  title: string;
  mrp: string;
  price: number;
}

export interface CartItemsState {
  [sku: string]: CartItemData;
}
