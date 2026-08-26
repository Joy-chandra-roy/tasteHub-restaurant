"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, UtensilsCrossed } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur"
    >
      <div className=" mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center  gap-2 text-xl font-bold"
        >
          <div className="flex size-9 items-center justify-center rounded-full bg-orange-500 text-white">
            <UtensilsCrossed size={25} />
          </div>

          <span className="text-4xl font-bold">
            Taste<span className="text-orange-500">Hub</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xl font-medium text-muted-foreground transition-colors hover:text-orange-500"
            >
              {link.label}
            </Link>
          ))}

          <Button className="rounded-full bg-orange-500 hover:bg-orange-600 ">
            <a href="tel:+8801700000000" className="flex items-center gap-1">
              <Phone className="" />
              Call Now
            </a>
          </Button>
        </nav>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="flex size-10 items-center justify-center rounded-lg md:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-6" />
          </SheetTrigger>

          <SheetContent side="right" className="w-75 sm:w-87.5">
            <div className="mt-10 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium transition hover:text-orange-500"
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="tel:+8801761604702"
                onClick={() => setOpen(false)}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-4 py-2.5 font-bold text-white hover:bg-orange-600"
              >
                <Phone className="size-4" />
                Call Now
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};

export default Navbar;
