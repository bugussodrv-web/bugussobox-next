"use client";

import { useState, ReactNode } from "react";

interface MobileMenuProps {
  children: ReactNode;
}

export default function MobileMenu({ children }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="nav-toggle"
        aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "≡"}
      </button>
      <div className={`nav-wrapper ${open ? "open" : ""}`}>
        {children}
      </div>
    </>
  );
}