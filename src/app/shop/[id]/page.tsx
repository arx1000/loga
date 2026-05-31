"use client";

import { useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  ArrowLeft,
  ShoppingCart,
  Check,
  Star,
  Package,
  Shield,
  Ruler,
} from "lucide-react";
import { getProductBySlug } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/components/features/cart-provider";

export default function ProductPage() {
  const { id } = useParams();
  const product = getProductBySlug(id as string);
  const { addItem } = useCart();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  if (!product) {
    return (
      <div className="pt-24 text-center">
        <h1 className="text-2xl font-bold">Door not found</h1>
        <Link href="/shop" className="text-primary mt-4 inline-block">
          Back to shop
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Shop
        </Link>

        <div ref={ref} className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-muted/20">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute top-4 left-4 flex gap-2">
                {product.isNew && <Badge variant="new">New</Badge>}
                {product.isSale && <Badge variant="sale">Sale</Badge>}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs text-muted uppercase tracking-wider font-medium">
                {product.category}
              </span>
              <span className="text-muted">·</span>
              <span className="text-xs text-muted uppercase tracking-wider font-medium">
                {product.style}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif font-bold mt-1">
              {product.name}
            </h1>
            <p className="text-base text-muted mt-1">{product.material}</p>

            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.floor(product.rating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-muted"
                    }
                  />
                ))}
                <span className="text-sm font-medium ml-1">
                  {product.rating}
                </span>
              </div>
              {product.inStock ? (
                <span className="flex items-center gap-1 text-emerald-600 text-sm font-medium">
                  <Check size={14} />
                  In Stock
                </span>
              ) : (
                <span className="text-red-500 text-sm font-medium">
                  Out of Stock
                </span>
              )}
            </div>

            <div className="flex items-baseline gap-3 mt-6">
              <span className="text-3xl font-bold text-primary">
                ${product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-muted line-through">
                  ${product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            <p className="text-muted leading-relaxed mt-6">
              {product.description}
            </p>

            <Button
              onClick={() => addItem(product)}
              size="lg"
              className="w-full mt-8 gap-2"
              disabled={!product.inStock}
            >
              <ShoppingCart size={18} />
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>

            <div className="grid grid-cols-3 gap-4 mt-8 p-5 bg-muted/10 rounded-2xl">
              {[
                { icon: Package, label: "Free Shipping", sub: "Orders $500+" },
                { icon: Shield, label: "5-Year Warranty", sub: "Full coverage" },
                { icon: Ruler, label: "Custom Sizes", sub: "Bespoke available" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <item.icon size={20} className="text-primary mx-auto mb-1" />
                  <p className="text-xs font-semibold">{item.label}</p>
                  <p className="text-[10px] text-muted">{item.sub}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-3">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 p-4 bg-muted/10 rounded-xl">
              <span className="text-xs text-muted">Dimensions</span>
              <p className="text-sm font-medium mt-0.5">{product.dimensions}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
