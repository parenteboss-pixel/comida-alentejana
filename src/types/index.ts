export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface CustomerData {
  name: string;
  address: string;
  phone: string;
  paymentMethod: 'mbway' | 'multibanco' | 'dinheiro' | 'cartao';
  observations: string;
}
