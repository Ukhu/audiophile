interface IPart {
  item: string;
  quantity: number;
}

export interface IProduct {
  name: string;
  slug: string;
  category: string;
  description: string;
  features: string;
  new: boolean;
  image: {
    desktop: string;
  };
  price: number;
  includes: IPart[];
  gallery: {
    first: {
      desktop: string;
    };
    second: {
      desktop: string;
    };
    third: {
      desktop: string;
    };
  };
  others: Pick<IProduct, "slug" | "name" | "image">[];
}

export interface IProductCardProps {
  product: IProduct;
  cartBtn?: boolean;
}

export interface IProductDetailPathParams {
  productSlug: string;
}

export interface ISimilarProductProps {
  name: string;
  img: string;
  slug: string;
}

export interface IProductInfoProps {
  features?: string;
  includes?: IPart[];
}

export interface IProductGallery {
  gallery?: {
    first: {
      desktop: string;
    };
    second: {
      desktop: string;
    };
    third: {
      desktop: string;
    };
  };
}
