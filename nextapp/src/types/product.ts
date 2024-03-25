type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
};

type OrderItem = {
    product: Product;
    subTotal: number;
    quantity: number;
};
