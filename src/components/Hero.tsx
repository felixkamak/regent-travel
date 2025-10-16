"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/Button";
import { images } from "@/images";
import { ReactNode } from "react";

type HeroProps = {
  title?: ReactNode;
  sub?: ReactNode;
  primaryLabel?: string;
  secondaryLabel?: string;
};

export default function Hero({ title, sub, primaryLabel, secondaryLabel }: HeroProps) {
  return (
    <section className="relative h-[100svh] min-h-[540px] w-full">
      {/* Background image */}
      <Image
        src={images.hero}
        alt="Qingyuan landscape"
        fill
        priority
        className="object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-ink)]/70 via-[color:var(--brand-ink)]/30 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center px-4 max-w-3xl"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold text-brand-ivory" style={{ fontFamily: "var(--font-playfair)" }}>
            {title ?? "Explore Qingyuan with Regent Travel"}
          </h1>
          <p className="mt-4 text-brand-ivory/90">
            {sub ?? "Tea gardens, ceramics, rivers & culture—planned for you. / 英德红茶、清远陶瓷、北江山水、人文历史——一次玩个够。"}
          </p>
          <p className="mt-3 text-xs tracking-wider text-brand-ivory/80">
            Qingyuan • Ceramics • Tea • River Life
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button href="/qingyuan" className="bg-[var(--brand-gold)] text-[var(--brand-ink)] hover:bg-[#b8934d]">
              {primaryLabel ?? "Discover Qingyuan"}
            </Button>
            <Button href="/book" variant="ghost" className="border border-[var(--brand-gold)] text-brand-ivory hover:bg-[var(--brand-gold)] hover:text-[var(--brand-ink)]">
              {secondaryLabel ?? "Book Now"}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


