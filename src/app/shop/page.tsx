"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search } from "lucide-react";
import { products, categories } from "@/lib/products";
import { ProductCard } from "@/components/features/product-card";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filtered = products.filter((p) => {
    const matchCategory =
      activeCategory === "All" ||
      p.category.toLowerCase() === activeCategory.toLowerCase();
    const matchSearch =
      !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.material.toLowerCase().includes(search.toLowerCase()) ||
      p.style.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Our Collection
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold mt-3">
            Premium Wooden Doors
          </h1>
          <p className="text-muted mt-4 leading-relaxed">
            Explore our curated collection of handcrafted doors, each
            meticulously built from the world's finest hardwoods.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                      ? "bg-primary text-white shadow-md"
                    : "bg-muted/20 text-foreground/70 hover:bg-muted/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-64">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search doors..."
              className="w-full pl-9 pr-4 py-2.5 bg-muted/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-muted">No doors found matching your criteria.</p>
            <button
              onClick={() => { setActiveCategory("All"); setSearch(""); }}
              className="mt-4 text-primary font-medium hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
