"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import { menuItems, restaurantWhatsAppNumber } from "@/data/restaurant-data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MenuSection() {
  const handleWhatsAppOrder = (name: string, price: number) => {
    const message = `Hello! I would like to order:

🍽️ Item: ${name}
💰 Price: ৳${price}

Please let me know the availability.`;

    const whatsappUrl = `https://wa.me/${restaurantWhatsAppNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };
  return (
    <section id="menu" className="bg-orange-50/50 py-20 sm:py-24">
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
            Our Menu
          </span>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Explore Our
            <span className="text-orange-500"> Delicious Menu</span>
          </h2>

          <p className="mt-4 text-muted-foreground">
            Fresh ingredients, delicious flavors and carefully prepared dishes
            made specially for you.
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -6 }}
            >
              <Card className="group h-full overflow-hidden border-0 shadow-sm transition-shadow duration-300 hover:shadow-xl">
                {/* Image */}
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Category */}
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold backdrop-blur">
                    {item.category}
                  </span>
                </div>

                {/* Content */}
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold">{item.name}</h3>

                    <span className="shrink-0 text-lg font-bold text-orange-500">
                      ৳{item.price}
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>

                {/* Footer */}
                <CardFooter className="px-5 pb-5">
                  <Button
                    variant="outline"
                    onClick={() => handleWhatsAppOrder(item.name, item.price)}
                    className="w-full rounded-full border-orange-200 hover:bg-orange-500 hover:text-white"
                  >
                    Order Now
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button
            size="lg"
            className="rounded-full bg-orange-500 px-7 hover:bg-orange-600"
          >
            View Full Menu
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
