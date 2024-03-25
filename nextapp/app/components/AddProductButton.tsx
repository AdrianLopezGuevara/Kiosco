"use client";
import { Button } from "@mui/material";
import { Product } from "../../src/types/product";
import { useStore } from "@/src/store";
type AddProductButtonProps = {
    product: Product;
};
const AddProductButton = ({ product }: AddProductButtonProps) => {
    const addToOrder = useStore((state) => state.addToOrder);
    return (
        <>
            <Button
                color="primary"
                variant='contained'
                fullWidth
                onClick={() => addToOrder(product)}
            >
                Add to cart
            </Button>
        </>
    );
}

export default AddProductButton;