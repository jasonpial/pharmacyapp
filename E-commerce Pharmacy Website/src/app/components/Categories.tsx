import { Package } from 'lucide-react';
import { Card } from './ui/card';

interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  color: string;
}

const categories: Category[] = [
  { id: '1', name: 'Prescription Drugs', icon: '💊', count: 2500, color: 'bg-blue-100 text-blue-600' },
  { id: '2', name: 'Vitamins & Supplements', icon: '🧪', count: 850, color: 'bg-green-100 text-green-600' },
  { id: '3', name: 'Personal Care', icon: '🧴', count: 420, color: 'bg-purple-100 text-purple-600' },
  { id: '4', name: 'Medical Devices', icon: '🩺', count: 320, color: 'bg-red-100 text-red-600' },
  { id: '5', name: 'Baby & Mom', icon: '👶', count: 280, color: 'bg-pink-100 text-pink-600' },
  { id: '6', name: 'Fitness & Nutrition', icon: '💪', count: 190, color: 'bg-orange-100 text-orange-600' },
  { id: '7', name: 'First Aid', icon: '🩹', count: 150, color: 'bg-yellow-100 text-yellow-600' },
  { id: '8', name: 'Health Monitors', icon: '⚕️', count: 95, color: 'bg-teal-100 text-teal-600' },
];

export function Categories() {
  return (
    <section id="categories" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
          <p className="text-gray-600">Browse our wide range of healthcare products</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Card 
              key={category.id}
              className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${category.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>
                {category.icon}
              </div>
              <h3 className="font-semibold mb-1">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.count} products</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
