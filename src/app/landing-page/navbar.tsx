import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative">
      <div className="flex justify-between items-center py-4 px-8 border-b border-[#F7EEE1]">
        <Link tabIndex={-1} href={"/"} className="text-[#D5D6DD] hover:text-black font-bold z-10">
          LOGO
        </Link>
        <div className="flex gap-3 z-10">
          <button tabIndex={-1} className="py-2.5 px-5 bg-[#F6F0E8] rounded-lg">
            Log in
          </button>
          <button tabIndex={-1} className="py-2.5 px-5 bg-[#2D353D] rounded-lg text-white">
            Start free trial
          </button>
        </div>
      </div>

      <div className="absolute flex justify-center items-center inset-0">
        <ul className="flex">
          {[
            {
              title: "Home",
              href: "/",
            },
            {
              title: "Articles",
              href: "/articles",
            },
            {
              title: "Pricing",
              href: "pricing",
            },
            {
              title: "About",
              href: "/about",
            },
            {
              title: "Contact",
              href: "/contact",
            },
          ].map(({ title, href }, i) => {
            return (
              <li tabIndex={-1} key={i} className="mx-4">
                <Link href={href}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
