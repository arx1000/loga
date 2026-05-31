"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-accent/5 via-background to-accent/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-light/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                Handcrafted Since 1989
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold tracking-tight leading-[1.1]"
            >
              Doors That{" "}
              <span className="text-primary">Define</span> Your Space
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-muted leading-relaxed max-w-lg"
            >
              From classic mahogany to modern oak — each LuxWood door is
              masterfully crafted from the finest materials, bringing warmth
              and elegance to every entrance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-medium rounded-xl hover:bg-primary-dark transition-all duration-300 active:scale-[0.97] group"
              >
                Explore Collection
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="#featured"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary/30 text-primary font-medium rounded-xl hover:bg-primary/5 transition-all duration-300"
              >
                View Best Sellers
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex items-center gap-8 text-sm"
            >
              {[
                { label: "Premium Woods", value: "12+" },
                { label: "Years Crafting", value: "35+" },
                { label: "Happy Homes", value: "10K+" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="block text-2xl font-bold text-primary">
                    {stat.value}
                  </span>
                  <span className="text-muted">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&h=1000&fit=crop)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-5 max-w-[200px]">
              <p className="text-sm font-semibold">The Heritage</p>
              <p className="text-xs text-muted mt-1">Our most popular door</p>
              <p className="text-lg font-bold text-primary mt-2">$899</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-primary text-white rounded-2xl shadow-xl p-4 text-center">
              <p className="text-2xl font-bold">4.8</p>
              <p className="text-xs opacity-80">★★★★★</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
