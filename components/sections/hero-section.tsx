"use client";

import Link from "next/link";
import { ArrowRight, Clock, Star } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/videos/restaurant-hero.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-white">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur"
          >
            <Star className="size-4 fill-orange-500 text-orange-500" />
            <span className="text-sm font-medium">
              Best Food in Town
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl"
          >
            Delicious Food,
            <span className="block text-orange-500">
              Made With Love.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg"
          >
            Enjoy fresh, delicious and high-quality food prepared
            with love. Visit us today and make your meal special.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Button
              
              size="lg"
              className="rounded-full bg-orange-500 px-7 hover:bg-orange-600"
            >
              <Link href="#menu" className="flex items-center">
                Explore Menu
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>

            <Button
             
              size="lg"
              variant="outline"
              className="rounded-full border-white/40 bg-white/10 px-7 text-white hover:bg-white hover:text-black"
            >
              <Link href="#contact">
                Contact Us
              </Link>
            </Button>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/80"
          >
            <div className="flex items-center gap-2">
              <Clock className="size-5 text-orange-500" />
              <span>Open 10 AM – 10 PM</span>
            </div>

            <div className="flex items-center gap-2">
              <Star className="size-5 fill-orange-500 text-orange-500" />
              <span>4.9 Rating</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}