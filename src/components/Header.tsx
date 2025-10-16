"use client";
import Link from "next/link";
import Container from "./Container";
import { useI18n } from "@/components/LocaleProvider";

export default function Header() {
  const { locale, setLocale, t } = useI18n();
  return (
    <header className="sticky-header border-b border-[#e4d9cc]">
      <Container className="flex items-center justify-between h-14">
        <Link href="/" className="font-semibold tracking-wide text-[#3a2b1e]">
          {t("site.name")}
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link className="hover:underline hover:underline-offset-4" href="/">
            {t("nav.home")}
          </Link>
          <Link
            className="hover:underline hover:underline-offset-4"
            href="/qingyuan"
          >
            {t("nav.qingyuan")}
          </Link>
          <Link
            className="hover:underline hover:underline-offset-4"
            href="/book"
          >
            {t("nav.book")}
          </Link>
          <button
            type="button"
            className="ml-2 rounded-md border border-[color:var(--brand-gold)] px-2 py-1 text-xs text-[color:var(--brand-ink)] hover:bg-[color:var(--brand-gold)]/10"
            onClick={() => setLocale(locale === "en" ? "zh" : "en")}
            aria-label="Toggle language"
          >
            {locale === "en" ? "中文" : "EN"}
          </button>
        </nav>
      </Container>
    </header>
  );
}


