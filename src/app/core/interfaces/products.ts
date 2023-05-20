import { Images } from "./images";

export interface Products {
    _id: string;
    code: string;
    brand: string;
    model: string;
    description: string;
    specifications: {
      color: string;
      size: string;
      characteristics: string[];
      material: string;
      dimension: string[];
      weight: string;
      ability: string;
      _id: string;
    };
    price: number;
    category: string[];
    stock: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
    images: {
      _id: string;
      filename: string;
      mimetype: string;
      size: number;
      url: string;
      codigo: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
    }[];
}
