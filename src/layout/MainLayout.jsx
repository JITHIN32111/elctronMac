import React, { useState, Suspense } from "react";
import { Outlet } from "react-router-dom";
import AdminAside from "./AdminAside"; // Sidebar component
import Header from "./Header";
import Loader from './Loader2'; // Import Loader

const MainLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <Header open={open} setOpen={setOpen} />
      <div className="flex flex-1 overflow-y-auto">
        <AdminAside
          className={`z-50 ${
            open ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out`}
          open={open}
          setOpen={setOpen}
        />
        <div className="flex-1 overflow-y-auto bg-white h-screen pt-16">
          <Suspense fallback={<Loader />}>
            <Outlet /> {/* This renders the nested route content */}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
