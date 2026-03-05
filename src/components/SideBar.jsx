
export default function SideBar({ data, onSelect }) {
  return (
    <div className="w-64 h-full bg-gray-100 p-4 overflow-y-auto">
      <h2 className="font-bold mb-4">Daftar Surah</h2>

      {data.map((item) => (
        <div
          key={item.nomor}
          onClick={() => onSelect(item.nomor)}
          className="cursor-pointer p-2 hover:bg-gray-200 rounded">
          {item.nomor}. {item.namaLatin}
        </div>
      ))}
    </div>
  );
}