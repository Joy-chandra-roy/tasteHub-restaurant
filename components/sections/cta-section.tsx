"use client";

import Link from "next/link";
import { ArrowRight, Phone, Star } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-orange-500 px-6 py-16 text-center text-white sm:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-3xl">

          {/* Rating */}
          <div className="flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="size-5 fill-white text-white"
              />
            ))}
          </div>

          <h2 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Ready for Something Delicious?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-white/80">
            Visit TasteHub today and enjoy delicious food,
            friendly service and an unforgettable experience.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Button
              
              size="lg"
              className="rounded-full bg-white px-7 text-orange-500 hover:bg-white/90"
            >
              <Link href="#menu" className="flex items-center">
                Explore Menu
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>

            <Button
             
              size="lg"
              variant="outline"
              className="rounded-full border-white/40 bg-white/10 px-7 text-white hover:bg-white hover:text-orange-500"
            >
              <a href="tel:+8801700000000" className="flex items-center">
                <Phone className="mr-2 size-4" />
                Call Now
              </a>
            </Button>

          </div>
        </div>
      </motion.div>
    </section>
  );
}