export default function SuratMasuk() {
  const data = [
    {
      id: 1,
      nomor: "001/SM/2026",
      pengirim: "Dinas Pendidikan",
      tanggal: "2026-04-27",
    },
    {
      id: 2,
      nomor: "002/SM/2026",
      pengirim: "PT Maju Jaya",
      tanggal: "2026-04-26",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Surat Masuk</h1>

    <button className="mb-4 bg-blue-500 text-white px-4 py-2 rounded">
    + Tambah Surat
    </button>

      <table className="w-full bg-white rounded-xl shadow overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">No</th>
            <th className="p-3 text-left">Nomor Surat</th>
            <th className="p-3 text-left">Pengirim</th>
            <th className="p-3 text-left">Tanggal</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className="border-t">
              <td className="p-3">{index + 1}</td>
              <td className="p-3">{item.nomor}</td>
              <td className="p-3">{item.pengirim}</td>
              <td className="p-3">{item.tanggal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}