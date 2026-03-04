import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../components/CardDetail";
import { Spinner } from "flowbite-react";

export default function Surat() {
    const { suratId } = useParams();
    const [surah, setSurah] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getSuraTDetail() {
        const url = `https://equran.id/api/v2/surat/${suratId}`;
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
        getSuraTDetail();
    }, []);

      if (loading == true) {
        return (
            <div className="block mx-auto mt-50 w-100 text-center">
                <Spinner />
            </div>
        )
    }

    return (
        <div >
            <CardDetail selectedSurah={surah} />
        </div>
    );
}