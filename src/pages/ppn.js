import { useState } from "react";

const formatRupiahInput = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
};
const PPNCalculator = () => {
  const [dpp, setDpp] = useState(0);
  const tariff = 12;
  const ppn = (dpp * tariff) / 100;
  const total = parseFloat(dpp) + ppn;

  return (
    <div className="min-h-screen flex justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg mt-4 p-6 w-full max-w-2xl">
        <h2 className="text-3xl font-semibold text-slate-600 mb-6">PPN</h2>

        <div className="space-y-4">
          {/* DPP */}
          <div className="flex flex-col sm:flex-row items-center">
            <label className="w-full sm:w-1/3 text-slate-600 mb-1 sm:mb-0">
              DPP
            </label>
            <input
              type="text"
              className="w-full sm:w-2/3 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formatRupiahInput(dpp)}
              onChange={(e) =>
                setDpp(Number(e.target.value.replace(/\D/g, "")))
              }
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center">
            <label className="w-full sm:w-1/3 text-slate-600 mb-1 sm:mb-0">
              Rumus : 11/12 x DPP
            </label>
          </div>

          {/* Tarif */}
          <div className="flex flex-col sm:flex-row items-center">
            <label className="w-full sm:w-1/3 text-slate-600 mb-1 sm:mb-0">
              Tarif
            </label>
            <input
              type="text"
              className="w-full sm:w-2/3 bg-gray-100 border rounded px-3 py-2"
              value={`${tariff} %`}
              disabled
            />
          </div>

          {/* PPN */}
          <div className="flex flex-col sm:flex-row items-center">
            <label className="w-full sm:w-1/3 text-slate-600 mb-1 sm:mb-0">
              PPN
            </label>
            <input
              type="text"
              className="w-full sm:w-2/3 bg-gray-100 border rounded px-3 py-2"
              value={ppn.toLocaleString()}
              disabled
            />
          </div>

          {/* Harga setelah PPN */}
          <div className="flex flex-col sm:flex-row items-center">
            <label className="w-full sm:w-1/3 text-slate-600 mb-1 sm:mb-0">
              Harga setelah PPN
            </label>
            <input
              type="text"
              className="w-full sm:w-2/3 bg-gray-100 border rounded px-3 py-2"
              value={total.toLocaleString()}
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPNCalculator;
