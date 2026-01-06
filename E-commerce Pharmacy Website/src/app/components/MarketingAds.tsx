import { TrendingUp, Target, Users, Tag } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AdCampaign {
  id: string;
  title: string;
  description: string;
  platform: string;
  impressions: string;
  clicks: string;
  ctr: string;
  status: 'active' | 'paused' | 'completed';
  image: string;
}

const campaigns: AdCampaign[] = [
  {
    id: '1',
    title: 'Winter Wellness Campaign',
    description: 'Promoting vitamins and supplements for winter season immunity boost',
    platform: 'Google Ads',
    impressions: '125K',
    clicks: '8.5K',
    ctr: '6.8%',
    status: 'active',
    image: 'https://images.unsplash.com/photo-1683394541762-f96c0d03dc38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXRhbWluJTIwc3VwcGxlbWVudHN8ZW58MXx8fHwxNzY3NjMyNTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '2',
    title: 'First Order Discount',
    description: 'New customer acquisition campaign with 25% off first purchase',
    platform: 'Facebook Ads',
    impressions: '98K',
    clicks: '12K',
    ctr: '12.2%',
    status: 'active',
    image: 'https://images.unsplash.com/photo-1596522016734-8e6136fe5cfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjeSUyMG1lZGljaW5lfGVufDF8fHx8MTc2NzY4MjAyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '3',
    title: 'Medical Equipment Sale',
    description: 'Retargeting campaign for home medical equipment and monitoring devices',
    platform: 'Instagram Ads',
    impressions: '76K',
    clicks: '5.2K',
    ctr: '6.8%',
    status: 'active',
    image: 'https://images.unsplash.com/photo-1606206873764-fd15e242df52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2NzYzOTg5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function MarketingAds() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Digital Marketing Campaigns</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Track our active paid advertising campaigns across multiple platforms. 
            We leverage data-driven marketing to reach our customers effectively.
          </p>
        </div>

        {/* Performance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 bg-white">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-sm text-gray-600">Total Impressions</div>
            </div>
            <div className="text-2xl font-bold">299K</div>
            <div className="text-sm text-green-600 mt-1">↑ 24% from last month</div>
          </Card>

          <Card className="p-6 bg-white">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-100 rounded-lg">
                <Target className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-sm text-gray-600">Total Clicks</div>
            </div>
            <div className="text-2xl font-bold">25.7K</div>
            <div className="text-sm text-green-600 mt-1">↑ 18% from last month</div>
          </Card>

          <Card className="p-6 bg-white">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-sm text-gray-600">New Customers</div>
            </div>
            <div className="text-2xl font-bold">3.2K</div>
            <div className="text-sm text-green-600 mt-1">↑ 32% from last month</div>
          </Card>

          <Card className="p-6 bg-white">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Tag className="w-5 h-5 text-orange-600" />
              </div>
              <div className="text-sm text-gray-600">Avg CTR</div>
            </div>
            <div className="text-2xl font-bold">8.6%</div>
            <div className="text-sm text-green-600 mt-1">↑ 2.3% from last month</div>
          </Card>
        </div>

        {/* Campaign Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-100">
                <ImageWithFallback 
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-full object-cover"
                />
                <Badge 
                  className={`absolute top-3 right-3 ${
                    campaign.status === 'active' 
                      ? 'bg-green-500' 
                      : campaign.status === 'paused'
                      ? 'bg-yellow-500'
                      : 'bg-gray-500'
                  }`}
                >
                  {campaign.status.toUpperCase()}
                </Badge>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="text-xs">
                    {campaign.platform}
                  </Badge>
                </div>

                <h3 className="font-bold text-lg mb-2">{campaign.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{campaign.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b">
                  <div>
                    <div className="text-xs text-gray-500">Impressions</div>
                    <div className="font-semibold">{campaign.impressions}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Clicks</div>
                    <div className="font-semibold">{campaign.clicks}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">CTR</div>
                    <div className="font-semibold text-green-600">{campaign.ctr}</div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Details
                  </Button>
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    Edit Campaign
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Ready to Boost Your Pharmacy Business?
              </h3>
              <p className="text-blue-100">
                Partner with us for comprehensive digital marketing solutions tailored for healthcare.
              </p>
            </div>
            <div className="flex gap-3">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                Contact Sales
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
