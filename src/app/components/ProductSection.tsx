import { Product } from '@/types/product';
import ProductCard from './ProductCard';

const products: Product[] = [
  {
    id: 1,
    title: 'JBL Tune 710BT Wireless Headphones',
    price: 125.0,
    image: '/headphone.jpg',
    discount: '30%',
  },
  {
    id: 2,
    title: 'MacBook Pro 16 inch',
    price: 2499.0,
    image: '/headphone1.jpg',
  },
  {
    id: 3,
    title: 'Dog Plush Toy',
    price: 39.99,
    image: '/headphone2.jpg',
  },
];

export default function ProductSection() {
  return (
    <section className="max-w-7xl mx-auto py-10 md:px-0 px-8">
      <h1 className="text-2xl font-bold mb-6">Popular Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}
