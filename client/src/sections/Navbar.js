import Image from "next/image";
import logo from '@/assets/images/logo.svg'
const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    return <section>
        <div className="container">
            <div className="grid grid-cols-2">
                <div>
                    <Image src={logo}/>
                </div>
                <div>

                </div>
            </div>
        </div>
    </section>;
}
