import { Product } from "../../types";

interface ProductDetailProps {
  params: { id: string };
}

const fetchProduct = async (id: string): Promise<Product> => {
  // Simulating a fetch from a database or an API
  return {
    id,
    name: "Product " + id,
    price: 20 + parseInt(id),
    image: `/images/product${id}.jpg`,
  };
};

const ProductDetail: React.FC<ProductDetailProps> = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  const addToCart = () => {
    // Logic to add to cart
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
