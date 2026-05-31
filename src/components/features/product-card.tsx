"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/components/features/cart-provider";
import { Product } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const { addItem } = useCart();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <Card className="group overflow-hidden">
        <Link href={`/shop/${product.slug}`} className="block">
          <div className="relative aspect-[3/4] overflow-hidden bg-muted/20">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-3 left-3 flex gap-2">
              {product.isNew && <Badge variant="new">New</Badge>}
              {product.isSale && <Badge variant="sale">Sale</Badge>}
            </div>
          </div>
        </Link>
        <div className="p-4 sm:p-5">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-muted uppercase tracking-wider font-medium">
              {product.style}
            </span>
            <div className="flex items-center gap-1">
              <Star size={12} className="fill-amber-400 text-amber-400" />
              <span className="text-xs font-medium">{product.rating}</span>
            </div>
          </div>
          <Link href={`/shop/${product.slug}`}>
            <h3 className="font-semibold text-base sm:text-lg text-foreground hover:text-primary transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs text-muted mt-0.5">{product.material}</p>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-primary">
                ${product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted line-through">
                  ${product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <button
              onClick={() => addItem(product)}
              className={cn(
                "p-2.5 rounded-xl transition-all duration-300",
                "bg-primary/10 text-primary hover:bg-primary hover:text-white",
                "active:scale-90"
              )}
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingCart size={16} />
            </button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
