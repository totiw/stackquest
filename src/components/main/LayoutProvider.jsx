// Use the client directive for using usePathname hook.
"use client";

// Use usePathname for catching route name.
import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/main/Navbar";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node,
};

function LayoutProvider({ children }) {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/login" && pathname !== "/register" && <Navbar />}
      {children}
    </>
  );
}

LayoutProvider.propTypes = propTypes;

export default LayoutProvider;
