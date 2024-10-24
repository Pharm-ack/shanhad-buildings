import Logo from "./logo";
import Link from "next/link";
import { MoveUpRight, Phone } from "lucide-react";

export default function Header() {
  const navLinks = [
    {
      name: "About Us",
      path: "/about-us",
    },
    {
      name: "Our Services",
      path: "/our-services",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Blog",
      path: "/Blog",
    },
    {
      name: "Careers",
      path: "/careers",
    },
  ];
  return (
    <header className="bg-white rounded-sm shadow-md">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Logo />
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {navLinks.map((link) => (
                  <Link key={link.path} href={link.path}>
                    <li>{link.name}</li>{" "}
                  </Link>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex md:gap-4">
              <Link
                className="flex items-center justify-center rounded-md gap-x-1 bg-[#3E4095] px-4 py-2 text-sm font-medium text-white shadow"
                href="#"
              >
                Explore Our Services
                <MoveUpRight className="w-4 h-4" />
              </Link>

              <Link
                className="flex items-center justify-center rounded-md gap-x-2 bg-white border border-[#191919] px-4 py-2 text-sm font-medium"
                href="#"
              >
                <Phone className="w-4 h-4" /> Get In Touch
              </Link>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
