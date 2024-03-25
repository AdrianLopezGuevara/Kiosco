import { products } from "../test";
import ProductCard from "@/app/components/ProductCard";
const OrderPage = ({ params }: { params: { category: string } }) => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-start gap-8">
                {products
                    .filter((product) => product.category === params.category)
                    .map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </div>
        </>
    );
}

export default OrderPage;