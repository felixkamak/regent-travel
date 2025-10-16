"use client";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/images";
import MotionFade from "@/components/MotionFade";
import { Txt, useI18n } from "@/components/LocaleProvider";

export default function QingyuanPage() {
  const { t } = useI18n();

  return (
    <div className="py-6">
      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8">
        {/* Sticky TOC */}
        <aside className="hidden lg:block">
          <nav className="sticky top-24 text-sm">
            <p
              className="mb-2 font-medium"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {t("nav.qingyuan")}
            </p>
            <ul className="space-y-2 text-[color:var(--muted)]">
              <li>
                <a className="hover:underline" href="#ceramics">
                  <Txt k="qingyuan.ceramics.title" />
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#tea">
                  <Txt k="qingyuan.tea.title" />
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#culture">
                  <Txt k="qingyuan.culture.title" />
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#history">
                  <Txt k="qingyuan.history.title" />
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Intro */}
          <MotionFade className="space-y-4">
            <h1
              className="text-3xl sm:text-4xl text-[color:var(--brand-ink)]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <Txt k="nav.qingyuan" />
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 items-start">
              <div>
                <p className="text-[color:var(--brand-ink)] leading-7">
                  <span
                    className="float-left mr-2 text-5xl leading-none"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    
                  </span>
                  <Txt k="qingyuan.intro.en" />
                </p>
                <p className="mt-3 text-[color:var(--muted)]">
                  <Txt k="qingyuan.intro.zh" />
                </p>
              </div>
              <div className="rounded-lg overflow-hidden border border-[var(--brand-sand)] bg-white/80 shadow-sm">
                <iframe
                  title="Map of Qingyuan"
                  src="about:blank"
                  className="w-full h-48"
                />
              </div>
            </div>
          </MotionFade>

          {/* Ceramics */}
          <MotionFade id="ceramics" className="scroll-mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[var(--brand-sand)]">
                <Image
                  src={images.ceramics}
                  alt="Ceramics"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3">
                <h2
                  className="text-2xl"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  <Txt k="qingyuan.ceramics.title" />
                </h2>
                <blockquote className="text-[color:var(--brand-gold)] italic">
                  “{t("home.ceramics.title")}”
                </blockquote>
                <p className="text-[color:var(--brand-ink)]">
                  <Txt k="home.ceramics.desc" />
                </p>
                <Link href="/book" className="underline">
                  <Txt k="qingyuan.planRoute" /> →
                </Link>
              </div>
            </div>
          </MotionFade>

          {/* Tea */}
          <MotionFade id="tea" className="scroll-mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="order-last md:order-first space-y-3">
                <h2
                  className="text-2xl"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  <Txt k="qingyuan.tea.title" />
                </h2>
                <blockquote className="text-[color:var(--brand-gold)] italic">
                  “{t("home.tea.title")}”
                </blockquote>
                <p className="text-[color:var(--brand-ink)]">
                  <Txt k="home.tea.desc" />
                </p>
                <Link href="/book" className="underline">
                  <Txt k="qingyuan.planRoute" /> →
                </Link>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[var(--brand-sand)]">
                <Image
                  src={images.tea}
                  alt="Tea gardens"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </MotionFade>

          {/* Culture */}
          <MotionFade id="culture" className="scroll-mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[var(--brand-sand)]">
                <Image
                  src={images.culture}
                  alt="Riverside culture"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3">
                <h2
                  className="text-2xl"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  <Txt k="qingyuan.culture.title" />
                </h2>
                <blockquote className="text-[color:var(--brand-gold)] italic">
                  “Markets, halls, and quiet lanes.”
                </blockquote>
                <p className="text-[color:var(--brand-ink)]">
                  {t("home.river.desc")}
                </p>
                <Link href="/book" className="underline">
                  <Txt k="qingyuan.planRoute" /> →
                </Link>
              </div>
            </div>
          </MotionFade>

          {/* History */}
          <MotionFade id="history" className="scroll-mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="order-last md:order-first space-y-3">
                <h2
                  className="text-2xl"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  <Txt k="qingyuan.history.title" />
                </h2>
                <blockquote className="text-[color:var(--brand-gold)] italic">
                  “From river trade to modern craft.”
                </blockquote>
                <p className="text-[color:var(--brand-ink)]">
                  <Txt k="home.bilingual.desc" />
                </p>
                <Link href="/book" className="underline">
                  <Txt k="qingyuan.planRoute" /> →
                </Link>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[var(--brand-sand)]">
                <Image
                  src={images.hero}
                  alt="History"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </MotionFade>

          {/* Routes teaser */}
          <section className="rounded-xl border border-[var(--brand-sand)] bg-white/80 p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h3
                  className="text-xl"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Suggested 2-Day / 3-Day routes
                </h3>
                <p className="text-sm text-[color:var(--muted)]">
                  {t("home.featured")}
                </p>
              </div>
              <Link href="/book" className="underline">
                <Txt k="qingyuan.planRoute" /> →
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
