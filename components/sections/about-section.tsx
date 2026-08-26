"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const features = [
  "Fresh and quality ingredients",
  "Experienced professional chefs",
  "Clean and comfortable environment",
  "Fast and friendly service",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-background py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl">
            <Image
              src="/images/about-food.jpg"
              alt="Restaurant food"
              fill
              className="object-cover"
            />
          </div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute -bottom-5 -right-3 rounded-2xl bg-orange-500 px-6 py-5 text-white shadow-xl sm:-right-6"
          >
            <p className="text-3xl font-bold">10+</p>
            <p className="text-sm">Years Experience</p>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            About Us
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            We Serve Food That
            <span className="block text-orange-500">
              Brings People Together
            </span>
          </h2>

          <p className="mt-6 leading-7 text-muted-foreground">
            At TasteHub, we believe great food creates great memories.
            Our chefs carefully prepare every dish using fresh
            ingredients and authentic flavors.
          </p>

          <p className="mt-4 leading-7 text-muted-foreground">
            Whether you are having a family dinner, meeting friends,
            or celebrating a special moment, we are here to make
            your experience memorable.
          </p>

          {/* Features */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="size-5 shrink-0 text-orange-500" />

                <span className="text-sm font-medium">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}