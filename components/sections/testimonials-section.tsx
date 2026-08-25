"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";

import { testimonials } from "@/data/restaurant-data";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="bg-orange-50/50 py-20 sm:py-24"
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
            Testimonials
          </span>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            What Our
            <span className="text-orange-500"> Customers Say</span>
          </h2>

          <p className="mt-4 text-muted-foreground">
            We love hearing from our customers. Here are some of
            their experiences at TasteHub.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -5 }}
            >
              <Card className="relative h-full overflow-hidden border-0 shadow-sm transition-shadow duration-300 hover:shadow-xl">

                {/* Quote Icon */}
                <div className="absolute right-5 top-5">
                  <Quote className="size-10 text-orange-100" />
                </div>

                <CardContent className="p-6">

                  {/* Rating */}
                  <div className="flex gap-1">
                    {Array.from({
                      length: testimonial.rating,
                    }).map((_, index) => (
                      <Star
                        key={index}
                        className="size-4 fill-orange-500 text-orange-500"
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="mt-5 text-sm leading-7 text-muted-foreground">
                    “{testimonial.review}”
                  </p>

                  {/* Customer */}
                  <div className="mt-6 flex items-center gap-3">

                    <Avatar className="size-11">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                      />

                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((name) => name[0])
                          .join("")
                          .slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <p className="font-semibold">
                        {testimonial.name}
                      </p>

                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>

                  </div>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}