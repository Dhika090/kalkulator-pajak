import { useState } from "react";
import Select from "react-select";

const taxOptions = [
  {
    value: "28-409-25",
    label:
      "28-409-25 - Pekerjaan Konstruksi Terintegrasi yang Dilakukan oleh Penyedia Jasa yang Memiliki Sertifikat Badan Usaha",
    rate: 2.65,
  },
  {
    value: "28-409-26",
    label:
      "28-409-26 - Pekerjaan Konstruksi Terintegrasi yang Dilakukan oleh Penyedia Jasa yang Tidak Memiliki Sertifikat Badan Usaha",
    rate: 4,
  },
  {
    value: "28-409-27",
    label:
      "28-409-27 - Jasa Konsultansi Konstruksi yang Dilakukan oleh Penyedia Jasa yang Memiliki Sertifikat Badan Usaha atau Sertifikat Kompetensi Kerja untuk Usaha Orang Perseorangan",
    rate: 3.5,
  },
  {
    value: "28-409-28",
    label:
      "28-409-28 - Jasa Konsultansi Konstruksi yang Dilakukan oleh Penyedia Jasa yang Tidak Memiliki Sertifikat Badan Usaha atau Sertifikat Kompetensi Kerja untuk Usaha Orang Perseorangan",
    rate: 6,
  },
  {
    value: "28-409-08",
    label:
      "28-409-08 - Jasa Konstruksi Berupa Jasa Perencanaan Konstruksi (Dengan Kualifikasi Usaha)",
    rate: 4,
  },
  {
    value: "28-409-09",
    label:
      "28-409-09 - Jasa Konstruksi Berupa Jasa Perencanaan Konstruksi (Tanpa Kualifikasi Usaha)",
    rate: 6,
  },
  {
    value: "28-409-10",
    label:
      "28-409-10 - Jasa Konstruksi Berupa Jasa Pelaksanaan Konstruksi (Kualifikasi Usaha Kecil)",
    rate: 2,
  },
  {
    value: "28-409-11",
    label:
      "28-409-11 - Jasa Konstruksi Berupa Jasa Pelaksanaan Konstruksi (Kualifikasi Usaha Menengah dan Besar)",
    rate: 3,
  },
  {
    value: "28-409-12",
    label:
      "28-409-12 - Jasa Konstruksi Berupa Jasa Pelaksanaan Konstruksi (Tanpa Kualifikasi Usaha)",
    rate: 4,
  },
  {
    value: "28-409-13",
    label:
      "28-409-13 - Jasa Konstruksi Berupa Jasa Pengawasan Konstruksi (Dengan Kualifikasi Usaha)",
    rate: 4,
  },
  {
    value: "28-409-14",
    label:
      "28-409-14 - Jasa Konstruksi Berupa Jasa Pengawasan Konstruksi (Tanpa Kualifikasi Usaha)",
    rate: 6,
  },
  {
    value: "28-419-01",
    label:
      "28-419-01 - Dividen yang Diterima/Diperoleh Wajib Pajak Orang Pribadi Dalam Negeri",
    rate: 10,
  },
  {
    value: "28-423-01",
    label:
      "28-423-01 - Pemotongan atau pemungutan PPh atas penjualan barang atau penyerahan jasa yang dilakukan oleh Wajib Pajak dengan peredaran bruto tertentu sesuai dengan Peraturan Pemerintah Nomor 23 Tahun 2018 atau Peraturan Pemerintah Nomor 55 Tahun 2022.",
    rate: 5,
  },
  {
    value: "28-423-02",
    label:
      "28-423-02 - Pemotongan atau pemungutan PPh atas transaksi pembelian yang dilakukan oleh Wajib Pajak dengan peredaran bruto tertentu sesuai dengan Peraturan Pemerintah Nomor 55 Tahun 2022.",
    rate: 0,
  },
  {
    value: "28-403-02",
    label: "28-403-02 - Persewaan Tanah dan/atau Bangunan",
    rate: 10,
  },
  {
    value: "28-405-01",
    label: "28-405-01 - Hadiah Undian",
    rate: 25,
  },
  {
    value: "28-409-22",
    label:
      "28-409-22 - Pekerjaan Konstruksi yang Dilakukan oleh Penyedia Jasa yang Memiliki Sertifikat Badan Usaha Kualifikasi Kecil atau Sertifikat Kompetensi Kerja untuk Usaha Orang Perseorangan",
    rate: 1.75,
  },
  {
    value: "28-409-23",
    label:
      "28-409-23 - Pekerjaan Konstruksi yang Dilakukan oleh Penyedia Jasa yang Tidak Memiliki Sertifikat Badan Usaha Atau Sertifikat Kompetensi Kerja untuk Usaha Orang Perseorangan",
    rate: 4,
  },
  {
    value: "28-409-24",
    label:
      "28-409-24 - Pekerjaan Konstruksi yang Dilakukan oleh Penyedia Jasa yang Memiliki Sertifikat Selain Sertifikat Badan Usaha Kualifikasi Kecil atau Sertifikat Kompetensi Kerja untuk Usaha Orang Perseorangan",
    rate: 2.65,
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
    <div
      className="min-h-screen flex justify-center bg-gray-100 px-4 bg-cover bg-center"
      style={{
        backgroundImage: "url('/REV1.jpg')",
      }}
    >
      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-xl p-6 w-full max-w-2xl mt-4 mb-20 sm:mb-40 ">
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
    </div>
  );
};

export default PPh42Form;
