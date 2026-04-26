export default function Navbar({ toggleSidebar }) {
  return (
    <div className="w-full h-16 bg-white shadow flex items-center justify-between px-4">
      <button
        onClick={toggleSidebar}
        className="text-2xl"
      >
        ☰
      </button>

      <h2 className="font-semibold">Dashboard</h2>

      <span>Admin</span>
    </div>
  );
}