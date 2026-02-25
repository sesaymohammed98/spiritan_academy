"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const schoolLogoPath = "/spiritan_logo.jpg";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
  { href: "/student-life", label: "Campus Life" },
  { href: "/awards", label: "Awards" },
  { href: "/programs", label: "Programs" },
  { href: "/events", label: "Events/Activities" },
  { href: "/contact", label: "Contact" },
  { href: "/media", label: "Media" },
  { href: "/verification", label: "Verification" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    if (href === "/student-life") {
      return pathname === "/student-life" || pathname === "/campus-life";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header>
      <div className="container header-flex">
        <Link href="/" className="logo-area" aria-label="Spiritan Academy home">
          <div className="logo-icon" aria-hidden="true">
            <Image src={schoolLogoPath} alt="" width={42} height={42} priority />
          </div>
          <div className="logo-text">
            <h1>Spiritan Academy</h1>
            <div className="catholic-badge">A Catholic Demonstration School</div>
          </div>
        </Link>

        <button
          type="button"
          className={`menu-toggle ${isMenuOpen ? "menu-open" : ""}`}
          aria-expanded={isMenuOpen}
          aria-controls="main-site-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((previous) => !previous)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="main-site-nav"
          className={`nav-links ${isMenuOpen ? "nav-links-open" : ""}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? "nav-active" : undefined}
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-red" onClick={() => setIsMenuOpen(false)}>
            Visit
          </Link>
        </nav>
      </div>
    </header>
  );
}
