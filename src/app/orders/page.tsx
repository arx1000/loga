"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useAuth } from "@/components/auth/auth-provider";
import { Package } from "lucide-react";

interface Order {
  id: string;
  items: { product: { id: string; name: string; price: number }; quantity: number }[];
  total: number;
  status: string;
  shipping_address: string | null;
  created_at: string;
}

export default function OrdersPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      router.replace("/login");
      return;
    }
    fetch("/api/orders")
      .then((r) => r.json())
      .then((data) => setOrders(data.orders || []))
      .finally(() => setLoading(false));
  }, [user, authLoading, router]);

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-2">
            My Orders
          </h1>
          <p className="text-muted text-lg mb-10">
            View your order history and status.
          </p>

          {orders.length === 0 ? (
            <div className="text-center py-20">
              <Package size={48} className="mx-auto text-muted mb-4" />
              <h2 className="text-xl font-semibold text-foreground mb-2">No orders yet</h2>
              <p className="text-muted mb-6">Start shopping to see your orders here.</p>
              <a
                href="/shop"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
              >
                Browse Doors
              </a>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="border border-border rounded-2xl p-6 bg-card"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs text-muted font-mono">#{order.id.slice(0, 8)}</p>
                      <p className="text-sm text-muted">
                        {new Date(order.created_at).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                        order.status === "pending"
                          ? "bg-amber-100 text-amber-800"
                          : order.status === "shipped"
                          ? "bg-blue-100 text-blue-800"
                          : order.status === "delivered"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-zinc-100 text-zinc-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    {order.items.map((item, i) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span className="text-foreground">
                          {item.product.name} × {item.quantity}
                        </span>
                        <span className="text-muted">
                          ${(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between">
                    <span className="font-semibold text-foreground">Total</span>
                    <span className="font-semibold text-foreground">
                      ${order.total.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
