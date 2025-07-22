import { useState } from "react";
import Select from "react-select";

const kodeObjekPajakList = [
  { kode: "24-101-01", deskripsi: "Dividen", tarif: 15 },
  { kode: "24-104-05", deskripsi: "Jasa Aktuaris", tarif: 2 },
  { kode: "24-104-08", deskripsi: "Jasa Arsitektur", tarif: 2 },
  {
    kode: "24-104-13",
    deskripsi:
      "Jasa Penambangan dan Jasa Penunjang di Bidang Usaha Panas Bumi dan Penambangan Minyak dan Gas Bumi (Migas)",
    tarif: 2,
  },
  {
    kode: "24-102-01",
    deskripsi: "Bunga Selain yang Dikenakan PPh Pasal 4 ayat (2)",
    tarif: 15,
  },
  { kode: "24-104-15", deskripsi: "Jasa Penebangan Hutan", tarif: 2 },
  { kode: "24-104-16", deskripsi: "Jasa Pengolahan Limbah", tarif: 2 },
  {
    kode: "24-104-17",
    deskripsi:
      "Jasa Penyedia Tenaga Kerja dan/atau Tenaga Ahli (Outsourcing Services)",
    tarif: 2,
  },
  {
    kode: "24-104-18",
    deskripsi: "Jasa Perantara dan/atau Keagenan",
    tarif: 2,
  },
  {
    kode: "24-104-19",
    deskripsi:
      "Jasa Bidang Perdagangan Surat-Surat Berharga, Kecuali yang Dilakukan Bursa Efek, Kustodian Sentral Efek Indonesia (KSEI) dan Kliring Penjaminan Efek Indonesia (KPEI)",
    tarif: 2,
  },
  {
    kode: "24-104-20",
    deskripsi:
      "Jasa Kustodian/Penyimpanan/Penitipan, Kecuali yang Dilakukan Oleh KSEI",
    tarif: 2,
  },
  {
    kode: "24-104-21",
    deskripsi: "Jasa Pengisian Suara (Dubbing) dan/atau Sulih Suara",
    tarif: 2,
  },
  { kode: "24-104-22", deskripsi: "Jasa Mixing Film", tarif: 2 },
  {
    kode: "24-104-23",
    deskripsi:
      "Jasa Pembuatan Sarana Promosi Film, Iklan, Poster, Foto, Slide, Klise, Banner, Pamphlet, Baliho dan Folder",
    tarif: 2,
  },
  {
    kode: "24-104-24",
    deskripsi:
      "Jasa Sehubungan Dengan Software Atau Hardware Atau Sistem Komputer, Termasuk Perawatan, Pemeliharaan dan Perbaikan.",
    tarif: 2,
  },
  { kode: "24-103-01", deskripsi: "Royalti", tarif: 15 },
  {
    kode: "24-104-25",
    deskripsi: "Jasa Pembuatan dan/atau Pengelolaan Website",
    tarif: 2,
  },
  {
    kode: "24-104-26",
    deskripsi: "Jasa Internet Termasuk Sambungannya",
    tarif: 2,
  },
  {
    kode: "24-104-27",
    deskripsi:
      "Jasa Penyimpanan, Pengolahan dan/atau Penyaluran Data, Informasi, dan/atau Program",
    tarif: 2,
  },
  {
    kode: "24-104-28",
    deskripsi:
      "Jasa Instalasi/Pemasangan Mesin, Peralatan, Listrik, Telepon, Air, Gas, Ac dan/atau Tv Kabel, Selain Yang Dilakukan Oleh Wajib Pajak Yang Ruang Lingkupnya Di Bidang Konstruksi dan Mempunyai Izin dan/atau Sertifikasi Sebagai Pengusaha Konstruksi;",
    tarif: 2,
  },
  {
    kode: "24-104-29",
    deskripsi:
      "Jasa Perawatan/Perbaikan/Pemeliharaan Mesin, Peralatan, Listrik, Telepon, Air, Gas, Ac dan/atau Tv Kabel, Selain Yang Dilakukan Oleh Wajib Pajak Yang Ruang Lingkupnya di Bidang Konstruksi dan Mempunyai Izin dan/atau Sertifikasi Sebagai Pengusaha Konstruksi",
    tarif: 2,
  },
  {
    kode: "24-104-30",
    deskripsi:
      "Jasa Perawatan Kendaraan dan/atau Alat Transportasi Darat, Laut dan Udara",
    tarif: 2,
  },
  { kode: "24-104-31", deskripsi: "Jasa Maklon", tarif: 2 },
  { kode: "24-104-32", deskripsi: "Jasa Penyelidikan dan Keamanan", tarif: 2 },
  {
    kode: "24-104-33",
    deskripsi: "Jasa Penyelenggara Kegiatan Atau Event Organizer",
    tarif: 2,
  },
  {
    kode: "24-104-34",
    deskripsi:
      "Jasa Penyediaan Tempat dan/atau Waktu Dalam Media Massa, Media Luar Ruang Atau Media Lain Untuk Penyampaian Informasi, dan/atau Jasa Periklanan",
    tarif: 2,
  },
  {
    kode: "24-100-01",
    deskripsi:
      "Hadiah, Penghargaan, Bonus dan Lainnya Selain yang Telah Dipotong PPh Pasal 21 Ayat (1) Huruf E UU PPh",
    tarif: 15,
  },
  { kode: "24-104-35", deskripsi: "Jasa Pembasmian Hama", tarif: 2 },
  {
    kode: "24-104-36",
    deskripsi: "Jasa Kebersihan Atau Cleaning Service",
    tarif: 2,
  },
  { kode: "24-104-37", deskripsi: "Jasa Sedot Septic Tank", tarif: 2 },
  { kode: "24-104-38", deskripsi: "Jasa Pemeliharaan Kolam", tarif: 2 },
  { kode: "24-104-39", deskripsi: "Jasa Katering Atau Tata Boga", tarif: 2 },
  { kode: "24-104-40", deskripsi: "Jasa Freight Forwarding", tarif: 2 },
  { kode: "24-104-41", deskripsi: "Jasa Logistik", tarif: 2 },
  { kode: "24-104-42", deskripsi: "Jasa Pengurusan Dokumen", tarif: 2 },
  { kode: "24-104-43", deskripsi: "Jasa Pengepakan", tarif: 2 },
  { kode: "24-104-44", deskripsi: "Jasa Loading dan Unloading", tarif: 2 },
  {
    kode: "24-100-02",
    deskripsi:
      "Sewa dan Penghasilan Lain Sehubungan Dengan Penggunaan Harta Kecuali Sewa Tanah dan/atau Bangunan yang Telah Dikenai PPh Pasal 4 Ayat (2) UU PPh.",
    tarif: 2,
  },
  {
    kode: "24-104-45",
    deskripsi:
      "Jasa Laboratorium dan/atau Pengujian Kecuali yang Dilakukan oleh Lembaga atau Institusi Pendidikan Dalam Rangka Penelitian Akademis",
    tarif: 2,
  },
  { kode: "24-104-46", deskripsi: "Jasa Pengelolaan Parkir", tarif: 2 },
  { kode: "24-104-47", deskripsi: "Jasa Penyondiran Tanah", tarif: 2 },
  {
    kode: "24-104-48",
    deskripsi: "Jasa Penyiapan dan/atau Pengolahan Lahan",
    tarif: 2,
  },
  {
    kode: "24-104-49",
    deskripsi: "Jasa Pembibitan dan/atau Penanaman Bibit",
    tarif: 2,
  },
  { kode: "24-104-50", deskripsi: "Jasa Pemeliharaan Tanaman", tarif: 2 },
  {
    kode: "24-104-51",
    deskripsi: "Jasa Pemanenan",
    tarif: 2,
  },
  {
    kode: "24-104-52",
    deskripsi:
      "Jasa Pengolahan Hasil Pertanian, Perkebunan, Perikanan, Peternakan dan/atau Perhutanan",
    tarif: 2,
  },
  { kode: "24-104-53", deskripsi: "Jasa Dekorasi", tarif: 2 },
  { kode: "24-104-54", deskripsi: "Jasa Pencetakan/Penerbitan", tarif: 2 },
  { kode: "24-104-01", deskripsi: "Jasa Teknik", tarif: 2 },
  { kode: "24-104-55", deskripsi: "Jasa Penerjemahan", tarif: 2 },
  {
    kode: "24-104-56",
    deskripsi:
      "Jasa Pengangkutan/Ekspedisi Kecuali Yang Telah Diatur Dalam Pasal 15 Undang-Undang Pajak Penghasilan",
    tarif: 2,
  },
  { kode: "24-104-57", deskripsi: "Jasa Pelayanan Pelabuhan", tarif: 2 },
  {
    kode: "24-104-58",
    deskripsi: "Jasa Pengangkutan Melalui Jalur Pipa",
    tarif: 2,
  },
  { kode: "24-104-59", deskripsi: "Jasa Pengelolaan Penitipan Anak", tarif: 2 },
  { kode: "24-104-60", deskripsi: "Jasa Pelatihan dan/atau Kursus", tarif: 2 },
  {
    kode: "24-104-61",
    deskripsi: "Jasa Pengiriman dan Pengisian Uang Ke Atm",
    tarif: 2,
  },
  { kode: "24-104-62", deskripsi: "Jasa Sertifikasi", tarif: 2 },
  { kode: "24-104-63", deskripsi: "Jasa Survey", tarif: 2 },
  { kode: "24-104-64", deskripsi: "Jasa Tester", tarif: 2 },
  { kode: "24-104-02", deskripsi: "Jasa Manajemen", tarif: 2 },
  {
    kode: "24-104-65",
    deskripsi:
      "Jasa Selain Jasa-Jasa Tersebut di Atas yang Pembayarannya Dibebankan pada APBN (Anggaran Pendapatan dan Belanja Negara) Atau APBD (Anggaran Pendapatan dan Belanja Daerah).",
    tarif: 2,
  },
  {
    kode: "24-104-66",
    deskripsi:
      "Jasa Penyelenggaraan Layanan Transaksi Pembayaran Terkait dengan Distribusi Token Oleh Penyelenggara Distribusi",
    tarif: 2,
  },
  {
    kode: "24-104-67",
    deskripsi: "Jasa Pemasaran dengan Media Voucer Oleh Penyelenggara Voucer",
    tarif: 2,
  },
  {
    kode: "24-104-68",
    deskripsi:
      "Jasa Penyelenggaraan Layanan Transaksi Pembayaran Terkait dengan Distribusi Voucer Oleh Penyelenggara Voucer dan Penyelenggara  Distribusi",
    tarif: 2,
  },
  {
    kode: "24-104-69",
    deskripsi:
      "Jasa Penyelenggaraan Program Loyalitas dan Penghargaan Pelanggan (Consumer Loyalty/Reward Program)  Oleh Penyelenggara Voucer",
    tarif: 2,
  },
  { kode: "24-104-03", deskripsi: "Jasa Konsultan", tarif: 2 },
];

export default function PPh23Calculator() {
  // const [selectedKode, setSelectedKode] = useState("");
  const [selectedKode, setSelectedKode] = useState(null);
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
  const handleKodeChange = (selectedOption) => {
    if (selectedOption) {
      const selectedItem = kodeObjekPajakList.find(
        (item) => item.kode === selectedOption.value
      );
      setSelectedKode(selectedOption); // simpan object selectedOption
      if (selectedItem) {
        setTarif(selectedItem.tarif);
        calculatePPh23(penghasilanBruto, selectedItem.tarif);
      }
    } else {
      setSelectedKode(null);
      setTarif(0);
      setPph23(0);
    }
  };

  // Handle input penghasilan bruto
  const handlePenghasilanChange = (event) => {
    const value = event.target.value.replace(/\D/g, "");
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
    <div
      className="min-h-screen flex justify-center bg-gray-100 px-4 bg-cover bg-center"
      style={{
        backgroundImage: "url('/REV1.jpg')",
      }}
    >
      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-xl p-6 w-full max-w-2xl mt-4 mb-20 sm:mb-40">
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
    </div>
  );
}
