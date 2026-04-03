import { useMutation } from '@tanstack/react-query';
import { api } from '../services/api';

export interface CreateOrderItemPayload {
  productId: string;
  quantity: number;
}

export interface CreateOrderPayload {
  items: CreateOrderItemPayload[];
}

export const useCreateOrder = () => {
  return useMutation({
    mutationFn: async (payload: CreateOrderPayload) => {
      const response = await api.post('/orders', payload);
      return response.data;
    },
  });
};
