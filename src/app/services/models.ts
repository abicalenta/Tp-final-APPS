export interface Restaurant {
  id: number;
  name: string;
  slug: string; // Para el opcional de URL amigable
}

// src/app/models/product.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  isFeatured: boolean;
  discount: number; // Porcentaje de descuento (0 a 100)
  isHappyHour: boolean; // Happy Hour habilitado
  restaurantId: number;
}

// src/app/models/user.ts
export interface User {
  id: number;
  email: string;
  token: string; // Token simulado para sesión
  role: 'owner' | 'guest';
}