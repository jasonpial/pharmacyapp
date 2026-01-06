import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { toast } from 'sonner';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = '1234567890'; // Format: country code + number without + or spaces
    const message = 'Hello, I would like to inquire about your pharmacy services.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600">We're here to help! Reach out to us anytime</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <Phone className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">Phone</h3>
            <p className="text-gray-600 mb-2">Call us anytime</p>
            <a href="tel:1-800-PHARMACY" className="text-green-600 hover:text-green-700 font-semibold">
              1-800-PHARMACY
            </a>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-gray-600 mb-2">Send us a message</p>
            <a href="mailto:everhealthyEverhealthy@gmail.com" className="text-green-600 hover:text-green-700 font-semibold break-all">
              everhealthyEverhealthy@gmail.com
            </a>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <MapPin className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">Location</h3>
            <p className="text-gray-600 mb-2">Visit our store</p>
            <p className="text-green-600 font-semibold">
              123 Health St, Medical City
            </p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="How can we help you?"
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" size="lg">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* WhatsApp & Additional Info */}
          <div className="space-y-6">
            {/* WhatsApp Card */}
            <Card className="p-8 bg-gradient-to-br from-green-600 to-green-700 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Chat with us on WhatsApp</h3>
                  <p className="text-green-100">Get instant support</p>
                </div>
              </div>
              <p className="mb-6 text-green-50">
                Have a quick question? Our team is available on WhatsApp to assist you with orders, 
                product inquiries, and general support.
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                size="lg" 
                className="w-full bg-white text-green-600 hover:bg-green-50"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start WhatsApp Chat
              </Button>
            </Card>

            {/* Business Hours */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold">Business Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Emergency Support</span>
                  <span className="font-semibold text-green-600">24/7 Available</span>
                </div>
              </div>
            </Card>

            {/* Social Media */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="space-y-3">
                <a 
                  href="https://www.facebook.com/EverhealthyMultidynamicIntl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-2xl">📘</span>
                  <div>
                    <div className="font-semibold">Facebook</div>
                    <div className="text-sm text-gray-600">@EverhealthyMultidynamicIntl</div>
                  </div>
                </a>

                <a 
                  href="https://www.instagram.com/EverhealthyNG" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-2xl">📷</span>
                  <div>
                    <div className="font-semibold">Instagram</div>
                    <div className="text-sm text-gray-600">@EverhealthyNG</div>
                  </div>
                </a>

                <a 
                  href="https://twitter.com/EverhealthyNG" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-2xl">🐦</span>
                  <div>
                    <div className="font-semibold">X (Twitter)</div>
                    <div className="text-sm text-gray-600">@EverhealthyNG</div>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/company/multi-dynamic-intl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-2xl">💼</span>
                  <div>
                    <div className="font-semibold">LinkedIn</div>
                    <div className="text-sm text-gray-600">Multi-Dynamic Int'l</div>
                  </div>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
