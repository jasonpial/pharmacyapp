export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">EveryHealthy Multi-Dynamic Int'L Limited</h3>
            <p className="text-sm mb-4">
              Your trusted online pharmacy for authentic medicines and healthcare products.
            </p>
            <div className="flex flex-col gap-2">
              <a href="https://www.facebook.com/EverhealthyMultidynamicIntl" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors text-sm">
                📘 Facebook: @EverhealthyMultidynamicIntl
              </a>
              <a href="https://www.instagram.com/EverhealthyNG" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors text-sm">
                📷 Instagram: @EverhealthyNG
              </a>
              <a href="https://twitter.com/EverhealthyNG" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors text-sm">
                🐦 X: @EverhealthyNG
              </a>
              <a href="https://www.linkedin.com/company/multi-dynamic-intl" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors text-sm">
                💼 LinkedIn: Multi-Dynamic Int'l
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Our Services</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Store Locator</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400 transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li>📞 1-800-PHARMACY</li>
              <li>📧 everhealthyEverhealthy@gmail.com</li>
              <li>📍 123 Health St, Medical City</li>
              <li>🕐 24/7 Customer Support</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© 2026 EveryHealthy Multi-Dynamic Int'L Limited. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-green-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}