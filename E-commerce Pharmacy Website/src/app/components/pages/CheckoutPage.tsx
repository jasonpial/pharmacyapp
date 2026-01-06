import { useState } from 'react';
import { X, Plus, Minus, CreditCard, Truck, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Separator } from '../ui/separator';
import { CartItem } from '../Cart';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { toast } from 'sonner';

interface CheckoutPageProps {
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

export function CheckoutPage({ items, onUpdateQuantity, onRemoveItem }: CheckoutPageProps) {
  const [step, setStep] = useState<'cart' | 'shipping' | 'payment'>('cart');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const handlePlaceOrder = () => {
    toast.success('Order placed successfully! We will contact you shortly.');
    setStep('cart');
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Cart & Checkout</h1>
          <p className="text-gray-600">Review your order and complete your purchase</p>
        </div>

        {items.length === 0 ? (
          <Card className="p-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-2xl font-bold mb-2">Your cart is empty</h3>
              <p className="text-gray-500 mb-6">Add some products to get started!</p>
            </div>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Progress Steps */}
              <Card className="p-6 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className={`w-full h-2 rounded-full ${step === 'cart' ? 'bg-green-600' : 'bg-gray-200'}`}></div>
                    <div className="mt-2 text-sm font-semibold text-center">Cart</div>
                  </div>
                  <div className="flex-1 mx-2">
                    <div className={`w-full h-2 rounded-full ${step === 'shipping' ? 'bg-green-600' : 'bg-gray-200'}`}></div>
                    <div className="mt-2 text-sm font-semibold text-center">Shipping</div>
                  </div>
                  <div className="flex-1">
                    <div className={`w-full h-2 rounded-full ${step === 'payment' ? 'bg-green-600' : 'bg-gray-200'}`}></div>
                    <div className="mt-2 text-sm font-semibold text-center">Payment</div>
                  </div>
                </div>
              </Card>

              {/* Cart Items */}
              {step === 'cart' && (
                <Card className="p-6">
                  <h2 className="text-xl font-bold mb-4">Shopping Cart ({items.length} items)</h2>
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.product.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-24 h-24 bg-white rounded overflow-hidden flex-shrink-0">
                          <ImageWithFallback 
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between gap-2 mb-2">
                            <h4 className="font-semibold">{item.product.name}</h4>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 flex-shrink-0"
                              onClick={() => onRemoveItem(item.product.id)}
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                          
                          <div className="text-sm text-gray-600 mb-3">
                            ${item.product.price} each
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 bg-white rounded border">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              <span className="w-12 text-center">{item.quantity}</span>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>
                            
                            <div className="text-lg font-bold text-green-600">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <Button 
                      size="lg" 
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => setStep('shipping')}
                    >
                      Proceed to Shipping
                    </Button>
                  </div>
                </Card>
              )}

              {/* Shipping Information */}
              {step === 'shipping' && (
                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Truck className="w-6 h-6 text-green-600" />
                    <h2 className="text-xl font-bold">Shipping Information</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          value={shippingInfo.fullName}
                          onChange={(e) => setShippingInfo({...shippingInfo, fullName: e.target.value})}
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={shippingInfo.email}
                          onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={shippingInfo.phone}
                        onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div>
                      <Label htmlFor="address">Address *</Label>
                      <Input
                        id="address"
                        value={shippingInfo.address}
                        onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                        placeholder="123 Main Street"
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          value={shippingInfo.city}
                          onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                          placeholder="New York"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State *</Label>
                        <Input
                          id="state"
                          value={shippingInfo.state}
                          onChange={(e) => setShippingInfo({...shippingInfo, state: e.target.value})}
                          placeholder="NY"
                        />
                      </div>
                      <div>
                        <Label htmlFor="zipCode">ZIP Code *</Label>
                        <Input
                          id="zipCode"
                          value={shippingInfo.zipCode}
                          onChange={(e) => setShippingInfo({...shippingInfo, zipCode: e.target.value})}
                          placeholder="10001"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-4 justify-end">
                    <Button variant="outline" onClick={() => setStep('cart')}>
                      Back to Cart
                    </Button>
                    <Button 
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => setStep('payment')}
                    >
                      Continue to Payment
                    </Button>
                  </div>
                </Card>
              )}

              {/* Payment */}
              {step === 'payment' && (
                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <CreditCard className="w-6 h-6 text-green-600" />
                    <h2 className="text-xl font-bold">Payment Method</h2>
                  </div>

                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                    <div className="flex items-center space-x-2 border rounded-lg p-4">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex-1 cursor-pointer">
                        <div className="font-semibold">Credit/Debit Card</div>
                        <div className="text-sm text-gray-500">Pay securely with your card</div>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2 border rounded-lg p-4">
                      <RadioGroupItem value="bank" id="bank" />
                      <Label htmlFor="bank" className="flex-1 cursor-pointer">
                        <div className="font-semibold">Bank Transfer</div>
                        <div className="text-sm text-gray-500">Direct bank transfer</div>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2 border rounded-lg p-4">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod" className="flex-1 cursor-pointer">
                        <div className="font-semibold">Cash on Delivery</div>
                        <div className="text-sm text-gray-500">Pay when you receive</div>
                      </Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === 'card' && (
                    <div className="mt-6 space-y-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-6 flex gap-4 justify-end">
                    <Button variant="outline" onClick={() => setStep('shipping')}>
                      Back to Shipping
                    </Button>
                    <Button 
                      size="lg"
                      className="bg-green-600 hover:bg-green-700"
                      onClick={handlePlaceOrder}
                    >
                      Place Order - ${total.toFixed(2)}
                    </Button>
                  </div>
                </Card>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-4">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {item.product.name} x {item.quantity}
                      </span>
                      <span className="font-medium">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (8%)</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-green-600">${total.toFixed(2)}</span>
                </div>

                {subtotal < 50 && (
                  <div className="mt-4 p-3 bg-green-50 rounded-lg text-sm text-green-700">
                    💡 Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                  </div>
                )}

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <Truck className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Free shipping on orders over $50</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Delivery within 2-5 business days</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
