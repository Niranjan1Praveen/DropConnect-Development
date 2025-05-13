import Link from "next/link";
const footerLinks = [
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <section className="py-10 px-4">
      <footer className="container text-center">
        <small className="text-white/50">
          Built by{" "}
          <Link href={"/"} className="uppercase underline">
            code4change
          </Link>
          . The source code is available on{" "}
          <Link href={"/"} className="underline">
            GitHub.
          </Link>
        </small>
      </footer>
    </section>
  );
}
