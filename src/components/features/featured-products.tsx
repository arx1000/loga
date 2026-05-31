"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getFeaturedProducts } from "@/lib/products";
import { ProductCard } from "@/components/features/product-card";

export function FeaturedProducts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const featured = getFeaturedProducts();

  return (
    <section id="featured" ref={ref} className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Featured Collection
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mt-3">
            Our Finest Craftsmanship
          </h2>
          <p className="text-muted mt-4 leading-relaxed">
            Each door is a testament to decades of masterful woodworking —
            selected for their exceptional design and quality.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300 group"
          >
            View All Doors
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
