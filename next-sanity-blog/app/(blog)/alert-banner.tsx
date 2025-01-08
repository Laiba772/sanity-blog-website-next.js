import Link from "next/link";

export default function AlertBanner() {
  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-white/95 text-black border-b backdrop-blur-lg flex items-center justify-between px-8 md:px-16 lg:px-24 h-16 shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <Link href={"/"}>
          <h1 className="text-xl font-bold text-gray-800">BLOGS</h1>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-8 text-sm font-medium">
        <Link href="/" className="hover:text-blue-600 transition-colors duration-300">Home</Link>
        <Link href="/about" className="hover:text-blue-600 transition-colors duration-300">About</Link>
        <Link href="/contact" className="hover:text-blue-600 transition-colors duration-300">Contact</Link>
      </nav>

      {/* Call to Action (Uncomment if needed) */}
      {/* <div>
        <button className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200">
          Sign Up
        </button>
      </div> */}
    </div>
  );
}
