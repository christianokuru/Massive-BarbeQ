"use client";

import { Button } from "../../components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import Logo2 from "@/public/logo2.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Buy Now", href: "/" },
  { name: "Contact Us", href: "/" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="px-4 lg:container lg:max-w-screen-2xl lg:mx-auto lg:text-2xl flex items-center lg:sticky lg:top-0 lg:backdrop-blur-lg lg:z-50 lg:justify-between py-1 border-b border-zinc-700">
        {/* logo */}
        <Link href={"/"}>
          <Image
            src={Logo2}
            alt="Massive-Barbecue_logo"
            height={60}
            width={60}
          />
        </Link>
        {/* nav links */}
        <div className="hidden lg:flex lg:gap-x-10 lg:text-base lg:text-gray-600 lg:items-center">
          {navLinks.map((link, index) => (
            <div key={index}>
              {pathname === link.href ? (
                <Link
                  className="lg:font-semibold lg:text-white lg:border-b-[3px] lg:border-primary px-3"
                  href={link.href}
                  aria-label={`${link.name} page`}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  className="font-semibold text-gray-500 transition duration-100 hover:text-primary"
                  href={link.href}
                  aria-label={`${link.name} page`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}

        </div>
        {/* contact us button */}
        <div>
        <Link href="/contact">
            <Button variant={"link"} className="hidden lg:block bg-[#5D4037] font-semibold text-white">Contact us</Button>
          </Link>
        </div>


        <div className="lg:hidden flex items-center w-full justify-end gap-x-6">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <X className="h-8 w-10 text-[#D84215] hover:text-[#D84215]" />
            ) : (
              <HamburgerMenuIcon className="w-10 h-9 text-[#5D4037] lg:hidden" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-700 ease-in-out transform ${
          isOpen ? "opacity-100 max-h-[300px] shadow-lg" : "opacity-0 max-h-0"
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === item.href
                  ? "text-white bg-primary"
                  : "text-primary hover:text-white hover:bg-primary"
              }`}
              onClick={toggleMenu}
              aria-label={`${item.name} page`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

// "use client"

// import Image from "next/image";
// import Link from "next/link";
// import Logo from "@/public/logo.png";
// import { HamburgerMenuIcon } from "@radix-ui/react-icons";
// import { useState } from "react";

// export default function Navbar() {

//   const [isOpen, setIsOpen] = useState(false)

//     const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "Buy Now", href: "/" },
//     { name: "Contact Us", href: "/" },
//   ];

//   return (
//     <div className="flex items-center justify-between container px-4 mx-auto text-primary-foreground py-3 border-b border-zinc-700">
//       <div className="flex">
// <Link href={"/"}>
//   <Image
//     src={Logo}
//     alt="Massive-Barbecue_logo"
//     height={60}
//     width={60}
//   />
// </Link>
//       </div>

//       <div className="flex">
//         <HamburgerMenuIcon className="w-10 h-7 text-[#FFD54F]" />
//       </div>
//     </div>
//   );
// }
