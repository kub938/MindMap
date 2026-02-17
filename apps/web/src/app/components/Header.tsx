import Link from "next/link";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="border-b border-b-gray-200 px-5 ">
      <nav className="max-w-(--home-max-width) grid grid-cols-[1fr_auto_1fr] h-15 items-center my-0 mx-auto">
        <ul className="hidden md:flex justify-start gap-6 ">
          <li>
            <Link href="/">Product</Link>
          </li>
          <li>
            <Link href="/">Tutorial</Link>
          </li>
        </ul>
        <MobileMenu />
        <div>MindNote</div>
        <ul className="flex justify-end ">
          <li className="">
            <Link href="/">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
