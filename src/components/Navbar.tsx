// src/components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="bg-brand-primary text-neutral-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">EduNexus</div>
        <div className="space-x-4">
          <a href="/home" className="hover:underline">Home</a>
          <a href="/login" className="hover:underline">Login</a>
          <a href="/register" className="hover:underline">Register</a>
          <a href="/faq" className="hover:underline">FAQ</a>
          <a href="/application" className="hover:underline">Application</a>
          <a href="/inquiry" className="hover:underline">Inquiry</a>
        </div>
      </div>
    </nav>
  );
}