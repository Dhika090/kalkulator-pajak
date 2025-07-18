import { useState } from "react";
import Select from "react-select";

const taxOptions = [
  {
    value: "28-401-01",
    label: "28-401-01 - Bunga Obligasi WP Dalam Negeri",
    rate: 15,
  },
  {
    value: "28-401-02",
    label: "28-401-02 - Bunga Obligasi WP Luar Negeri",
    rate: 20,
  },
  {
    value: "28-401-03",
    label: "28-401-03 - Bunga Obligasi WP Dalam Negeri & BUT",
    rate: 10,
  },
  {
    value: "28-401-04",
    label: "28-401-04 - Diskonto Surat Perbendaharaan Negara WP Dalam Negeri",
    rate: 20,
  },
  {
    value: "28-401-05",
    label: "28-401-05 - Diskonto Surat Perbendaharaan Negara WP Luar Negeri",
    rate: 20,
  },
  {
    value: "28-402-01",
    label: "28-402-01 - Pengalihan Hak atas Tanah/Bangunan",
    rate: 10,
  },
  {
    value: "28-402-02",
    label: "28-402-02 - Pengalihan Rumah Sederhana/RS Sederhana",
    rate: 0,
  },
  {
    value: "28-402-03",
    label: "28-402-03 - Pengalihan Hak kepada Pemerintah/BUMN",
    rate: 2.5,
  },
  {
    value: "28-403-01",
    label: "28-403-01 - Persewaan Tanah/Bangunan",
    rate: 1,
  },
  {
    value: "28-404-01",
    label: "28-404-01 - Bunga Tabungan & Diskonto (Non DHE)",
    rate: 0,
  },
  {
    value: "28-404-02",
    label: "28-404-02 - Bunga Deposito IDR DHE (1 bulan)",
    rate: 10,
  },
  {
    value: "28-404-03",
    label: "28-404-03 - Bunga Deposito IDR DHE (3 bulan)",
    rate: 10,
  },
  {
    value: "28-404-04",
    label: "28-404-04 - Bunga Deposito IDR DHE (6 bulan+)",
    rate: 20,
  },
  {
    value: "28-404-05",
    label: "28-404-05 - Bunga Deposito USD DHE (1 bulan)",
    rate: 7.5,
  },
  {
    value: "28-404-06",
    label: "28-404-06 - Bunga Deposito USD DHE (3 bulan)",
    rate: 5,
  },
  {
    value: "28-404-07",
    label: "28-404-07 - Bunga Deposito USD DHE (6 bulan)",
    rate: 0,
  },
  {
    value: "28-404-08",
    label: "28-404-08 - Bunga Deposito USD DHE (6 bulan+)",
    rate: 10,
  },
  {
    value: "28-404-09",
    label: "28-404-09 - Bunga Deposito di Luar Negeri",
    rate: 7.5,
  },
  { value: "28-404-10", label: "28-404-10 - Diskonto Sertifikat BI", rate: 20 },
  { value: "28-404-11", label: "28-404-11 - Jasa Giro", rate: 20 },
  {
    value: "28-405-01",
    label: "28-405-01 - Hadiah Undian WP Dalam Negeri",
    rate: 25,
  },
  {
    value: "28-405-02",
    label: "28-405-02 - Hadiah Undian WP Luar Negeri",
    rate: 20,
  },
  {
    value: "28-406-01",
    label: "28-406-01 - Penjualan Saham Bursa (Non Pendiri)",
    rate: 0.1,
  },
  {
    value: "28-407-01",
    label: "28-407-01 - Penjualan Saham Bursa (Pendiri)",
    rate: 0.5,
  },
  {
    value: "28-408-01",
    label: "28-408-01 - Penjualan Saham Modal Ventura (Non Bursa)",
    rate: 5,
  },
  {
    value: "28-409-15",
    label: "28-409-15 - Jasa Konstruksi Kualifikasi Kecil",
    rate: 2,
  },
  {
    value: "28-409-16",
    label: "28-409-16 - Jasa Konstruksi Tanpa Sertifikat",
    rate: 4,
  },
  {
    value: "28-409-17",
    label: "28-409-17 - Jasa Konstruksi Kualifikasi Non-Kecil",
    rate: 3,
  },
  {
    value: "28-417-01",
    label: "28-417-01 - Bunga Simpanan Koperasi (≤ Rp240.000)",
    rate: 0,
  },
  {
    value: "28-417-02",
    label: "28-417-02 - Bunga Simpanan Koperasi (> Rp240.000)",
    rate: 10,
  },
  {
    value: "28-419-01",
    label: "28-419-01 - Dividen WP Orang Pribadi",
    rate: 10,
  },
  { value: "28-421-01", label: "28-421-01 - Uplift Hulu Migas", rate: 20 },
  {
    value: "28-423-01",
    label: "28-423-01 - Transaksi dengan WP PP 23/2018",
    rate: 0.5,
  },
  {
    value: "28-499-02",
    label: "28-499-02 - Penghasilan dari Kerja Sama dengan LPI",
    rate: 10,
  },
];

const PPh42Form = () => {
  const [selectedTax, setSelectedTax] = useState(null);
  const [grossIncome, setGrossIncome] = useState(0);
  const [calculatedTax, setCalculatedTax] = useState(0);

  const formatRupiah = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);

  const handleTaxChange = (selectedOption) => {
    setSelectedTax(selectedOption);
    calculateTax(grossIncome, selectedOption.rate);
  };

  const handleIncomeChange = (e) => {
    // const income = parseFloat(e.target.value) || 0;
    const income = e.target.value.replace(/\D/g, "");
    setGrossIncome(income);
    if (selectedTax) {
      calculateTax(income, selectedTax.rate);
    }
  };

  const calculateTax = (income, rate) => {
    const tax = (income * rate) / 100;
    setCalculatedTax(tax);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">PPh 4(2)</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Kode Objek Pajak</label>
        <Select
          options={taxOptions}
          value={selectedTax}
          onChange={handleTaxChange}
          placeholder="Pilih Kode Objek Pajak"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Penghasilan Bruto</label>
        <input
          type="text"
          value={formatRupiah(grossIncome)}
          onChange={handleIncomeChange}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="0"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Tarif</label>
        <input
          type="text"
          value={selectedTax ? `${selectedTax.rate} %` : "-"}
          readOnly
          className="w-full px-3 py-2 border rounded-md bg-gray-100"
        />
      </div>
      <div>
        <label className="block text-gray-700">PPh 4(2)</label>
        <input
          type="text"
          value={calculatedTax.toLocaleString("id-ID")}
          readOnly
          className="w-full px-3 py-2 border rounded-md bg-gray-100"
        />
      </div>
    </div>
  );
};

export default PPh42Form;
