// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-surface-bg border-t border-gray-200 text-text-secondary text-xs">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* LEFT: About */}
          <div>
            <h3 className="font-semibold text-text-main mb-2">About EduNexus</h3>
            <p className="leading-relaxed">
              EduNexus empowers institutions with a unified platform for student applications, 
              payments, and inquiries — built for simplicity and security.
            </p>
          </div>

          {/* CENTER-LEFT: Company */}
          <div>
            <h4 className="font-medium text-text-main mb-2">Company</h4>
            <ul className="space-y-1">
              <li><a href="/about" className="hover:text-brand-primary transition">About Us</a></li>
              <li><a href="/careers" className="hover:text-brand-primary transition">Careers</a></li>
              <li><a href="/blog" className="hover:text-brand-primary transition">Blog</a></li>
            </ul>
          </div>

          {/* CENTER-RIGHT: Support */}
          <div>
            <h4 className="font-medium text-text-main mb-2">Support</h4>
            <ul className="space-y-1">
              <li><a href="/contact" className="hover:text-brand-primary transition">Contact</a></li>
              <li><a href="/help" className="hover:text-brand-primary transition">Help Center</a></li>
              <li><a href="mailto:support@edunexus.edu" className="hover:text-brand-primary transition">Email Us</a></li>
            </ul>
          </div>

          {/* RIGHT: Legal */}
          <div>
            <h4 className="font-medium text-text-main mb-2">Legal</h4>
            <ul className="space-y-1">
              <li><a href="/privacy" className="hover:text-brand-primary transition">Privacy</a></li>
              <li><a href="/terms" className="hover:text-brand-primary transition">Terms</a></li>
              <li><a href="/cookies" className="hover:text-brand-primary transition">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-100 text-center">
          © {new Date().getFullYear()} EduNexus. All rights reserved.
        </div>
      </div>
    </footer>
  );
}