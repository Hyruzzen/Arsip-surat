import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isResizing, setIsResizing] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  const handleMouseDown = () => setIsResizing(true);

  const handleMouseMove = (e) => {
    if (!isResizing) return;

    const newWidth = Math.max(200, Math.min(400, e.clientX));
    setSidebarWidth(newWidth);
  };

  const handleMouseUp = () => setIsResizing(false);

  return (
    <div
      className="flex"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Sidebar */}
      {showSidebar && (
        <>
          <div
            style={{ width: sidebarWidth }}
            className="bg-[#8AE3D5] min-h-screen sticky top-0"
          >
            <Sidebar />
          </div>

          {/* Garis drag */}
          <div
            onMouseDown={handleMouseDown}
            className="w-2 cursor-col-resize bg-gray-300 hover:bg-gray-500"
          />
        </>
      )}

      {/* Content */}
      <div className="flex-1">
        <Navbar toggleSidebar={() => setShowSidebar(!showSidebar)} />

        <div className="p-6 bg-gray-100 min-h-screen">
          {children}
        </div>
      </div>
    </div>
  );
}