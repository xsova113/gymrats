export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  description: string;
  flavor: { name: string };
  size: { name: string; value: string };
  isFeatured: boolean;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}
