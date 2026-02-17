export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">MindNote</h2>
            <p className="text-sm text-gray-500">
              Organize your thoughts in a structured tree.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-900">Product</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-black transition-colors">Features</li>
              <li className="hover:text-black transition-colors">Pricing</li>
              <li className="hover:text-black transition-colors">Updates</li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-black transition-colors">About</li>
              <li className="hover:text-black transition-colors">Blog</li>
              <li className="hover:text-black transition-colors">Careers</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-black transition-colors">
                Privacy Policy
              </li>
              <li className="hover:text-black transition-colors">
                Terms of Service
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} MindNote. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-black transition-colors cursor-pointer">
              Twitter
            </span>
            <span className="hover:text-black transition-colors cursor-pointer">
              GitHub
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
