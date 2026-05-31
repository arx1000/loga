"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  ArrowLeft,
  ShoppingBag,
  Plus,
  Minus,
  X,
  Trash2,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/features/cart-provider";
import { useAuth } from "@/components/auth/auth-provider";

export default function CartPage() {
  const [submitting, setSubmitting] = useState(false);
  const [orderDone, setOrderDone] = useState(false);
  const [orderError, setOrderError] = useState("");
  const { user } = useAuth();
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    totalPrice,
  } = useCart();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const shipping = totalPrice >= 500 ? 0 : 49;
  const grandTotal = totalPrice + shipping;

  const handleCheckout = async () => {
    if (!user) {
      window.location.href = "/login";
      return;
    }
    setSubmitting(true);
    setOrderError("");
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            product_id: i.product.id,
            name: i.product.name,
            price: i.product.price,
            quantity: i.quantity,
          })),
          total: totalPrice + (totalPrice >= 500 ? 0 : 49),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      clearCart();
      setOrderDone(true);
    } catch (err: any) {
      setOrderError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (orderDone) {
    return (
      <div className="pt-24 sm:pt-28 pb-20">
        <div className="max-w-md mx-auto px-4 text-center py-20">
          <CheckCircle size={64} className="text-emerald-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold">Order Placed!</h1>
          <p className="text-muted mt-3">
            Thank you for your order. We'll send you a confirmation shortly.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="pt-24 sm:pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 text-center py-20">
          <ShoppingBag size={56} className="text-muted mx-auto mb-6" strokeWidth={1} />
          <h1 className="text-3xl font-bold">Your cart is empty</h1>
          <p className="text-muted mt-3">
            Looks like you haven't added any doors yet.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors"
          >
            <ArrowLeft size={16} />
            Browse Our Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors mb-2"
            >
              <ArrowLeft size={16} />
              Continue Shopping
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold">Shopping Cart</h1>
            <p className="text-muted text-sm mt-1">
              {items.length} {items.length === 1 ? "door" : "doors"} in your cart
            </p>
          </div>
          <button
            onClick={clearCart}
            className="flex items-center gap-1.5 text-sm text-red-500 hover:text-red-600 transition-colors"
          >
            <Trash2 size={16} />
            Clear
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, i) => (
              <motion.div
                key={item.product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex gap-4 sm:gap-6 bg-white rounded-2xl p-4 sm:p-6 border border-border"
              >
                <div className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden flex-shrink-0 bg-zinc-100">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <Link
                        href={`/shop/${item.product.slug}`}
                        className="font-semibold text-base sm:text-lg hover:text-primary transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-sm text-muted">
                        {item.product.material}
                      </p>
                      <p className="text-sm text-muted">
                        {item.product.style}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="p-1 hover:bg-red-50 rounded-lg transition-colors text-muted hover:text-red-500"
                    >
                      <X size={18} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3 bg-zinc-100 rounded-xl px-3 py-1.5">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                        className="p-0.5 hover:text-primary transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-semibold w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="p-0.5 hover:text-primary transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <p className="font-bold text-lg text-primary">
                      ${(item.product.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 border border-border sticky top-28">
              <h3 className="font-semibold text-lg mb-5">Order Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted">Subtotal</span>
                  <span className="font-medium">
                    ${totalPrice.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <span className="text-emerald-600">Free</span>
                    ) : (
                      `$${shipping}`
                    )}
                  </span>
                </div>
                {totalPrice < 500 && (
                  <p className="text-[11px] text-muted">
                    Add ${(500 - totalPrice).toLocaleString()} more for free shipping
                  </p>
                )}
                <div className="border-t border-border pt-3 mt-3">
                  <div className="flex justify-between text-base">
                    <span className="font-semibold">Total</span>
                    <span className="font-bold text-lg text-primary">
                      ${grandTotal.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
              {orderError && (
                <p className="text-sm text-red-500 bg-red-50 px-4 py-2 rounded-lg">
                  {orderError}
                </p>
              )}
              <Button
                size="lg"
                className="w-full mt-4"
                onClick={handleCheckout}
                disabled={submitting}
              >
                {submitting
                  ? "Placing Order..."
                  : user
                    ? "Place Order"
                    : "Sign In to Order"}
              </Button>
              <p className="text-[11px] text-muted text-center mt-3">
                Secure checkout · Free returns within 30 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
