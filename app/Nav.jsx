"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  ["/", "Home"],
  ["/research/", "Research"],
  ["/field/", "Field & Numerical"],
  ["/experience/", "Experience"],
  ["/teaching/", "Teaching"],
];

export default function Nav() {
  const p = usePathname() || "/";
  const cur = p.endsWith("/") ? p : p + "/";
  return (
    <nav className="nav" aria-label="Pages">
      <div>
        {items.map(([href, label]) => (
          <Link key={href} href={href} className={cur === href ? "on" : undefined}>{label}</Link>
        ))}
      </div>
    </nav>
  );
}
