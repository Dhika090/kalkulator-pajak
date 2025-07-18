import { useState } from "react";
import * as XLSX from "xlsx";
import "../App.css";

const tarifPajakBerlapisA = [
  { batas: 5400000, tarif: 0.0 },
  { batas: 5650000, tarif: 0.25 },
  { batas: 5950000, tarif: 0.5 },
  { batas: 6300000, tarif: 0.75 },
  { batas: 6750000, tarif: 1.0 },
  { batas: 7500000, tarif: 1.25 },
  { batas: 8550000, tarif: 1.5 },
  { batas: 9650000, tarif: 1.75 },
  { batas: 10050000, tarif: 2.0 },
  { batas: 10350000, tarif: 2.25 },
  { batas: 10700000, tarif: 2.5 },
  { batas: 11050000, tarif: 3.0 },
  { batas: 11600000, tarif: 3.5 },
  { batas: 12500000, tarif: 4.0 },
  { batas: 13750000, tarif: 5.0 },
  { batas: 15100000, tarif: 6.0 },
  { batas: 16950000, tarif: 7.0 },
  { batas: 19750000, tarif: 8.0 },
  { batas: 24150000, tarif: 9.0 },
  { batas: 26450000, tarif: 10.0 },
  { batas: 28000000, tarif: 11.0 },
  { batas: 30050000, tarif: 12.0 },
  { batas: 32400000, tarif: 13.0 },
  { batas: 35400000, tarif: 14.0 },
  { batas: 39100000, tarif: 15.0 },
  { batas: 43850000, tarif: 16.0 },
  { batas: 47800000, tarif: 17.0 },
  { batas: 51400000, tarif: 18.0 },
  { batas: 56300000, tarif: 19.0 },
  { batas: 62200000, tarif: 20.0 },
  { batas: 68600000, tarif: 21.0 },
  { batas: 77500000, tarif: 22.0 },
  { batas: 89000000, tarif: 23.0 },
  { batas: 103000000, tarif: 24.0 },
  { batas: 125000000, tarif: 25.0 },
  { batas: 157000000, tarif: 26.0 },
  { batas: 206000000, tarif: 27.0 },
  { batas: 337000000, tarif: 28.0 },
  { batas: 454000000, tarif: 29.0 },
  { batas: 550000000, tarif: 30.0 },
  { batas: 695000000, tarif: 31.0 },
  { batas: 910000000, tarif: 32.0 },
  { batas: 1400000000, tarif: 33.0 },
  { batas: Infinity, tarif: 34.0 },
];

const tarifPajakBerlapisB = [
  { batas: 6200000, tarif: 0.0 },
  { batas: 6500000, tarif: 0.25 },
  { batas: 6850000, tarif: 0.5 },
  { batas: 7300000, tarif: 0.75 },
  { batas: 9200000, tarif: 1.0 },
  { batas: 10750000, tarif: 1.5 },
  { batas: 11250000, tarif: 2.0 },
  { batas: 11600000, tarif: 2.5 },
  { batas: 12600000, tarif: 3.0 },
  { batas: 13600000, tarif: 4.0 },
  { batas: 14950000, tarif: 5.0 },
  { batas: 16400000, tarif: 6.0 },
  { batas: 18450000, tarif: 7.0 },
  { batas: 21850000, tarif: 8.0 },
  { batas: 26000000, tarif: 9.0 },
  { batas: 27700000, tarif: 10.0 },
  { batas: 29350000, tarif: 11.0 },
  { batas: 31450000, tarif: 12.0 },
  { batas: 33950000, tarif: 13.0 },
  { batas: 37100000, tarif: 14.0 },
  { batas: 41100000, tarif: 15.0 },
  { batas: 45800000, tarif: 16.0 },
  { batas: 49500000, tarif: 17.0 },
  { batas: 53800000, tarif: 18.0 },
  { batas: 58500000, tarif: 19.0 },
  { batas: 64000000, tarif: 20.0 },
  { batas: 71000000, tarif: 21.0 },
  { batas: 80000000, tarif: 22.0 },
  { batas: 93000000, tarif: 23.0 },
  { batas: 109000000, tarif: 24.0 },
  { batas: 129000000, tarif: 25.0 },
  { batas: 163000000, tarif: 26.0 },
  { batas: 211000000, tarif: 27.0 },
  { batas: 374000000, tarif: 28.0 },
  { batas: 459000000, tarif: 29.0 },
  { batas: 555000000, tarif: 30.0 },
  { batas: 704000000, tarif: 31.0 },
  { batas: 957000000, tarif: 32.0 },
  { batas: 1405000000, tarif: 33.0 },
  { batas: Infinity, tarif: 34.0 },
];

const tarifPajakBerlapisC = [
  { batas: 6600000, tarif: 0.0 },
  { batas: 6950000, tarif: 0.25 },
  { batas: 7350000, tarif: 0.5 },
  { batas: 7800000, tarif: 0.75 },
  { batas: 8850000, tarif: 1.0 },
  { batas: 9800000, tarif: 1.25 },
  { batas: 10950000, tarif: 1.5 },
  { batas: 11200000, tarif: 1.75 },
  { batas: 12050000, tarif: 2.0 },
  { batas: 12950000, tarif: 3.0 },
  { batas: 14150000, tarif: 4.0 },
  { batas: 15550000, tarif: 5.0 },
  { batas: 17050000, tarif: 6.0 },
  { batas: 19500000, tarif: 7.0 },
  { batas: 22700000, tarif: 8.0 },
  { batas: 26600000, tarif: 9.0 },
  { batas: 28100000, tarif: 10.0 },
  { batas: 30100000, tarif: 11.0 },
  { batas: 32600000, tarif: 12.0 },
  { batas: 35400000, tarif: 13.0 },
  { batas: 38900000, tarif: 14.0 },
  { batas: 43000000, tarif: 15.0 },
  { batas: 47400000, tarif: 16.0 },
  { batas: 51200000, tarif: 17.0 },
  { batas: 55800000, tarif: 18.0 },
  { batas: 60400000, tarif: 19.0 },
  { batas: 66700000, tarif: 20.0 },
  { batas: 74500000, tarif: 21.0 },
  { batas: 83200000, tarif: 22.0 },
  { batas: 95600000, tarif: 23.0 },
  { batas: 110000000, tarif: 24.0 },
  { batas: 134000000, tarif: 25.0 },
  { batas: 169000000, tarif: 26.0 },
  { batas: 221000000, tarif: 27.0 },
  { batas: 390000000, tarif: 28.0 },
  { batas: 463000000, tarif: 29.0 },
  { batas: 561000000, tarif: 30.0 },
  { batas: 709000000, tarif: 31.0 },
  { batas: 965000000, tarif: 32.0 },
  { batas: 1419000000, tarif: 33.0 },
  { batas: Infinity, tarif: 34.0 },
];
const kodePajakOptions = [
  { value: "21-100-03", label: "Pegawai Tidak Tetap" },
  { value: "21-100-04", label: "Distributor Pemasaran Berjenjang" },
  { value: "21-100-05", label: "Agen Asuransi" },
  { value: "21-100-06", label: "Penjaja Barang Dagangan" },
  { value: "21-100-07", label: "Tenaga Ahli" },
  { value: "21-100-09", label: "Bukan Pegawai Lainnya" },
  { value: "21-100-10", label: "Anggota Dewan Komisaris atau Dewan Pengawas" },
  { value: "21-100-11", label: "Mantan Pegawai (Bonus, Tantiem, dsb.)" },
  { value: "21-100-12", label: "Pegawai yang Menarik Uang Pensiun" },
  { value: "21-100-13", label: "Peserta Kegiatan" },
];

// PPH 21 bulanan
const KodeObjekPajak = [
  { value: "21-100-01", label: "21-100-01 - Pegawai Tetap" },
  { value: "21-100-02", label: "21-100-02 - Penerima Pensiun Berkala" },
];

const KodeObjekPajakfinal = [
  {
    value: "21-401-01",
    label: "21-401-01 - Uang Pesangon yang Dibayarkan Sekaligus",
  },
  {
    value: "21-401-02",
    label:
      "21-401-02 - Uang Manfaat Pensiun, Tunjangan Hari Tua, atau Jaminan Hari Tua yang diBayarkan Sekaligus",
  },
];

const jenisOptions = [
  {
    value: "non-bulanan",
    label: "21 - 100 - 03 Upah Pegawai Tidak Tetap Non Bulanan",
  },
  { value: "bulanan", label: "21 - 100 - 03 Upah Pegawai Tidak Tetap Bulanan" },
];

const formatRupiahInput = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
};

const ptkpOptions = [
  { label: "TK/0 - TER A", value: 54000000 },
  { label: "TK/1 - TER A", value: 58500000 },
  { label: "TK/2 - TER A", value: 63000000 },
  { label: "TK/3 - TER B", value: 67500000 },
  { label: "K/0 - TER B", value: 58500000 },
  { label: "K/1 - TER B", value: 63000000 },
  { label: "K/2 - TER B", value: 67500000 },
  { label: "K/3 - TER C", value: 72000000 },
];

const Perhitungan = [
  { value: "setahun", label: "Setahun" },
  { value: "disetahunkan", label: "Disetahunkan" },
];

const bulanOptions = [
  { value: "01", label: "Januari" },
  { value: "02", label: "Februari" },
  { value: "03", label: "Maret" },
  { value: "04", label: "April" },
  { value: "05", label: "Mei" },
  { value: "06", label: "Juni" },
  { value: "07", label: "Juli" },
  { value: "08", label: "Agustus" },
  { value: "09", label: "September" },
  { value: "10", label: "Oktober" },
  { value: "11", label: "November" },
  { value: "12", label: "Desember" },
];

export default function KalkulatorPajak() {
  const [jenisPemotongan, setJenisPemotongan] = useState("");
  const [penghasilanBruto, setPenghasilanBruto] = useState(0);
  const [skema, setSkema] = useState("gross");
  const [dpp, setDpp] = useState(0);
  const [tarif, setTarif] = useState(0);
  const [pph21, setPph21] = useState(0);
  const [includePotonganPph21, setIncludePotonganPph21] = useState(false);
  const [potonganPph21, setPotonganPph21] = useState(0);
  const [ptkp, setPtkp] = useState(ptkpOptions[0].value);
  const [masaAwal, setMasaAwal] = useState("");
  const [masaAkhir, setMasaAkhir] = useState("");
  // Pajak Tidak Final:
  const [kodePajak, setKodePajak] = useState("");
  const [jenis, setJenis] = useState("");

  const [inputs, setInputs] = useState(Array(7).fill(0));
  const [inputsPengurangan, setInputsPengurangan] = useState(Array(3).fill(0));
  const [manualInputs, setManualInputs] = useState({
    14: "0", // Penghasilan Neto Sebelumnya
    19: "0", // PPh Dipungut Sebelumnya
  });

  const filteredBulanAkhir = masaAwal
    ? bulanOptions.filter((bulan) => bulan.value >= masaAwal)
    : bulanOptions;

  const totalBruto = inputs.reduce((acc, val) => acc + Number(val), 0);
  const totalPengurangan = inputsPengurangan.reduce(
    (acc, val) => acc + Number(val),
    0
  );

  const pphDipungutSebelumnya = Number(manualInputs[19]) || 0;

  const totalNeto = totalBruto - totalPengurangan;

  // **Hitung jumlah bulan kerja**
  const bulanKerja =
    masaAwal && masaAkhir ? parseInt(masaAkhir) - parseInt(masaAwal) + 1 : 12;

  // **Hitung Penghasilan Neto Setahun**
  const penghasilanNetoSetahun =
    kodePajak === "disetahunkan" ? totalNeto * (12 / bulanKerja) : totalNeto;

  const penghasilanNetoSebelumnya = manualInputs[14]
    ? (Number(manualInputs[14]) / bulanKerja) * 12
    : 0;

  // **Jumlah Penghasilan Neto untuk PPh 21**
  const jumlahPenghasilanNetoPPh21 =
    penghasilanNetoSetahun + penghasilanNetoSebelumnya;

  // **Hitung Penghasilan Kena Pajak**
  const penghasilanKenaPajak = Math.max(jumlahPenghasilanNetoPPh21 - ptkp, 0);

  // **Hitung PPh Pasal 21 dengan tarif progresif**
  const hitungPPh21 = (pkp) => {
    let pajak = 0;
    if (pkp > 500000000) {
      pajak += (pkp - 500000000) * 0.3;
      pkp = 500000000;
    }
    if (pkp > 250000000) {
      pajak += (pkp - 250000000) * 0.25;
      pkp = 250000000;
    }
    if (pkp > 50000000) {
      pajak += (pkp - 50000000) * 0.15;
      pkp = 50000000;
    }
    pajak += pkp * 0.05;
    return pajak;
  };

  const pph21Setahun = hitungPPh21(penghasilanKenaPajak);

  // **Hitung PPh 21 Masa Pajak**
  const pph21MasaPajak = (pph21Setahun / 12) * bulanKerja;

  // **Hitung PPh 21 Terutang**
  const pphTerutang = Math.max(pph21MasaPajak - pphDipungutSebelumnya, 0);

  // **Hitung Penghasilan Bruto**
  const getTarifPajak = (label) => {
    if (["TK/0", "TK/1", "K/0"].includes(label)) return tarifPajakBerlapisA;
    if (["TK/2", "TK/3", "K/1", "K/2"].includes(label))
      return tarifPajakBerlapisB;
    if (["K/3"].includes(label)) return tarifPajakBerlapisC;
    return tarifPajakBerlapisA; // Default
  };

  const handleHitungPajak = () => {
    const selectedOption = ptkpOptions.find((opt) => opt.value === ptkp);
    const tarifPajak = getTarifPajak(selectedOption.label);

    let totalPenghasilan = penghasilanBruto;
    if (includePotonganPph21) {
      totalPenghasilan += potonganPph21;
    }

    const tarifPajakDiterapkan =
      tarifPajak.find((item) => totalPenghasilan <= item.batas)?.tarif || 0;

    let dppBaru = totalPenghasilan;
    if (skema === "grossup") {
      dppBaru = totalPenghasilan / (1 - tarifPajakDiterapkan / 100);
    }

    const pph21Baru = (dppBaru * tarifPajakDiterapkan) / 100;

    setDpp(dppBaru);
    setTarif(tarifPajakDiterapkan);
    setPph21(pph21Baru);
  };

  // Fungsi untuk menghitung Pajak Final
  const handleHitungPajakFinal = () => {
    let totalDpp =
      penghasilanBruto + (includePotonganPph21 ? potonganPph21 : 0);
    setDpp(totalDpp);
  };

  //   Fungsi pegawai tidak tetap Pajak Non Bulanan
  const handleHitungPajakNonBulanan = () => {
    let bruto = Number(penghasilanBruto) || 0;
    let dppValue = bruto;
    let tarifValue = 5;

    if (bruto <= 2500000) {
      tarifValue = 0.5;
    } else {
      dppValue = bruto / 2;
      tarifValue = 5;
    }

    let pph21Value = dppValue * (tarifValue / 100);

    setDpp(dppValue);
    setTarif(tarifValue);
    setPph21(pph21Value);
  };

  const handleHitungKodePajakTidakFinal = () => {
    let bruto = Number(penghasilanBruto) || 0;
    const tarif = 5;
    let dppValue = bruto / 2;
    let pph21Value = dppValue * (tarif / 100);

    setDpp(dppValue);
    setPph21(pph21Value);
  };

  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value ? parseInt(value) : 0;
    setInputs(newInputs);
  };

  const handleChangePengurangan = (index, value) => {
    const newInputs = [...inputsPengurangan];
    newInputs[index] = value ? parseInt(value) : 0;
    setInputsPengurangan(newInputs);
  };

  const handleManualInput = (index, value) => {
    setManualInputs((prev) => ({
      ...prev,
      [index]: value.replace(/[^\d]/g, ""),
    }));
  };
  const handleRupiahInput = (no, value) => {
    const numericValue = value.replace(/\D/g, "");

    handleManualInput(no, numericValue);
  };

  // import excel pph 21 bulanan
  const handleImportExcel = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".xlsx, .xls";
    input.onchange = async (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          const data = evt.target.result;
          const workbook = XLSX.read(data, { type: "binary" });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);

          console.log("Isi Excel:", jsonData);

          if (jsonData.length > 0) {
            const record = jsonData[0];

            setJenisPemotongan(record.JenisPemotongan || "");
            setKodePajak(record.KodePajak || "");
            setPtkp(record.PTKP || 54000000);
            setPenghasilanBruto(record.PenghasilanBruto || 0);
            setSkema(record.Skema || "gross");
            setIncludePotonganPph21(record.IncludePotonganPph21 === "Ya");
            if (record.PotonganPph21) {
              setPotonganPph21(record.PotonganPph21);
            }
          }
        };
        reader.readAsBinaryString(file);
      }
    };
    input.click();
  };

  // import excel pph 21 final
  const handleImportExcelPph21Final = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".xlsx, .xls";

    input.onchange = async (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          const data = evt.target.result;
          const workbook = XLSX.read(data, { type: "binary" });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);

          console.log("Isi Excel:", jsonData);

          if (jsonData.length > 0) {
            const record = jsonData[0];

            // ✅ Clear semua inputan dulu
            setKodePajak("");
            setPenghasilanBruto(0);
            setIncludePotonganPph21(false);
            setPotonganPph21(0);

            // ✅ Setelah clear, baru isi dari excel
            setTimeout(() => {
              setKodePajak(record.KodePajak || "");
              setPenghasilanBruto(Number(record.PenghasilanBruto) || 0);
              setIncludePotonganPph21(record.IncludePotonganPph21 === "Ya");
              setPotonganPph21(Number(record.PotonganPph21) || 0);
            }, 0); // kasih delay 0ms supaya clear dulu baru set data baru
          }
        };
        reader.readAsBinaryString(file);
      }
    };

    input.click();
  };

  return (
    <div className="min-h-screen flex justify-center bg-gray-100 px-4 sm:px-4 w-full max-w-content">
      <div className="bg-white shadow-lg rounded-lg mb-8 mt-8 p-4 sm:p-4 w-full max-w-2xl">
        <h2 className="text-xl font-bold mb-4 text-center">
          KALKULATOR PAJAK PPh 21
        </h2>
        <div className="mb-3">
          <label>Jenis Pemotongan</label>
          <select
            value={jenisPemotongan}
            onChange={(e) => {
              setJenisPemotongan(e.target.value);
              setPenghasilanBruto(0);
            }}
            className="border p-2 w-full rounded-md"
          >
            <option value="" disabled>
              Pilih Jenis Pemotongan
            </option>
            <option value="PPh 21 Bulanan">PPh 21 Bulanan</option>
            <option value="PPh 21 Final">PPh 21 Final</option>
            <option value="PPh 21 Tidak Final">PPh 21 Tidak Final</option>
            <option value="PPh 21 Tahunan">PPh 21 Tahunan (A1/A2)</option>
          </select>
        </div>
        {jenisPemotongan === "PPh 21 Bulanan" && (
          <div>
            <div className="mb-3">
              <label>Kode Objek Pajak</label>
              <select
                value={kodePajak}
                onChange={(e) => {
                  setKodePajak(e.target.value);
                  setPenghasilanBruto(0);
                }}
                className="border p-2 w-full rounded-md"
              >
                <option value="" disabled>
                  Pilih Kode Pajak
                </option>
                {KodeObjekPajak.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label>(PTKP)</label>
              <select
                value={ptkp}
                onChange={(e) => setPtkp(Number(e.target.value))}
                className="border p-2 w-full rounded-md"
              >
                <option value="" disabled>
                  Pilih PTKP
                </option>
                {ptkpOptions.map((option) => (
                  <option key={option.label} value={option.value}>
                    {option.label} - {formatRupiahInput(option.value)}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label>Penghasilan Bruto</label>
              <input
                type="text"
                value={formatRupiahInput(String(penghasilanBruto))}
                onChange={(e) => {
                  let numericValue =
                    Number(e.target.value.replace(/\D/g, "")) || 0;
                  setPenghasilanBruto(numericValue);
                }}
                className="border p-2 w-full rounded-md"
              />
            </div>

            <div className="mb-3">
              <label>Skema Penghitungan</label>
              <select
                value={skema}
                onChange={(e) => setSkema(e.target.value)}
                className="border p-2 w-full rounded-md"
              >
                <option value="gross">Gross</option>
                <option value="grossup">Gross Up</option>
              </select>
            </div>

            <div className="mb-3 flex items-center">
              <input
                type="checkbox"
                checked={includePotonganPph21}
                onChange={() => setIncludePotonganPph21(!includePotonganPph21)}
                className="mr-2"
              />
              <label>
                Penghasilan yang telah dipotong PPh Pasal 21 pada masa pajak
                yang sama
              </label>
            </div>

            {includePotonganPph21 && (
              <div className="mb-3">
                <label>Masukkan Penghasilan Dipotong PPh 21</label>
                <input
                  type="text"
                  value={formatRupiahInput(String(potonganPph21))}
                  onChange={(e) => {
                    let numericValue =
                      Number(e.target.value.replace(/\D/g, "")) || 0;
                    setPotonganPph21(numericValue);
                  }}
                  className="border p-2 w-full rounded-md"
                />
              </div>
            )}

            <div className="space-y-3 mt-4">
              <button
                onClick={handleHitungPajak}
                className="bg-yellow-500 text-white w-full py-2 rounded-md hover:bg-yellow-600"
              >
                Hitung
              </button>
              <button
                onClick={handleImportExcel}
                className="bg-green-500 text-white w-full py-2 rounded-md hover:bg-green-600"
              >
                Import Excel
              </button>
            </div>

            <div className="mt-4 p-4 border rounded-md bg-gray-50">
              <h3 className="font-bold">Hasil Perhitungan PPh 21</h3>
              <div className="flex justify-between">
                <span>DPP</span>
                <span>{formatRupiahInput(dpp)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tarif</span>
                <span>{tarif} %</span>
              </div>
              <div className="flex justify-between">
                <span>PPh 21</span>
                <span>{formatRupiahInput(pph21)}</span>
              </div>
            </div>
          </div>
        )}
        {jenisPemotongan === "PPh 21 Final" && (
          <div>
            <div className="mb-3">
              <label>Kode Objek Pajak</label>
              <select
                value={kodePajak}
                onChange={(e) => {
                  setKodePajak(e.target.value);
                  setPenghasilanBruto(0);
                }}
                className="border p-2 w-full rounded-md"
              >
                <option value="" disabled>
                  Pilih Kode Pajak
                </option>
                {KodeObjekPajakfinal.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex mb-3 items-center space-x-2">
              <span className="text-green-500 text-xl">✔</span>
              <span>Transaksi dilakukan dalam kurun waktu 2 tahun</span>
            </div>

            <div className="mb-3">
              <label>Penghasilan Bruto</label>
              <input
                type="text"
                value={formatRupiahInput(String(penghasilanBruto))}
                onChange={(e) => {
                  let numericValue =
                    Number(e.target.value.replace(/\D/g, "")) || 0;
                  setPenghasilanBruto(numericValue);
                }}
                className="border p-2 w-full rounded-md"
              />
            </div>

            <div className="mb-3 flex items-center">
              <input
                type="checkbox"
                checked={includePotonganPph21}
                onChange={() => setIncludePotonganPph21(!includePotonganPph21)}
                className="mr-2"
              />
              <label>Akumulasi Penghasilan Bruto Sebelumnya</label>
            </div>

            {includePotonganPph21 && (
              <div className="mb-3">
                <label>Ada</label>
                <input
                  type="text"
                  value={formatRupiahInput(String(potonganPph21))}
                  onChange={(e) => {
                    let numericValue =
                      Number(e.target.value.replace(/\D/g, "")) || 0;
                    setPotonganPph21(numericValue);
                  }}
                  className="border p-2 w-full rounded-md"
                />
              </div>
            )}

            {/* Tombol Hitung */}
            <div className="space-y-2">
              <button
                onClick={handleHitungPajakFinal}
                className="bg-yellow-500 text-white w-full py-2 rounded-md hover:bg-yellow-600"
              >
                Hitung
              </button>

              {/* Tombol Import Excel */}
              <button
                onClick={handleImportExcelPph21Final}
                className="bg-green-500 text-white w-full py-2 rounded-md hover:bg-green-600 mb-3"
              >
                Import Excel
              </button>
            </div>

            <div className="mt-4 p-4 border rounded-md bg-gray-50">
              <h3 className="font-bold">Hasil Perhitungan PPh 21</h3>
              <div className="flex justify-between">
                <span>DPP</span>
                <span>{formatRupiahInput(dpp)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tarif</span>
                <span>0 %</span>
              </div>
              <div className="flex justify-between">
                <span>PPh 21</span>
                <span>RPp. 0</span>
              </div>
            </div>
          </div>
        )}
        {jenisPemotongan === "PPh 21 Tidak Final" && (
          <div>
            {/* Dropdown Kode Pajak */}
            <div className="mb-3">
              <label>Kode Pajak</label>
              <select
                value={kodePajak}
                onChange={(e) => {
                  setKodePajak(e.target.value);
                  setPenghasilanBruto(0);
                }}
                className="border p-2 w-full rounded-md"
              >
                <option value="" disabled>
                  Pilih Kode Pajak
                </option>
                {kodePajakOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Dropdown Jenis (Jika Pegawai Tidak Tetap dipilih) */}
            <div>
              {kodePajak === "21-100-03" && (
                <div className="mb-3">
                  <label>Jenis</label>
                  <select
                    value={jenis}
                    onChange={(e) => setJenis(e.target.value)}
                    className="border p-2 w-full rounded-md"
                  >
                    <option value="" disabled>
                      Pilih Jenis
                    </option>
                    {jenisOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  {/* Input Penghasilan Bruto (Jika jenis tertentu dipilih) */}
                  {jenis === "non-bulanan" && (
                    <>
                      <div className="mb-3">
                        <label>Penghasilan Bruto</label>
                        <input
                          type="text"
                          value={formatRupiahInput(String(penghasilanBruto))}
                          onChange={(e) => {
                            let numericValue =
                              Number(e.target.value.replace(/\D/g, "")) || 0;
                            setPenghasilanBruto(numericValue);
                          }}
                          className="border p-2 w-full rounded-md"
                        />
                      </div>

                      <button
                        onClick={handleHitungPajakNonBulanan}
                        className="bg-yellow-500 text-white w-full py-2 rounded-md hover:bg-yellow-600"
                      >
                        Hitung
                      </button>

                      <div className="mt-4 p-4 border rounded-md bg-gray-50">
                        <h3 className="font-bold">
                          Hasil Perhitungan PPh 21 Non-Bulanan
                        </h3>
                        <div className="flex justify-between">
                          <span>DPP</span>
                          <span>{formatRupiahInput(dpp)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tarif</span>
                          <span>{tarif} %</span>
                        </div>
                        <div className="flex justify-between">
                          <span>PPh 21</span>
                          <span>{formatRupiahInput(pph21)}</span>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Dropdown PTKP (Jika jenis = Bulanan) */}
                  {jenis === "bulanan" && (
                    <>
                      <div className="mb-3">
                        <label>Penghasilan Bruto</label>
                        <input
                          type="text"
                          value={formatRupiahInput(String(penghasilanBruto))}
                          onChange={(e) => {
                            let numericValue =
                              Number(e.target.value.replace(/\D/g, "")) || 0;
                            setPenghasilanBruto(numericValue);
                          }}
                          className="border p-2 w-full rounded-md"
                        />
                      </div>

                      <div className="mb-3">
                        <label>(PTKP)</label>
                        <select
                          value={ptkp}
                          onChange={(e) => setPtkp(Number(e.target.value))}
                          className="border p-2 w-full rounded-md"
                        >
                          {ptkpOptions.map((option) => (
                            <option key={option.label} value={option.value}>
                              {option.label} - {formatRupiahInput(option.value)}
                            </option>
                          ))}
                        </select>
                      </div>

                      <button
                        onClick={handleHitungPajak}
                        className="bg-yellow-500 text-white w-full py-2 rounded-md hover:bg-yellow-600"
                      >
                        Hitung
                      </button>
                      <div className="mt-4 p-4 border rounded-md bg-gray-50">
                        <h3 className="font-bold">
                          Hasil Perhitungan PPh 21 Bulanan
                        </h3>
                        <div className="flex justify-between">
                          <span>DPP</span>
                          <span>{formatRupiahInput(dpp)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tarif</span>
                          <span>{tarif} %</span>
                        </div>
                        <div className="flex justify-between">
                          <span>PPh 21</span>
                          <span>{formatRupiahInput(pph21)}</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/*  Distributor Pemasaran Berjenjang" */}
            <div>
              {kodePajak === "21-100-04" && (
                <>
                  <div className="mb-3">
                    <label>Penghasilan Bruto</label>
                    <input
                      type="text"
                      value={formatRupiahInput(String(penghasilanBruto))}
                      onChange={(e) => {
                        let numericValue =
                          Number(e.target.value.replace(/\D/g, "")) || 0;
                        setPenghasilanBruto(numericValue);
                      }}
                      className="border p-2 w-full rounded-md"
                    />
                  </div>

                  <button
                    onClick={handleHitungKodePajakTidakFinal}
                    className="bg-yellow-500 text-white w-full py-2 rounded-md hover:bg-yellow-600"
                  >
                    Hitung
                  </button>

                  <div className="mt-4 p-4 border rounded-md bg-gray-50">
                    <h3 className="font-bold">Hasil Perhitungan PPh 21</h3>
                    <div className="flex justify-between">
                      <span>DPP</span>
                      <span>{formatRupiahInput(dpp)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tarif</span>
                      <span>5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>PPh 21</span>
                      <span>{formatRupiahInput(pph21)}</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Agen Asuransi */}
            <div>
              {kodePajak === "21-100-05" && (
                <>
                  <div className="mb-3">
                    <label>Penghasilan Bruto</label>
                    <input
                      type="text"
                      value={formatRupiahInput(String(penghasilanBruto))}
                      onChange={(e) => {
                        let numericValue =
                          Number(e.target.value.replace(/\D/g, "")) || 0;
                        setPenghasilanBruto(numericValue);
                      }}
                      className="border p-2 w-full rounded-md"
                    />
                  </div>
                  <button
                    onClick={handleHitungKodePajakTidakFinal}
                    className="bg-yellow-500 text-white w-full py-2 rounded-md hover:bg-yellow-600"
                  >
                    Hitung
                  </button>

                  <div className="mt-4 p-4 border rounded-md bg-gray-50">
                    <h3 className="font-bold">Hasil Perhitungan PPh 21</h3>
                    <div className="flex justify-between">
                      <span>DPP</span>
                      <span>{formatRupiahInput(dpp)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tarif</span>
                      <span>5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>PPh 21</span>
                      <span>{formatRupiahInput(pph21)}</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Penjaja Barang Dagangan */}
            <div>
              {kodePajak === "21-100-06" && (
                <>
                  <div className="mb-3">
                    <label>Penghasilan Bruto</label>
                    <input
                      type="text"
                      value={formatRupiahInput(String(penghasilanBruto))}
                      onChange={(e) => {
                        let numericValue =
                          Number(e.target.value.replace(/\D/g, "")) || 0;
                        setPenghasilanBruto(numericValue);
                      }}
                      className="border p-2 w-full rounded-md"
                    />
                  </div>
                  <button
                    onClick={handleHitungKodePajakTidakFinal}
                    className="bg-yellow-500 text-white w-full py-2 rounded-md hover:bg-yellow-600"
                  >
                    Hitung
                  </button>

                  <div className="mt-4 p-4 border rounded-md bg-gray-50">
                    <h3 className="font-bold">Hasil Perhitungan PPh 21</h3>
                    <div className="flex justify-between">
                      <span>DPP</span>
                      <span>{formatRupiahInput(dpp)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tarif</span>
                      <span>5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>PPh 21</span>
                      <span>{formatRupiahInput(pph21)}</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Tenaga Ahli */}
            <div>
              {kodePajak === "21-100-07" && (
                <>
                  <div className="mb-3">
                    <label>Penghasilan Bruto</label>
                    <input
                      type="text"
                      value={formatRupiahInput(String(penghasilanBruto))}
                      onChange={(e) => {
                        let numericValue =
                          Number(e.target.value.replace(/\D/g, "")) || 0;
                        setPenghasilanBruto(numericValue);
                      }}
                      className="border p-2 w-full rounded-md"
                    />
                  </div>
                  <button
                    onClick={handleHitungKodePajakTidakFinal}
                    className="bg-yellow-500 text-white w-full py-2 rounded-md hover:bg-yellow-600"
                  >
                    Hitung
                  </button>

                  <div className="mt-4 p-4 border rounded-md bg-gray-50">
                    <h3 className="font-bold">Hasil Perhitungan PPh 21</h3>
                    <div className="flex justify-between">
                      <span>DPP</span>
                      <span>{formatRupiahInput(dpp)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tarif</span>
                      <span>5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>PPh 21</span>
                      <span>{formatRupiahInput(pph21)}</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Bukan Pegawai Lainnya */}
            <div>
              {kodePajak === "21-100-09" && (
                <>
                  <div className="mb-3">
                    <label>Penghasilan Bruto</label>
                    <input
                      type="text"
                      value={formatRupiahInput(String(penghasilanBruto))}
                      onChange={(e) => {
                        let numericValue =
                          Number(e.target.value.replace(/\D/g, "")) || 0;
                        setPenghasilanBruto(numericValue);
                      }}
                      className="border p-2 w-full rounded-md"
                    />
                  </div>
                  <button
                    onClick={handleHitungKodePajakTidakFinal}
                    className="bg-yellow-500 text-white w-full py-2 rounded-md hover:bg-yellow-600"
                  >
                    Hitung
                  </button>

                  <div className="mt-4 p-4 border rounded-md bg-gray-50">
                    <h3 className="font-bold">Hasil Perhitungan PPh 21</h3>
                    <div className="flex justify-between">
                      <span>DPP</span>
                      <span>{formatRupiahInput(dpp)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tarif</span>
                      <span>5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>PPh 21</span>
                      <span>{formatRupiahInput(pph21)}</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Anggota Dewan Komisaris atau Dewan Pengawas yang Menerima Imbalan Secara Tidak Teratur */}
            <div>
              {kodePajak === "21-100-10" && (
                <>
                  <div className="mb-3">
                    <label>(PTKP)</label>
                    <select
                      value={ptkp}
                      onChange={(e) => setPtkp(Number(e.target.value))}
                      className="border p-2 w-full rounded-md"
                    >
                      {ptkpOptions.map((option) => (
                        <option key={option.label} value={option.value}>
                          {option.label} - {formatRupiahInput(option.value)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-3">
                    <label>Penghasilan Bruto</label>
                    <input
                      type="text"
                      value={formatRupiahInput(String(penghasilanBruto))}
                      onChange={(e) => {
                        let numericValue =
                          Number(e.target.value.replace(/\D/g, "")) || 0;
                        setPenghasilanBruto(numericValue);
                      }}
                      className="border p-2 w-full rounded-md"
                    />
                  </div>

                  <div className="mb-3">
                    <label>Skema Penghitungan</label>
                    <select
                      value={skema}
                      onChange={(e) => setSkema(e.target.value)}
                      className="border p-2 w-full rounded-md"
                    >
                      <option value="gross">Gross</option>
                      <option value="grossup">Gross Up</option>
                    </select>
                  </div>

                  <div className="mb-3 flex items-center">
                    <input
                      type="checkbox"
                      checked={includePotonganPph21}
                      onChange={() =>
                        setIncludePotonganPph21(!includePotonganPph21)
                      }
                      className="mr-2"
                    />
                    <label>
                      Penghasilan yang telah dipotong PPh Pasal 21 pada masa
                      pajak yang sama
                    </label>
                  </div>

                  {includePotonganPph21 && (
                    <div className="mb-3">
                      <label>Masukkan Penghasilan Dipotong PPh 21</label>
                      <input
                        type="text"
                        value={formatRupiahInput(String(potonganPph21))}
                        onChange={(e) => {
                          let numericValue =
                            Number(e.target.value.replace(/\D/g, "")) || 0;
                          setPotonganPph21(numericValue);
                        }}
                        className="border p-2 w-full rounded-md"
                      />
                    </div>
                  )}

                  <button
                    onClick={handleHitungPajak}
                    className="bg-yellow-500 text-white w-full py-2 rounded-md hover:bg-yellow-600"
                  >
                    Hitung
                  </button>

                  <div className="mt-4 p-4 border rounded-md bg-gray-50">
                    <h3 className="font-bold">Hasil Perhitungan PPh 21</h3>
                    <div className="flex justify-between">
                      <span>DPP</span>
                      <span>{formatRupiahInput(dpp)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tarif</span>
                      <span>{tarif} %</span>
                    </div>
                    <div className="flex justify-between">
                      <span>PPh 21</span>
                      <span>{formatRupiahInput(pph21)}</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Mantan Pegawai yang Menerima Jasa Produksi, Tantiem, Bonus atau Imbalan Kepada Mantan Pegawai */}
            <div>
              {kodePajak === "21-100-11" && (
                <>
                  <div className="mb-3">
                    <label>Penghasilan Bruto</label>
                    <input
                      type="text"
                      value={formatRupiahInput(String(penghasilanBruto))}
                      onChange={(e) => {
                        let numericValue =
                          Number(e.target.value.replace(/\D/g, "")) || 0;
                        setPenghasilanBruto(numericValue);
                      }}
                      className="border p-2 w-full rounded-md"
                    />
                  </div>
                  <button
                    onClick={handleHitungKodePajakTidakFinal}
                    className="bg-yellow-500 text-white w-full py-2 rounded-md hover:bg-yellow-600"
                  >
                    Hitung
                  </button>

                  <div className="mt-4 p-4 border rounded-md bg-gray-50">
                    <h3 className="font-bold">Hasil Perhitungan PPh 21</h3>
                    <div className="flex justify-between">
                      <span>DPP</span>
                      <span>{formatRupiahInput(dpp)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tarif</span>
                      <span>5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>PPh 21</span>
                      <span>{formatRupiahInput(pph21)}</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Pegawai yang Melakukan Penarikan Uang Pensiun */}
            <div>
              {kodePajak === "21-100-12" && (
                <>
                  <div className="mb-3">
                    <label>Penghasilan Bruto</label>
                    <input
                      type="text"
                      value={formatRupiahInput(String(penghasilanBruto))}
                      onChange={(e) => {
                        let numericValue =
                          Number(e.target.value.replace(/\D/g, "")) || 0;
                        setPenghasilanBruto(numericValue);
                      }}
                      className="border p-2 w-full rounded-md"
                    />
                  </div>
                  <button
                    onClick={handleHitungKodePajakTidakFinal}
                    className="bg-yellow-500 text-white w-full py-2 rounded-md hover:bg-yellow-600"
                  >
                    Hitung
                  </button>

                  <div className="mt-4 p-4 border rounded-md bg-gray-50">
                    <h3 className="font-bold">Hasil Perhitungan PPh 21</h3>
                    <div className="flex justify-between">
                      <span>DPP</span>
                      <span>{formatRupiahInput(dpp)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tarif</span>
                      <span>5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>PPh 21</span>
                      <span>{formatRupiahInput(pph21)}</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Peserta Kegiatan */}
            <div>
              {kodePajak === "21-100-13" && (
                <>
                  <div className="mb-3">
                    <label>Penghasilan Bruto</label>
                    <input
                      type="text"
                      value={formatRupiahInput(String(penghasilanBruto))}
                      onChange={(e) => {
                        let numericValue =
                          Number(e.target.value.replace(/\D/g, "")) || 0;
                        setPenghasilanBruto(numericValue);
                      }}
                      className="border p-2 w-full rounded-md"
                    />
                  </div>
                  <button
                    onClick={handleHitungKodePajakTidakFinal}
                    className="bg-yellow-500 text-white w-full py-2 rounded-md hover:bg-yellow-600"
                  >
                    Hitung
                  </button>

                  <div className="mt-4 p-4 border rounded-md bg-gray-50">
                    <h3 className="font-bold">Hasil Perhitungan PPh 21</h3>
                    <div className="flex justify-between">
                      <span>DPP</span>
                      <span>{formatRupiahInput(dpp)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tarif</span>
                      <span>5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>PPh 21</span>
                      <span>{formatRupiahInput(pph21)}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
        {jenisPemotongan === "PPh 21 Tahunan" && (
          <div>
            <div className="mb-3">
              <label>(PTKP)</label>
              <select
                value={ptkp}
                onChange={(e) => setPtkp(Number(e.target.value))}
                className="border p-2 w-full rounded-md"
              >
                <option value="" disabled>
                  Pilih PTKP
                </option>
                {ptkpOptions.map((option) => (
                  <option key={option.label} value={option.value}>
                    {option.label} - {formatRupiahInput(option.value)}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label>Perhitungan</label>
              <select
                value={kodePajak}
                onChange={(e) => {
                  setKodePajak(e.target.value);
                }}
                className="border p-2 w-full rounded-md"
              >
                <option value="" disabled>
                  Pilih Perhitungan
                </option>
                {Perhitungan.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-4 mb-3">
              <label className="text-gray-700 w-32">Masa Penghasilan</label>
              <select
                value={masaAwal}
                onChange={(e) => {
                  setMasaAwal(e.target.value);
                  setMasaAkhir("");
                }}
                className="border p-2 rounded-md w-40"
              >
                <option value="" disabled>
                  Masa Awal
                </option>
                {bulanOptions.map((bulan) => (
                  <option key={bulan.value} value={bulan.value}>
                    {bulan.label}
                  </option>
                ))}
              </select>

              <select
                value={masaAkhir}
                onChange={(e) => setMasaAkhir(e.target.value)}
                className="border p-2 rounded-md w-40"
                disabled={!masaAwal}
              >
                <option value="" disabled>
                  Masa Akhir
                </option>
                {filteredBulanAkhir.map((bulan) => (
                  <option key={bulan.value} value={bulan.value}>
                    {bulan.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full border mb-3">
              <div className="bg-blue-900 text-white font-bold p-2">
                PENGHASILAN BRUTO
              </div>
              <table className="w-full border-collapse border border-white">
                <tbody>
                  {[
                    "GAJI/PENSIUN",
                    "TUNJANGAN PPh",
                    "TUNJANGAN LAINNYA, UANG LEMBUR DAN SEBAGAINYA",
                    "HONORARIUM DAN IMBALAN LAIN SEJENISNYA",
                    "PREMI ASURANSI YANG DIBAYARKAN PEMBERI KERJA",
                    "PENERIMAAN DALAM BENTUK NATURA DAN KENIKMATAN LAINNYA",
                    "TANTIEM, BONUS, GRATIFIKASI, JASA PRODUKSI DAN THR",
                  ].map((label, index) => (
                    <tr key={index} className="border border-gray-300">
                      <td className="p-2 text-center">{index + 1}</td>
                      <td className="p-2">{label}</td>
                      <td className="p-2 text-right">
                        <input
                          type="text"
                          value={formatRupiahInput(inputs[index])}
                          onChange={(e) =>
                            handleChange(
                              index,
                              e.target.value.replace(/[^\d]/g, "")
                            )
                          }
                          className="border p-1 w-full text-right"
                        />
                      </td>
                    </tr>
                  ))}

                  {/* Row Total (Disabled) */}
                  <tr className="border border-gray-300 bg-gray-100">
                    <td className="p-2 text-center font-bold">8</td>
                    <td className="p-2 font-bold">
                      JUMLAH PENGHASILAN BRUTO (1 S.D. 7)
                    </td>
                    <td className="p-2 text-right">
                      <input
                        type="text"
                        value={formatRupiahInput(totalBruto)}
                        disabled
                        className="border p-1 w-full text-right bg-gray-200"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="w-full border mt-4">
              <div className="bg-blue-900 text-white font-bold p-2">
                PENGURANGAN
              </div>
              <table className="w-full border-collapse border border-white">
                <tbody>
                  {[
                    "BIAYA JABATAN/BIAYA PENSIUN",
                    "IURAN PENSIUN ATAU IURAN THT/JHT",
                    "ZAKAT/SUMBANGAN KEAGAMAAN YANG BERSIFAT WAJIB YANG DIBAYARKAN MELALUI PEMBERI KERJA",
                  ].map((label, index) => (
                    <tr key={index} className="border border-gray-300">
                      <td className="p-2 text-center">{index + 9}</td>
                      <td className="p-2">{label}</td>
                      <td className="p-2 text-right">
                        <input
                          type="text"
                          value={formatRupiahInput(inputsPengurangan[index])}
                          onChange={(e) =>
                            handleChangePengurangan(
                              index,
                              e.target.value.replace(/[^\d]/g, "")
                            )
                          }
                          className="border p-1 w-full text-right"
                        />
                      </td>
                    </tr>
                  ))}

                  {/* Row Total (Disabled) */}
                  <tr className="border border-gray-300 bg-gray-100">
                    <td className="p-2 text-center font-bold">12</td>
                    <td className="p-2 font-bold">
                      JUMLAH PENGURANGAN (9 S.D. 11)
                    </td>
                    <td className="p-2 text-right">
                      <input
                        type="text"
                        value={formatRupiahInput(totalPengurangan)}
                        disabled
                        className="border p-1 w-full text-right bg-gray-200"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="w-full border mt-4">
              <div className="bg-blue-900 text-white font-bold p-2">
                PENGHITUNGAN PPh PASAL 21
              </div>
              <table className="w-full border-collapse border border-white">
                <tbody>
                  {[
                    {
                      no: 13,
                      label: "Jumlah Penghasilan Neto",
                      value: totalNeto,
                    },
                    {
                      no: 14,
                      label: "Penghasilan Neto Masa Pajak Sebelumnya",
                      value: manualInputs[14],
                      isManual: true,
                    },
                    {
                      no: 15,
                      label: "Jumlah Penghasilan Neto untuk PPh 21",
                      value: jumlahPenghasilanNetoPPh21,
                    },
                    {
                      no: 16,
                      label: "Penghasilan Tidak Kena Pajak (PTKP)",
                      value: ptkp,
                    },
                    {
                      no: 17,
                      label: "Penghasilan Kena Pajak",
                      value: penghasilanKenaPajak,
                    },
                    {
                      no: 18,
                      label: "PPh Pasal 21 Atas PKP",
                      value: pph21MasaPajak,
                    },
                    {
                      no: 19,
                      label: "PPh 21 yang Telah Dipotong",
                      value: manualInputs[19],
                      isManual: true,
                    },
                    { no: 20, label: "PPh 21 Terutang", value: pphTerutang },
                  ].map((row) => (
                    <tr key={row.no}>
                      <td className="border p-2">{row.no}</td>
                      <td className="border p-2">{row.label}</td>
                      <td className="border p-2">
                        <input
                          type="text"
                          value={
                            row.isManual
                              ? formatRupiahInput(row.value)
                              : formatRupiahInput(row.value)
                          }
                          onChange={(e) =>
                            row.isManual &&
                            handleRupiahInput(row.no, e.target.value)
                          }
                          disabled={!row.isManual}
                          className="w-full border p-2 rounded-md text-right"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
