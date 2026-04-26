import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-6">Arsip Surat</h1>

      <ul className="space-y-3">
        <li>
          <Link to="/" className="block p-3 rounded-lg hover:bg-white/50">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/surat-masuk" className="block p-3 rounded-lg hover:bg-white/50">
            Surat Masuk
          </Link>
        </li>

        <li>
          <Link to="/surat-keluar" className="block p-3 rounded-lg hover:bg-white/50">
            Surat Keluar
          </Link>
        </li>

        <li>
          <Link to="/disposisi" className="block p-3 rounded-lg hover:bg-white/50">
            Disposisi
          </Link>
        </li>
      </ul>
    </div>
  );
}