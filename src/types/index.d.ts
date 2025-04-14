import NextAuth from "next-auth";

export namespace Shop {
  interface ProductType {
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
  interface AddToCartReq {
    productId: number;
    quantity: number;
  }
}

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      email: string;
      name?: string;
    };
  }
}
