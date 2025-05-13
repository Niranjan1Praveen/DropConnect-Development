import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.svg";

const footerLinks = [
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <section className="py-10 px-4 flex items-center justify-center">
      <footer className="container flex flex-col md:flex-row md:justify-between items-center gap-6">
        <div className="flex flex-col gap-2 items-center text-center md:items-start">
          <Image src={logo} alt="logo icon" />
          <small className="text-white/50">
            Built by{" "}
            <Link href={"/"} className="uppercase">
              code4change
            </Link>
            . The source code is available on{" "}
            <Link href={"/"} className="underline italic">
              GitHub.
            </Link>
          </small>
        </div>
        <nav className="flex gap-6">
          {footerLinks.map(link => (
            <a href={link.href} key={link.label} className="text-white/50 text-sm">{link.label}</a>
          ))}
        </nav>
      </footer>
    </section>
  );
}
