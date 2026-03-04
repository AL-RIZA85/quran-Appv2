import { useState, useEffect } from "react";
import CardList from "../components/CardList";
import { Spinner } from "flowbite-react";

export default function SurahList() {
  const [surah, setSurah] = useState([]);
  const [loading, setLoading] = useState(true);  


  
  async function getSurah() {
    const url = "https://equran.id/api/v2/surat";
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Response status: ${response.status}`);
      const result = await response.json();
      setSurah(result.data);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getSurah();
  }, []);

    if (loading == true) {
        return (
            <div className="block mx-auto mt-50 w-100 text-center">
                <Spinner />
            </div>
        )
    }

  return (
    <CardList data={surah} type="surah" />
    )
}