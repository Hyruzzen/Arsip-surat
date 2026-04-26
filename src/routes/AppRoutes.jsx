import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import SuratMasuk from "../pages/SuratMasuk";
import SuratKeluar from "../pages/SuratKeluar";
import Disposisi from "../pages/Disposisi";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/surat-masuk" element={<SuratMasuk />} />
          <Route path="/surat-keluar" element={<SuratKeluar />} />
          <Route path="/disposisi" element={<Disposisi />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}