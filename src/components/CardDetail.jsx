export default function CardDetail({ selectedSurah }) {

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">{selectedSurah.namaLatin}</h1>
      {selectedSurah.ayat.map((ayat) => (
        <div key={ayat.nomorAyat} className="mb-4 border-b pb-2">
          <p className="text-right text-2xl mb-1">{ayat.teksArab}</p>
          <p className="italic text-gray-600">{ayat.teksLatin}</p>
          <p>{ayat.teksIndonesia}</p>
        </div>
      ))}
    </>
  );
}