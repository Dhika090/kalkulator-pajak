import { useState } from "react";

const formatRupiahInput = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
};
const PPNCalculator = () => {
  const [hargaJual, setHargaJual] = useState(0);

  const dppNilaiLain = (hargaJual * 11) / 12;
  const ppn = (dppNilaiLain * 12) / 100;
  const hargaSetelahPPN = hargaJual - ppn;

  const formatRupiahInput = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-gray-100 px-4 bg-cover bg-center"
      style={{
        backgroundImage: "url('/REV1.jpg')",
      }}
    >
      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-xl p-6 w-full max-w-2xl mt-4 mb-20 sm:mb-40">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-600 mb-6 text-center">
          PPN
        </h2>

        <div className="space-y-4">
          {/* Harga Jual */}
          <div className="flex flex-col sm:flex-row items-center">
            <label className="w-full sm:w-1/3 text-slate-600 mb-1 sm:mb-0">
              Harga Jual
            </label>
            <input
              type="text"
              className="w-full sm:w-2/3 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formatRupiahInput(hargaJual)}
              onChange={(e) =>
                setHargaJual(Number(e.target.value.replace(/\D/g, "")))
              }
            />
          </div>

          {/* Rumus */}
          <div className="flex flex-col sm:flex-row items-center">
            <label className="w-full sm:w-1/3 text-slate-600 mb-1 sm:mb-0">
              Rumus
            </label>
            <p className="w-full sm:w-2/3 text-slate-600">
              DPP = 11/12 × Harga Jual | PPN = 12% × DPP | Harga Setelah PPN =
              Harga Jual - PPN
            </p>
          </div>

          {/* DPP Nilai Lain */}
          <div className="flex flex-col sm:flex-row items-center">
            <label className="w-full sm:w-1/3 text-slate-600 mb-1 sm:mb-0">
              DPP Nilai Lain
            </label>
            <input
              type="text"
              className="w-full sm:w-2/3 bg-gray-100 border rounded px-3 py-2"
              value={formatRupiahInput(dppNilaiLain)}
              disabled
            />
          </div>

          {/* PPN */}
          <div className="flex flex-col sm:flex-row items-center">
            <label className="w-full sm:w-1/3 text-slate-600 mb-1 sm:mb-0">
              PPN (12%)
            </label>
            <input
              type="text"
              className="w-full sm:w-2/3 bg-gray-100 border rounded px-3 py-2"
              value={formatRupiahInput(ppn)}
              disabled
            />
          </div>

          {/* Harga Setelah PPN */}
          <div className="flex flex-col sm:flex-row items-center">
            <label className="w-full sm:w-1/3 text-slate-600 mb-1 sm:mb-0">
              Harga Setelah PPN
            </label>
            <input
              type="text"
              className="w-full sm:w-2/3 bg-gray-100 border rounded px-3 py-2"
              value={formatRupiahInput(hargaSetelahPPN)}
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPNCalculator;
