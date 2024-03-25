"use client";
import { useStore } from "@/src/store";
import Link from "next/link";
import { Button } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { formatPrice } from "@/src/utils";
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartPage = () => {
    const order = useStore((state) => state.order);
    const increaseQuantity = useStore((state) => state.increaseQuantity);
    const reduceQuantity = useStore((state) => state.reduceQuantity);
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
                        <Card sx={{ display: 'flex', marginBottom: '8px' }} key={item.product.id}>
                            <CardMedia
                                component="img"
                                sx={{ width: 151 }}
                                image={`/products/${item.product.image}`}
                                alt={item.product.name}
                            />
                            <CardContent className="w-full flex items-center">
                                <Typography component="div" variant="h5" className="flex-1">
                                    {item.product.name}
                                </Typography>
                                <div className="flex flex-col gap-4">
                                    <Typography variant="h6" color="text.secondary" component="div">
                                        Price: {formatPrice(item.product.price)}
                                    </Typography>
                                    <ButtonGroup variant="contained" aria-label="Basic button group">
                                        <Button
                                            onClick={() => reduceQuantity(item.product.id)}
                                        >
                                            <RemoveIcon />
                                        </Button>
                                        <Button disabled>{item.quantity}</Button>
                                        <Button
                                            onClick={() => increaseQuantity(item.product.id)}
                                        >
                                            <AddIcon />
                                        </Button>
                                    </ButtonGroup>
                                    <Typography variant="h5" color="text.secondary" component="div">
                                        <span className="font-bold">Subtotal:</span> {formatPrice(item.subTotal)}
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </>
            )}
        </>
    );
}

export default CartPage;