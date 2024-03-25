import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { formatPrice } from "@/src/utils";
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import { OrderItem } from '@/src/types/product';
import { useStore } from "@/src/store";

type CartItemProps = {
    item: OrderItem;
};

const CartItem = ({ item }: CartItemProps) => {
    const increaseQuantity = useStore((state) => state.increaseQuantity);
    const reduceQuantity = useStore((state) => state.reduceQuantity);
    return (
        <>
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
        </>
    );
}

export default CartItem;