"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Truck, RotateCcw, Star, TreePine, Ruler } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "5-Year Warranty",
    description:
      "Every door is backed by our comprehensive craftsmanship warranty for complete peace of mind.",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description:
      "Complimentary shipping on all orders over $500, with white-glove delivery available.",
  },
  {
    icon: RotateCcw,
    title: "30-Day Returns",
    description:
      "Not satisfied? Return your door within 30 days for a full refund, no questions asked.",
  },
  {
    icon: Star,
    title: "Premium Materials",
    description:
      "We source only the finest hardwoods — mahogany, oak, walnut, and ash from sustainable forests.",
  },
  {
    icon: TreePine,
    title: "Eco-Friendly",
    description:
      "Committed to responsible forestry with FSC-certified materials and low-VOC finishes.",
  },
  {
    icon: Ruler,
    title: "Custom Sizes",
    description:
      "Need a non-standard size? We offer bespoke dimensions for any door in our collection.",
  },
];

export function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mt-3">
            Crafted With Care
          </h2>
          <p className="text-muted mt-4 leading-relaxed">
            From sustainable sourcing to expert craftsmanship, every detail
            matters.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 sm:p-8 border border-border hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <benefit.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
