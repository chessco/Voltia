import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';

export interface Product {
  id: string;
  name: string;
  sku: string;
  description: string;
  price: number;
  stock: number;
  status: string;
  imageUrl?: string;
  categoryId: string;
  tenantId: string;
  category?: {
    name: string;
  }
}

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async (): Promise<Product[]> => {
      const response = await api.get('/products');
      return response.data;
    },
  });
};
