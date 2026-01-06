import { HeroBanner } from '../HeroBanner';
import { Categories } from '../Categories';
import { ProductCard, Product } from '../ProductCard';
import { Button } from '../ui/button';

interface HomePageProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onNavigate: (page: string) => void;
}

export function HomePage({ products, onAddToCart, onNavigate }: HomePageProps) {
  return (
    <>
      <HeroBanner />
      <Categories />
      
      {/* Featured Products */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600">Best sellers and top-rated items</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {products.slice(0, 8).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700"
              onClick={() => onNavigate('products')}
            >
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section id="promotions" className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🎉 Limited Time Offer!
          </h2>
          <p className="text-xl text-green-100 mb-6">
            Get 25% OFF on your first order + FREE shipping on orders over $50
          </p>
          <div className="flex justify-center gap-4">
            <div className="bg-white/20 backdrop-blur px-6 py-4 rounded-lg">
              <div className="text-3xl font-bold">25%</div>
              <div className="text-sm">First Order</div>
            </div>
            <div className="bg-white/20 backdrop-blur px-6 py-4 rounded-lg">
              <div className="text-3xl font-bold">FREE</div>
              <div className="text-sm">Shipping</div>
            </div>
            <div className="bg-white/20 backdrop-blur px-6 py-4 rounded-lg">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
