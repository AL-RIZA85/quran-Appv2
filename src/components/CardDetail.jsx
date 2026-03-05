export default function CardDetail({ selectedSurah }) {


  return (
    <div className="flex-1 bg-green-200 p-4 overflow-y-auto">
      <div className="flex gap-2">
      <h1 className="text-3xl font-bold mb-6">{selectedSurah.namaLatin}</h1>
      <span>({selectedSurah.jumlahAyat})</span>
      </div>

      {selectedSurah.ayat.map((ayat) => (
        <div key={ayat.nomorAyat} className="mb-6 border-b pb-3">
          <p className="text-right text-2xl mb-1 font-scheherazade">{ayat.teksArab}</p>
          <p className="italic text-gray-600 mb-1">{ayat.teksLatin}</p>
          <p className="text-gray-800">{ayat.teksIndonesia}</p>
        </div>
      ))}
    </div>
  );
}