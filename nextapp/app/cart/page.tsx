"use client";
import { useStore } from "@/src/store";
import Link from "next/link";
import { Button } from "@mui/material";
import CartItem from "../components/CartItem";

const CartPage = () => {
    const order = useStore((state) => state.order);
    return (
        <>
            {order.length === 0 ? (
                <>
                    <h1 className="text-center">No items in cart</h1>
                    <Link href="/order/Coffee" className="flex justify-center">
                        <Button variant="contained" color="primary">
                            Go to products
                        </Button>
                    </Link>
                </>
            ) : (
                <>
                    <h1 className="text-center">Summary</h1>
                    {order.map((item) => (
                        <CartItem
                            key={item.product.id}
                            item={item}
                        />
                    ))}
                    <div className="flex justify-between">
                        <Link href="/order/Coffee">
                            <Button variant="contained" color="primary">
                                Continue shopping
                            </Button>
                        </Link>
                        <Button variant="contained" color="primary">
                            Pay
                        </Button>
                    </div>
                </>
            )}
        </>
    );
}

export default CartPage;