import Link from "next/link";
import {
 
  MapPin,
  Phone,
  Clock,
} from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-zinc-950 text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              href="#home"
              className="text-2xl font-bold"
            >
              Taste<span className="text-orange-500">Hub</span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">
              Delicious food, quality ingredients and friendly
              service. Made with love for every customer.
            </p>

            {/* Social */}
           
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition hover:text-orange-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold">
              Contact
            </h3>

            <div className="mt-5 space-y-4">

              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-orange-500" />

                <p className="text-sm leading-6 text-white/60">
                  123 Main Street,
                  <br />
                  Dhaka, Bangladesh
                </p>
              </div>

              <a
                href="tel:+8801700000000"
                className="flex items-center gap-3 text-sm text-white/60 transition hover:text-orange-500"
              >
                <Phone className="size-5 text-orange-500" />
                +880 1700-000000
              </a>

            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-semibold">
              Opening Hours
            </h3>

            <div className="mt-5 flex items-start gap-3">
              <Clock className="mt-0.5 size-5 shrink-0 text-orange-500" />

              <div className="text-sm leading-6 text-white/60">
                <p>Everyday</p>
                <p>10:00 AM – 10:00 PM</p>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-orange-500/10 p-4">
              <p className="text-sm font-medium text-orange-500">
                We are open today!
              </p>

              <p className="mt-1 text-xs text-white/50">
                Visit us and enjoy your favorite meal.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-center text-xs text-white/40 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8 md:text-left">

          <p>
            © {new Date().getFullYear()} TasteHub. All rights reserved.
          </p>

          <p>
            Designed & Developed with ❤️
          </p>

        </div>
      </div>

    </footer>
  );
}