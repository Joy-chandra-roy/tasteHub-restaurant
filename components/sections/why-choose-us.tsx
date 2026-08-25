"use client";

import {
  Award,
  ChefHat,
  Clock,
  HeartHandshake,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

const features = [
  {
    icon: ChefHat,
    title: "Expert Chefs",
    description:
      "Our experienced chefs prepare every dish with passion and care.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "We use fresh and high-quality ingredients in every meal.",
  },
  {
    icon: Clock,
    title: "Fast Service",
    description:
      "Get your favorite food quickly without compromising quality.",
  },
  {
    icon: HeartHandshake,
    title: "Friendly Service",
    description:
      "We always try to make every customer's experience special.",
  },
];

const stats = [
  {
    icon: Users,
    value: "10K+",
    label: "Happy Customers",
  },
  {
    icon: ChefHat,
    value: "50+",
    label: "Delicious Dishes",
  },
  {
    icon: Award,
    value: "10+",
    label: "Years Experience",
  },
  {
    icon: HeartHandshake,
    value: "4.9",
    label: "Customer Rating",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            More Than Just
            <span className="text-orange-500"> Great Food</span>
          </h2>

          <p className="mt-4 text-muted-foreground">
            We care about quality, service and creating memorable
            experiences for every customer.
          </p>
        </motion.div>

        {/* Features */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
              >
                <Card className="h-full border bg-background transition-shadow duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">

                    <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
                      <Icon className="size-7" />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {feature.description}
                    </p>

                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 overflow-hidden rounded-3xl bg-orange-500"
        >
          <div className="grid grid-cols-2 divide-x divide-white/20 sm:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  className="flex flex-col items-center px-4 py-8 text-center text-white sm:py-10"
                >
                  <Icon className="size-7" />

                  <p className="mt-3 text-3xl font-bold sm:text-4xl">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-sm text-white/80">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}