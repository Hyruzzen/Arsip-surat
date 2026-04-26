export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow">
          <h2>Total Surat Masuk</h2>
          <p className="text-2xl font-bold">120</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2>Total Surat Keluar</h2>
          <p className="text-2xl font-bold">80</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2>Disposisi</h2>
          <p className="text-2xl font-bold">25</p>
        </div>
      </div>
    </div>
  );
}