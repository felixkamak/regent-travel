"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { images } from "@/images";
import Hero from "@/components/Hero";
import MotionFade from "@/components/MotionFade";
import { Txt, useI18n } from "@/components/LocaleProvider";

export default function Home() {
  const { t } = useI18n();

  return (
    <div className="space-y-12">
      {/* Full-bleed Hero */}
      <Hero
        title={<Txt k="hero.title" />}
        sub={<Txt k="hero.sub" />}
        primaryLabel={t("cta.discover")}
        secondaryLabel={t("cta.book")}
      />

      {/* Featured section */}
      <MotionFade className="space-y-6">
        <h2 className="text-xl font-semibold text-[#3a2b1e]">
          <Txt k="home.featured" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Ceramics */}
          <article className="group h-full rounded-xl bg-white/90 overflow-hidden border border-[var(--brand-sand)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-[var(--brand-gold)]">
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src={images.ceramics}
                alt="Qingyuan ceramics"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-5 flex flex-col h-full">
              <h3
                className="text-[color:var(--brand-ink)] text-lg font-semibold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                <Txt k="home.ceramics.title" />
              </h3>
              <div className="my-3 h-px bg-[color:var(--brand-sand)]/80" />
              <p className="text-sm text-[color:var(--muted)] flex-1">
                <Txt k="home.ceramics.desc" />
              </p>
              <div className="pt-3">
                <Link className="text-sm underline" href="/qingyuan#ceramics">
                  {t("qingyuan.planRoute")}
                </Link>
              </div>
            </div>
          </article>

          {/* Tea */}
          <article className="group h-full rounded-xl bg-white/90 overflow-hidden border border-[var(--brand-sand)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-[var(--brand-gold)]">
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src={images.tea}
                alt="Tea gardens"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-5 flex flex-col h-full">
              <h3
                className="text-[color:var(--brand-ink)] text-lg font-semibold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                <Txt k="home.tea.title" />
              </h3>
              <div className="my-3 h-px bg-[color:var(--brand-sand)]/80" />
              <p className="text-sm text-[color:var(--muted)] flex-1">
                <Txt k="home.tea.desc" />
              </p>
              <div className="pt-3">
                <Link className="text-sm underline" href="/qingyuan#tea">
                  {t("qingyuan.planRoute")}
                </Link>
              </div>
            </div>
          </article>

          {/* River & Culture */}
          <article className="group h-full rounded-xl bg-white/90 overflow-hidden border border-[var(--brand-sand)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-[var(--brand-gold)]">
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src={images.river}
                alt="River and culture"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-5 flex flex-col h-full">
              <h3
                className="text-[color:var(--brand-ink)] text-lg font-semibold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                <Txt k="home.river.title" />
              </h3>
              <div className="my-3 h-px bg-[color:var(--brand-sand)]/80" />
              <p className="text-sm text-[color:var(--muted)] flex-1">
                <Txt k="home.river.desc" />
              </p>
              <div className="pt-3">
                <Link className="text-sm underline" href="/qingyuan#culture">
                  {t("qingyuan.planRoute")}
                </Link>
              </div>
            </div>
          </article>
        </div>
      </MotionFade>

      {/* Why travel with us */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-[#3a2b1e]">
          <Txt k="home.whyTravel" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-lg border border-[#e4d9cc] bg-white/70 p-4 shadow-sm">
            <h3 className="font-medium text-[#3a2b1e]">
              <Txt k="home.localPartners" />
            </h3>
            <p className="text-sm text-[#6b5847]">
              <Txt k="home.localPartners.desc" />
            </p>
          </div>
          <div className="rounded-lg border border-[#e4d9cc] bg-white/70 p-4 shadow-sm">
            <h3 className="font-medium text-[#3a2b1e]">
              <Txt k="home.flexible" />
            </h3>
            <p className="text-sm text-[#6b5847]">
              <Txt k="home.flexible.desc" />
            </p>
          </div>
          <div className="rounded-lg border border-[#e4d9cc] bg-white/70 p-4 shadow-sm">
            <h3 className="font-medium text-[#3a2b1e]">
              <Txt k="home.bilingual" />
            </h3>
            <p className="text-sm text-[#6b5847]">
              <Txt k="home.bilingual.desc" />
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[#3a2b1e]">
          <Txt k="home.testimonials" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <figure className="rounded-lg border border-[#e4d9cc] bg-white/70 p-4 shadow-sm">
            <blockquote className="text-sm text-[#3a2b1e]">
              <Txt k="home.review1.text" />
            </blockquote>
            <figcaption className="text-xs text-[#6b5847] mt-2">
              <Txt k="home.review1.author" />
            </figcaption>
          </figure>

          <figure className="rounded-lg border border-[#e4d9cc] bg-white/70 p-4 shadow-sm">
            <blockquote className="text-sm text-[#3a2b1e]">
              <Txt k="home.review2.text" />
            </blockquote>
            <figcaption className="text-xs text-[#6b5847] mt-2">
              <Txt k="home.review2.author" />
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}
