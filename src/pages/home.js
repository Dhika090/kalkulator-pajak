import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[rgb(243,230,209)] text-black p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/tax.png" alt="Logo" className="w-12 h-12" />

          <h1 className="text-lg font-bold">Kawan Hitung Pajak Era Digital</h1>
        </div>

        {/* Navigasi */}
        <nav className="flex gap-4">
          <Link
            to="/pph21"
            className="px-4 py-2 rounded-md hover:bg-[rgb(10,59,63)]"
          >
            PPh 21
          </Link>
          <Link
            to="/pph23"
            className="px-4 py-2 rounded-md hover:bg-[rgb(10,59,63)]"
          >
            PPh 23
          </Link>
          <Link
            to="/pph4"
            className="px-4 py-2 rounded-md hover:bg-[rgb(10,59,63)]"
          >
            PPh 4 (2)
          </Link>
          <Link
            to="/ppn"
            className="px-4 py-2 rounded-md hover:bg-[rgb(10,59,63)]"
          >
            PPN
          </Link>
        </nav>
      </div>
    </header>
  );
}
