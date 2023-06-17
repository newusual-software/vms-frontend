import { Outlet } from "react-router-dom";
import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* renders all children i.e all other routes */}
      <Outlet />
    </>
  );
}
