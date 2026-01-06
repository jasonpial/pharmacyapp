import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroBanner() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-4">
              Your Health, Our Priority
            </h2>
            <p className="text-lg text-green-100 mb-6">
              Get 25% off on your first order. Fast delivery, authentic medicines, 
              and expert pharmacy services at your doorstep.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-700">
                Learn More
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm">
              <div>
                <div className="font-bold text-2xl">500K+</div>
                <div className="text-green-200">Happy Customers</div>
              </div>
              <div className="w-px h-12 bg-green-400"></div>
              <div>
                <div className="font-bold text-2xl">10K+</div>
                <div className="text-green-200">Products</div>
              </div>
              <div className="w-px h-12 bg-green-400"></div>
              <div>
                <div className="font-bold text-2xl">24/7</div>
                <div className="text-green-200">Support</div>
              </div>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NzY3NTI5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Healthcare Professional"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}