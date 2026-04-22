"use client";

import { Link, usePathname } from "@/i18n/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { type NavItem } from "@/lib/content";
import { getNav } from "@/lib/get-content";
import { useLocale } from "next-intl";

const linkBase =
  "text-[17px] transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none";
const linkInactive = "font-medium text-white/70";
const linkActive = "font-semibold text-white";

function isItemActive(item: NavItem, pathname: string): boolean {
  if (item.href) {
    if (item.href === "/") return pathname === "/";
    return pathname === item.href || pathname.startsWith(`${item.href}/`);
  }
  return !!item.children?.some(
    (child) =>
      pathname === child.href || pathname.startsWith(`${child.href}/`),
  );
}

export function MenuBar() {
  const locale = useLocale();
  const nav = getNav(locale);
  const pathname = usePathname() ?? "/";
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const delta = y - lastY;
      if (y > 120 && delta > 4) {
        setHidden(true);
      } else if (delta < -4 || y <= 24) {
        setHidden(false);
      }
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) setHidden(false);
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-transparent transition-[height,transform] duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <Container width="wide">
        <div
          className={`flex items-center justify-between transition-[height] duration-300 ${
            scrolled ? "h-[58px] md:h-[64px]" : "h-[77px] md:h-[90px]"
          }`}
        >
          <Link
            href="/"
            className="flex items-center"
            aria-label={nav.brandLogoAlt}
          >
            <Image
              src="/logos/primedic.webp"
              alt="Primedic"
              width={316}
              height={66}
              priority
              className={`w-auto transition-[height] duration-300 ${
                scrolled ? "h-[32px] md:h-[36px]" : "h-[40px] md:h-[48px]"
              }`}
            />
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={
              locale === "en"
                ? mobileOpen
                  ? "Close menu"
                  : "Open menu"
                : mobileOpen
                  ? "Menüyü kapat"
                  : "Menüyü aç"
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>

          <nav
            aria-label="Ana menü"
            className="hidden items-center gap-10 lg:flex"
          >
            {nav.items.map((item) => {
              const active = isItemActive(item, pathname);
              return item.children ? (
                <div key={item.label} className="group relative">
                  <button
                    type="button"
                    className={`${linkBase} ${active ? linkActive : linkInactive} inline-flex items-center gap-1.5`}
                    aria-haspopup="menu"
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 12 12"
                      aria-hidden="true"
                      className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                    >
                      <path
                        d="M3 4.5l3 3 3-3"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </button>

                  <div
                    className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-[opacity,visibility] duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
                  >
                    <ul
                      role="menu"
                      className="min-w-[260px] rounded-[16px] border border-white/15 bg-[#2a0505]/95 p-2 shadow-2xl backdrop-blur"
                    >
                      {item.children.map((child) => (
                        <li key={child.href} role="none">
                          <Link
                            role="menuitem"
                            href={child.href}
                            className="block rounded-[12px] px-4 py-3 text-[15px] font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white focus-visible:bg-white/10 focus-visible:text-white focus-visible:outline-none"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  aria-current={active ? "page" : undefined}
                  className={`${linkBase} ${active ? linkActive : linkInactive}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </Container>

      <div
        id="mobile-menu"
        className={`lg:hidden ${mobileOpen ? "block" : "hidden"} border-t border-white/10 bg-[#2a0505]/95 backdrop-blur-md`}
      >
        <Container width="wide">
          <nav aria-label="Mobil menü" className="py-6">
            <ul className="flex flex-col gap-1">
              {nav.items.map((item) => {
                const active = isItemActive(item, pathname);
                return item.children ? (
                  <li key={item.label} className="py-2">
                    <div className="px-3 pb-2 text-[13px] font-semibold uppercase tracking-wider text-white/50">
                      {item.label}
                    </div>
                    <ul className="flex flex-col gap-1">
                      {item.children.map((child) => {
                        const childActive =
                          pathname === child.href ||
                          pathname.startsWith(`${child.href}/`);
                        return (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              aria-current={childActive ? "page" : undefined}
                              className={`block rounded-[12px] px-3 py-3 text-[17px] transition-colors hover:bg-white/10 hover:text-white ${
                                childActive
                                  ? "font-semibold text-white"
                                  : "font-medium text-white/70"
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href!}
                      onClick={() => setMobileOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`block rounded-[12px] px-3 py-3 text-[17px] transition-colors hover:bg-white/10 hover:text-white ${
                        active
                          ? "font-semibold text-white"
                          : "font-medium text-white/70"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Container>
      </div>
    </header>
  );
}
