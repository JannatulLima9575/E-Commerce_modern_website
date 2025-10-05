import Image from 'next/image';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 hover:shadow-md transition cursor-pointer">
      <div className="relative w-full h-48">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain rounded-lg"
        />
      </div>
      <h3 className="mt-3 text-lg font-semibold text-gray-800 line-clamp-2">
        {product.title}
      </h3>
      <p className="text-gray-500 text-sm">${product.price.toFixed(2)}</p>

      {product.discount && (
        <span className="text-sm text-green-600 font-medium">
          {product.discount} off
        </span>
      )}
    </div>
  );
}
