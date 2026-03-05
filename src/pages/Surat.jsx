import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../components/CardDetail";
import { Spinner } from "flowbite-react";
import SideBar from "../components/SideBar";

export default function Surat() {
  // Ambil parameter dari URL (misal: /surat/1)
  const { suratId } = useParams();

 
  // State
  const [surah, setSurah] = useState(null);        // Menyimpan data detail surah (nama + ayat)
  const [dataSurah, setDataSurah] = useState([]);  // Menyimpan daftar semua surah untuk sidebar
  const [loading, setLoading] = useState(true);    // Loading spinner saat fetch data

  
  // Fungsi fetch detail surah
  async function getSuraTDetail() {
    // URL API untuk detail surah
    const url = `https://equran.id/api/v2/surat/${suratId}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Response status: ${response.status}`);

      const result = await response.json();

      // Simpan data detail surah ke state
      setSurah(result.data);

      // Set loading selesai
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  }

 
  // Fungsi fetch semua daftar surah (untuk sidebar)
  async function getAllSurah() {
    const url = "https://equran.id/api/v2/surat"; // URL API untuk semua surah
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Response status: ${response.status}`);

      const result = await response.json();

      // Simpan daftar surah ke state
      setDataSurah(result.data);
    } catch (error) {
      console.error(error.message);
    }
  }

 
  // Fungsi handle klik surah di sidebar

  async function handleSelectSurah(nomor) {
    // Set loading true agar spinner muncul
    setLoading(true);

    try {
      const response = await fetch(`https://equran.id/api/v2/surat/${nomor}`);
      if (!response.ok) throw new Error(`Response status: ${response.status}`);

      const result = await response.json();

      // Update state detail surah sesuai nomor yang diklik
      setSurah(result.data);

      // Selesai loading
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  }

  
  // useEffect untuk fetch data saat pertama kali halaman dibuka
  useEffect(() => {
    getSuraTDetail(); // Fetch detail surah sesuai suratId di URL
    getAllSurah();    // Fetch daftar semua surah untuk sidebar
  }, [suratId]);      // dependency suratId → jika user pindah URL, fetch ulang detail surah



  if (loading) {
    return (
      <div className="block mx-auto mt-50 w-100 text-center">
        <Spinner />
      </div>
    );
  }


  return (
<div className="flex h-screen m-5 gap-10">
  <SideBar data={dataSurah} onSelect={handleSelectSurah}/>
  <CardDetail selectedSurah={surah}/>
</div>
  );
}