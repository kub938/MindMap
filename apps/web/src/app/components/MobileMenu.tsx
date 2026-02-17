"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden flex justify-start gap-6 ">
      <button onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-white border-b p-6 flex flex-col gap-4">
          <Link href="/">Product</Link>
          <Link href="/">Contact</Link>
        </div>
      )}
    </div>
  );
}
