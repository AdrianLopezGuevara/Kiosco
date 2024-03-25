import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { formatPrice } from '../../src/utils';
import Image from 'next/image';
import AddProductButton from './AddProductButton';
type ProductCardProps = {
    product: Product;
};
type Product = {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
}
const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <>
            <Card sx={{ maxWidth: 345, width: 300 }}>
                <Image src={`/products/${product.image}`} alt={product.name} width={300} height={300} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.category}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        {formatPrice(product.price)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <AddProductButton product={product} />
                </CardActions>
            </Card>
        </>
    );
}

export default ProductCard;