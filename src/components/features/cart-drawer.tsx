"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/components/features/cart-provider";
import { cn } from "@/lib/utils";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } =
    useCart();

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 transition-opacity"
          onClick={closeCart}
        />
      )}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-[420px] bg-card z-50 shadow-2xl transform transition-transform duration-300 flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-primary" />
            <span className="font-semibold text-lg">Cart ({items.length})</span>
          </div>
          <button
            onClick={closeCart}
            className="p-1 hover:bg-border rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-muted px-6">
            <ShoppingBag size={48} strokeWidth={1} />
            <p className="text-lg font-medium">Your cart is empty</p>
            <p className="text-sm">Add some doors to get started</p>
            <Link
              href="/shop"
              onClick={closeCart}
              className="mt-2 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors"
            >
              Browse Doors
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 bg-muted/10 rounded-xl p-3 border border-border"
                >
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-muted/20">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-xs text-muted mt-0.5">
                      {item.product.material}
                    </p>
                    <p className="text-sm font-semibold text-primary mt-1">
                      ${item.product.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-muted hover:text-red-500 transition-colors"
                    >
                      <X size={16} />
                    </button>
                    <div className="flex items-center gap-2 bg-muted/20 rounded-lg px-2 py-1">
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
                      <span className="text-sm font-medium w-5 text-center">
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
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-border px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted">Subtotal</span>
                <span className="text-lg font-bold">
                  ${totalPrice.toLocaleString()}
                </span>
              </div>
              <Link
                href="/cart"
                onClick={closeCart}
                className="block w-full py-3 bg-primary text-white text-center rounded-xl font-medium hover:bg-primary-dark transition-colors"
              >
                View Cart & Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
