import { create } from 'zustand'
import { Product, OrderItem } from './types/product';

type Store = {
    order: OrderItem[];
    addToOrder: (product: Product) => void;
    removeFromOrder: (productId: number) => void;
    increaseQuantity: (productId: number) => void;
    reduceQuantity: (productId: number) => void;
}

export const useStore = create<Store>((set) => ({
    order: [],
    addToOrder: (product) => set((state) => {
        console.log('product', product);
        const orderItem = state.order.find((item) => item.product.id === product.id);
        if (orderItem) {
            orderItem.quantity += 1;
            orderItem.subTotal = orderItem.product.price * orderItem.quantity;
            return { order: [...state.order] };
        } else {
            const newOrderItem = {
                product,
                quantity: 1,
                subTotal: product.price,
            };
            return { order: [...state.order, newOrderItem] };
        }
    }),
    removeFromOrder: (productId) => set((state) => {
        console.log('productId', productId);
        const newOrder = state.order.filter((item) => item.product.id !== productId);
        return { order: newOrder };
    }),
    increaseQuantity: (productId) => set((state) => {
        console.log('productId', productId);
        const orderItem = state.order.find((item) => item.product.id === productId);
        if (orderItem) {
            orderItem.quantity += 1;
            orderItem.subTotal = orderItem.product.price * orderItem.quantity;
            return { order: [...state.order] };
        }
        return state;
    }),
    reduceQuantity: (productId) => set((state) => {
        console.log('productId', productId);
        const orderItem = state.order.find((item) => item.product.id === productId);
        if (orderItem) {
            orderItem.quantity -= 1;
            orderItem.subTotal = orderItem.product.price * orderItem.quantity;
            if (orderItem.quantity === 0) {
                const newOrder = state.order.filter((item) => item.product.id !== productId);
                return { order: newOrder };
            }
            return { order: [...state.order] };
        }
        return state;
    }),
}));