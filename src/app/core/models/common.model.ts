export interface ApiResponse<T> {
  data: T;
  status?: boolean;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface ICategory {
  id: number;
  name: string;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ICart {
  product: IProduct[];
  totalAmount: number;
}
