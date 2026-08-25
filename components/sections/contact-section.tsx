"use client";

import {
  Clock,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    value: "123 Main Street, Dhaka, Bangladesh",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+880 1700-000000",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    value: "Everyday · 10:00 AM – 10:00 PM",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-background py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            Contact Us
          </span>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Come &{" "}
            <span className="text-orange-500">
              Visit Us
            </span>
          </h2>

          <p className="mt-4 text-muted-foreground">
            Have a question or want to visit us? Find our location
            and contact us directly.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-orange-50 p-6 sm:p-8"
          >
            <h3 className="text-2xl font-bold">
              Get In Touch
            </h3>

            <p className="mt-3 text-muted-foreground">
              We would love to hear from you. Feel free to call us
              or visit our restaurant.
            </p>

            {/* Contact Items */}
            <div className="mt-8 space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white">
                      <Icon className="size-5" />
                    </div>

                    <div>
                      <p className="font-semibold">
                        {item.title}
                      </p>

                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Call Button */}
            <Button
              asChild
              size="lg"
              className="mt-8 w-full rounded-full bg-orange-500 hover:bg-orange-600"
            >
              <a href="tel:+8801700000000" className="flex items-center">
                <Phone className="mr-2 size-4" />
                Call Now
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-h-[400px] overflow-hidden rounded-3xl border shadow-sm"
          >
            <iframe
              title="Restaurant Location"
              src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
              className="h-full min-h-[400px] w-full border-0"
              loading="lazy"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
