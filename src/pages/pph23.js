import { useState } from "react";
import Select from "react-select";

const kodeObjekPajakList = [
  {
    kode: "24-100-01",
    deskripsi: "Hadiah, Penghargaan, Bonus dan Lainnya",
    tarif: 15,
  },
  {
    kode: "24-100-02",
    deskripsi: "Sewa dan penghasilan lain sehubungan dengan penggunaan Harta",
    tarif: 2,
  },
  { kode: "24-101-01", deskripsi: "Dividen", tarif: 15 },
  {
    kode: "24-102-01",
    deskripsi: "Bunga Selain yang dikenali PPh Pasal 4 ayat (2)",
    tarif: 15,
  },
  { kode: "24-103-01", deskripsi: "Royalti", tarif: 15 },
  { kode: "24-104-01", deskripsi: "Jasa Teknik", tarif: 2 },
  { kode: "24-104-02", deskripsi: "Jasa Manajemen", tarif: 2 },
  { kode: "24-104-03", deskripsi: "Jasa Konsultan", tarif: 2 },
  { kode: "24-104-04", deskripsi: "Jasa Penilai (Appraisal)", tarif: 2 },
  { kode: "24-104-05", deskripsi: "Jasa Aktuaris", tarif: 2 },
  { kode: "24-104-06", deskripsi: "Jasa Akuntansi", tarif: 2 },
  { kode: "24-104-07", deskripsi: "Jasa Hukum", tarif: 2 },
  { kode: "24-104-08", deskripsi: "Jasa Notaris", tarif: 2 },
  { kode: "24-104-09", deskripsi: "Jasa Perancang", tarif: 2 },
  { kode: "24-104-10", deskripsi: "Jasa Arsitektur", tarif: 2 },
  { kode: "24-104-11", deskripsi: "Jasa Perancang Perangkat Lunak", tarif: 2 },
  { kode: "24-104-12", deskripsi: "Jasa Desain", tarif: 2 },
  { kode: "24-104-13", deskripsi: "Jasa Teknik Sipil", tarif: 2 },
  { kode: "24-104-14", deskripsi: "Jasa Perawatan/Pemeliharaan", tarif: 2 },
  { kode: "24-104-15", deskripsi: "Jasa Kebersihan", tarif: 2 },
  { kode: "24-104-16", deskripsi: "Jasa Catering", tarif: 2 },
  { kode: "24-104-17", deskripsi: "Jasa Periklanan", tarif: 2 },
  { kode: "24-104-18", deskripsi: "Jasa Penelitian & Pengembangan", tarif: 2 },
  { kode: "24-104-19", deskripsi: "Jasa Pengelolaan Parkir", tarif: 2 },
  { kode: "24-104-20", deskripsi: "Jasa Penyedia Tenaga Kerja", tarif: 2 },
  { kode: "24-104-21", deskripsi: "Jasa Pelatihan", tarif: 2 },
  { kode: "24-104-22", deskripsi: "Jasa Penerjemahan", tarif: 2 },
  { kode: "24-104-23", deskripsi: "Jasa Fotografi", tarif: 2 },
  { kode: "24-104-24", deskripsi: "Jasa Videografi", tarif: 2 },
  { kode: "24-104-25", deskripsi: "Jasa Pengurusan Transportasi", tarif: 2 },
  { kode: "24-104-26", deskripsi: "Jasa Pemeliharaan Software", tarif: 2 },
  { kode: "24-104-27", deskripsi: "Jasa Pembuatan Perangkat Lunak", tarif: 2 },
  { kode: "24-104-28", deskripsi: "Jasa Keamanan", tarif: 2 },
  { kode: "24-104-29", deskripsi: "Jasa Penyewaan Peralatan", tarif: 2 },
  { kode: "24-104-30", deskripsi: "Jasa Pengangkutan Barang", tarif: 2 },
  { kode: "24-104-31", deskripsi: "Jasa Instalasi Mesin/Peralatan", tarif: 2 },
  { kode: "24-104-32", deskripsi: "Jasa Pengurusan Dokumen", tarif: 2 },
  { kode: "24-104-33", deskripsi: "Jasa Konstruksi", tarif: 2 },
  { kode: "24-104-34", deskripsi: "Jasa Pertambangan", tarif: 2 },
  { kode: "24-104-35", deskripsi: "Jasa Pengelolaan Limbah", tarif: 2 },
  { kode: "24-104-36", deskripsi: "Jasa Pembersihan Tangki", tarif: 2 },
  { kode: "24-104-37", deskripsi: "Jasa Inspeksi Teknik", tarif: 2 },
  { kode: "24-104-38", deskripsi: "Jasa Pelayanan Medis", tarif: 2 },
  { kode: "24-104-39", deskripsi: "Jasa Survey", tarif: 2 },
  { kode: "24-104-40", deskripsi: "Jasa Penyelidikan", tarif: 2 },
  { kode: "24-104-41", deskripsi: "Jasa Pengelolaan Informasi", tarif: 2 },
  { kode: "24-104-42", deskripsi: "Jasa Asistensi Medis", tarif: 2 },
  { kode: "24-104-43", deskripsi: "Jasa Pengelolaan Air", tarif: 2 },
  { kode: "24-104-44", deskripsi: "Jasa Laboratorium", tarif: 2 },
  { kode: "24-104-45", deskripsi: "Jasa Konsultasi Hukum", tarif: 2 },
  { kode: "24-104-46", deskripsi: "Jasa Sertifikasi", tarif: 2 },
  { kode: "24-104-47", deskripsi: "Jasa Pendidikan", tarif: 2 },
  { kode: "24-104-48", deskripsi: "Jasa Telekomunikasi", tarif: 2 },
  { kode: "24-104-49", deskripsi: "Jasa Event Organizer", tarif: 2 },
  { kode: "24-104-50", deskripsi: "Jasa Lelang", tarif: 2 },
  { kode: "24-104-51", deskripsi: "Jasa Logistik", tarif: 2 },
  { kode: "24-104-52", deskripsi: "Jasa Pemrosesan Data", tarif: 2 },
  { kode: "24-104-53", deskripsi: "Jasa Pembelian", tarif: 2 },
  { kode: "24-104-54", deskripsi: "Jasa Evaluasi", tarif: 2 },
  { kode: "24-104-55", deskripsi: "Jasa Audit", tarif: 2 },
  { kode: "24-104-56", deskripsi: "Jasa Perpajakan", tarif: 2 },
  { kode: "24-104-57", deskripsi: "Jasa Humas", tarif: 2 },
  { kode: "24-104-58", deskripsi: "Jasa Penelitian Pasar", tarif: 2 },
  { kode: "24-104-59", deskripsi: "Jasa Pengurusan Visa", tarif: 2 },
  { kode: "24-104-60", deskripsi: "Jasa Pembuatan Video", tarif: 2 },
  { kode: "24-104-61", deskripsi: "Jasa Pengelolaan Gudang", tarif: 2 },
  { kode: "24-104-62", deskripsi: "Jasa Reparasi", tarif: 2 },
  { kode: "24-104-63", deskripsi: "Jasa Pengolahan Data", tarif: 2 },
  { kode: "24-104-64", deskripsi: "Jasa Distribusi", tarif: 2 },
  { kode: "24-104-65", deskripsi: "Jasa Penyusunan Laporan", tarif: 2 },
  { kode: "24-104-66", deskripsi: "Jasa Penerbitan", tarif: 2 },
  { kode: "24-104-67", deskripsi: "Jasa Arkeologi", tarif: 2 },
  { kode: "24-104-68", deskripsi: "Jasa Pengelolaan Arsip", tarif: 2 },
  { kode: "24-104-69", deskripsi: "Jasa Penyewaan Software", tarif: 2 },
];

export default function PPh23Calculator() {
  const [selectedKode, setSelectedKode] = useState("");
  const [penghasilanBruto, setPenghasilanBruto] = useState("");
  const [tarif, setTarif] = useState(0);
  const [pph23, setPph23] = useState(0);

  // Format Rupiah
  const formatRupiah = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);

  // Handle perubahan dropdown
  const handleKodeChange = (event) => {
    const kode = event.target.value;
    setSelectedKode(kode);
    const selectedItem = kodeObjekPajakList.find((item) => item.kode === kode);
    if (selectedItem) {
      setTarif(selectedItem.tarif);
      calculatePPh23(penghasilanBruto, selectedItem.tarif);
    } else {
      setTarif(0);
      setPph23(0);
    }
  };

  // Handle input penghasilan bruto
  const handlePenghasilanChange = (event) => {
    const value = event.target.value.replace(/\D/g, ""); // Hanya angka
    setPenghasilanBruto(value);
    calculatePPh23(value, tarif);
  };

  // Hitung PPh 23
  const calculatePPh23 = (bruto, rate) => {
    const brutoValue = bruto ? parseInt(bruto, 10) : 0;
    const calculatedPPh = (brutoValue * rate) / 100;
    setPph23(calculatedPPh);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">PPh 23</h2>

      {/* Dropdown Kode Objek Pajak */}
      <div className="mb-4">
        <label className="block text-gray-700">Kode Objek Pajak</label>
        <Select
          options={kodeObjekPajakList.map((item) => ({
            value: item.kode,
            label: `${item.kode} - ${item.deskripsi}`,
          }))}
          value={selectedKode}
          onChange={handleKodeChange}
          placeholder="Pilih Kode Objek Pajak"
        />
      </div>

      {/* Input Penghasilan Bruto */}
      <div className="mb-4">
        <label className="block text-gray-600 mb-1">Penghasilan Bruto</label>
        <input
          type="text"
          className="w-full border p-2 rounded-md bg-white"
          value={formatRupiah(penghasilanBruto)}
          onChange={handlePenghasilanChange}
          placeholder="0"
        />
      </div>

      {/* Tarif Pajak */}
      <div className="mb-4">
        <label className="block text-gray-600 mb-1">Tarif</label>
        <input
          type="text"
          className="w-full border p-2 rounded-md bg-gray-100"
          value={`${tarif} %`}
          readOnly
        />
      </div>

      {/* Hasil Perhitungan PPh 23 */}
      <div>
        <label className="block text-gray-600 mb-1">PPh 23</label>
        <input
          type="text"
          className="w-full border p-2 rounded-md bg-gray-100"
          value={formatRupiah(pph23)}
          readOnly
        />
      </div>
    </div>
  );
}
