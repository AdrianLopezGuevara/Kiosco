export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
};

export type OrderItem = {
    product: Product;
    subTotal: number;
    quantity: number;
};
