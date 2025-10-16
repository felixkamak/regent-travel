"use client";

import Container from "./Container";
import { siteConfig } from "@/site.config";
import { useState } from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  const [showWeChat, setShowWeChat] = useState(false);

  return (
    <footer className="mt-12 border-t border-[color:var(--brand-gold)]/60 py-6 text-sm text-[color:var(--muted)] relative z-10">
      <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
        {/* Left side */}
        <div className="flex items-center gap-3">
          <span
            className="text-[color:var(--brand-ink)] font-medium"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Regent Travel
          </span>
          <span className="h-4 w-px bg-[color:var(--brand-gold)]/60" />
          <span className="text-xs">© {year}</span>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* External links: use <a> */}
          <a
            href={`https://wa.me/${siteConfig.contacts.whatsapp}`}
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>

          <button
            className="hover:underline"
            onClick={() => setShowWeChat(true)}
          >
            WeChat
          </button>

          <a
            href={`mailto:${siteConfig.contacts.email}`}
            className="hover:underline"
          >
            Email
          </a>
        </div>
      </Container>

      {/* Simple WeChat modal */}
      {showWeChat && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setShowWeChat(false)}
        >
          <div
            className="bg-white p-6 rounded-xl shadow-lg text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="mb-3 text-[color:var(--brand-ink)] font-medium">
              Add WeChat: {siteConfig.contacts.wechat}
            </p>
            <img
              src="/images/wechat-qr.png"
              alt="WeChat QR"
              className="w-48 h-48 mx-auto object-contain border border-[color:var(--brand-gold)]/40 rounded-lg"
            />
            <button
              className="mt-4 text-sm text-[color:var(--brand-gold)] hover:underline"
              onClick={() => setShowWeChat(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
