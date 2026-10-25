"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  ["/", "Home"],
  ["/research/", "Research"],
  ["/experience/", "Geotechnical Experience"],
  ["/research-ideas/", "Research Ideas"],
  ["/teaching/", "Teaching"],
];

export default function Nav() {
  const p = usePathname() || "/";
  const cur = p.endsWith("/") ? p : p + "/";
  return (
    <nav className="nav" aria-label="Pages">
      <div>
        {items.map(([href, label]) => (
          <Link
            key={href}
            href={href}
            className={
              cur === href ||
              (href === "/experience/" && cur === "/field/")
                ? "on"
                : undefined
            }
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
