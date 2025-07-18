import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-yellow-400 p-1 rounded-md">
            <img src="/logo.svg" alt="Logo" className="w-6 h-6" />
          </div>
          <h1 className="text-lg font-bold">Kawan Hitung Pajak Era Digital</h1>
        </div>

        {/* Navigasi */}
        <nav className="flex gap-4">
          <Link to="/pph21" className="px-4 py-2 rounded-md hover:bg-blue-700">
            PPh 21
          </Link>
          <Link to="/pph23" className="px-4 py-2 rounded-md hover:bg-blue-700">
            PPh 23
          </Link>
          <Link to="/pph4" className="px-4 py-2 rounded-md hover:bg-blue-700">
            PPh 4 (2)
          </Link>
          <Link to="/ppn" className="px-4 py-2 rounded-md hover:bg-blue-700">
            PPN
          </Link>
        </nav>
      </div>
    </header>
  );
}
