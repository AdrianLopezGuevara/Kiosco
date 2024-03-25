import { create } from 'zustand'

type Store = {
    order: OrderItem[];
    addToOrder: (product: Product) => void;
    removeFromOrder: (productId: number) => void;
}

export const useStore = create<Store>((set) => ({
    order: [],
    addToOrder: (product) => set((state) => {
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
        const newOrder = state.order.filter((item) => item.product.id !== productId);
        return { order: newOrder };
    }),
}));