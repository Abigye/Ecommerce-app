export type Product = {
  id: number;
  slug: string;
  name: string;
  image: ImageSet;
  category: string;
  categoryImage: ImageSet;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludeItem[];
  gallery: {
    first: ImageSet;
    second: ImageSet;
    third: ImageSet;
  };
  others: RelatedProduct[];
};

type ImageSet = {
  mobile: string;
  tablet: string;
  desktop: string;
};

type IncludeItem = {
  quantity: number;
  item: string;
};

type RelatedProduct = {
  slug: string;
  name: string;
  image: ImageSet;
};


export type CartItem = Product & { quantity: number };
  
export interface OrderSummary {
    subtotal: number;
    vat: number;
    shipping: number;
    total: number;
  }
  