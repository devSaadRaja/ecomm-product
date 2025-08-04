export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Address {
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface PaymentDetails {
  cardLast4?: string;
  cardBrand?: string;
  expiryDate?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  status: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  shippingAddress: Address;
  paymentMethod: string;
  paymentDetails: PaymentDetails;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  isNew?: boolean;
  specifications?: {
    [key: string]: string;
  };
}

export interface WishlistItem extends Product {
  dateAdded: string;
}
