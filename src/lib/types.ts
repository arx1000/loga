export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  material: string;
  style: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  dimensions: string;
  image: string;
  images: string[];
  rating: number;
  inStock: boolean;
  isNew?: boolean;
  isSale?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}
