import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              Lux<span className="text-accent">Wood</span>
            </Link>
            <p className="mt-4 text-sm text-background/60 leading-relaxed max-w-xs">
              Handcrafted wooden doors since 1989. Every door tells a story of
              tradition, quality, and timeless beauty.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {["Classic", "Modern", "Luxury", "Rustic"].map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/shop?category=${cat.toLowerCase()}`}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {cat} Doors
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Shipping Info", href: "#" },
                { label: "Returns", href: "#" },
                { label: "Warranty", href: "#" },
                { label: "FAQ", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#" },
                { label: "Craftsmanship", href: "#" },
                { label: "Contact", href: "#" },
                { label: "Careers", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            &copy; {new Date().getFullYear()} LuxWood Doors. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs text-background/40 hover:text-background/60 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
