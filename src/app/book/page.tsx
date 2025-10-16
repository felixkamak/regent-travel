"use client";
import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import { siteConfig } from "@/site.config";
import { Txt, useI18n } from "@/components/LocaleProvider";

type FormState = {
  name: string;
  contact: string;
  dates: string;
  groupSize: string;
  interests: string[];
  message: string;
};

const initialFormState: FormState = {
  name: "",
  contact: "",
  dates: "",
  groupSize: "",
  interests: [],
  message: "",
};

export default function BookPage() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [showWeChat, setShowWeChat] = useState(false);
  const { t, locale } = useI18n();

  const handleChange = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      const { name, value, type } = e.target as HTMLInputElement;
      if (type === "checkbox") {
        setForm((prev) => {
          const exists = prev.interests.includes(value);
          return {
            ...prev,
            interests: exists
              ? prev.interests.filter((i) => i !== value)
              : [...prev.interests, value],
          };
        });
      } else {
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    },
    []
  );

  const formspreeEndpoint = useMemo(
    () => process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "",
    []
  );

  const submitToFormspree = useCallback(async () => {
    if (!formspreeEndpoint) return false;
    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      return res.ok;
    } catch {
      return false;
    }
  }, [form, formspreeEndpoint]);

  const fallbackMailto = useCallback(() => {
    const subject = encodeURIComponent("Trip Inquiry (Qingyuan)");
    const body = encodeURIComponent(
      `Name: ${form.name}\nContact: ${form.contact}\nDates: ${form.dates}\nGroup size: ${form.groupSize}\nInterests: ${form.interests.join(", ")}\nMessage: ${form.message}`
    );
    window.location.href = `mailto:${siteConfig.contacts.email}?subject=${subject}&body=${body}`;
  }, [form]);

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const nextErrors: Record<string, string> = {};
      if (!form.name)
        nextErrors.name =
          locale === "zh" ? "请输入姓名" : "Please enter your name";
      if (!form.contact)
        nextErrors.contact =
          locale === "zh" ? "请输入邮箱或微信" : "Email or WeChat is required";
      if (!form.dates)
        nextErrors.dates =
          locale === "zh" ? "请输入出行日期" : "Please provide travel dates";
      if (Object.keys(nextErrors).length > 0) {
        setErrors(nextErrors);
        setToast(locale === "zh" ? "请检查填写信息。" : "Please check the highlighted fields.");
        setTimeout(() => setToast(null), 3000);
        return;
      }
      setSubmitting(true);
      const ok = await submitToFormspree();
      setSubmitting(false);
      if (ok) {
        setToast(t("book.success"));
        setForm(initialFormState);
        setErrors({});
      } else {
        setToast(
          locale === "zh"
            ? "表单服务暂不可用，正在打开邮箱…"
            : "Form service unavailable; opening email…"
        );
        fallbackMailto();
      }
      setTimeout(() => setToast(null), 3500);
    },
    [form, submitToFormspree, fallbackMailto, locale, t]
  );

  return (
    <div className="py-6">
      <div className="rounded-2xl border border-[var(--brand-sand)] bg-[color:var(--brand-sand)]/50 p-5 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column */}
          <section className="space-y-4">
            <h1 className="text-2xl font-semibold text-[#3a2b1e]">
              <Txt k="book.title" />
            </h1>
            <p className="text-[#5a4838]">
              <Txt k="book.subtitle" />
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button href={`https://wa.me/${siteConfig.contacts.whatsapp}`}>
                WhatsApp
              </Button>
              <Button onClick={() => setShowWeChat(true)} variant="ghost">
                WeChat
              </Button>
              <Button
                href={`mailto:${siteConfig.contacts.email}?subject=${encodeURIComponent(
                  "Trip Inquiry (Qingyuan)"
                )}`}
                variant="ghost"
              >
                Email
              </Button>
            </div>

            {showWeChat && (
              <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center p-4">
                <div className="w-full max-w-sm rounded-lg bg-white p-4 shadow-lg border border-[#e4d9cc]">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-[#3a2b1e]">
                      {locale === "zh" ? "添加微信" : "Add WeChat"}
                    </h2>
                    <button
                      onClick={() => setShowWeChat(false)}
                      className="text-[#6b5847] hover:underline"
                    >
                      {locale === "zh" ? "关闭" : "Close"}
                    </button>
                  </div>
                  <p className="mt-2 text-sm text-[#5a4838]">
                    {locale === "zh" ? "微信号：" : "WeChat:"}{" "}
                    <span className="font-medium">
                      {siteConfig.contacts.wechat}
                    </span>
                  </p>
                  <div className="relative mt-3 h-40 w-40 mx-auto">
                    <Image
                      src="/vercel.svg"
                      alt="WeChat QR"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            )}

            {toast && (
              <div className="mt-2 rounded-md bg-[#e7dfd6] text-[#3a2b1e] p-2 text-sm border border-[#e4d9cc]">
                {toast}
              </div>
            )}
          </section>

          {/* Right column */}
          <section>
            <form
              onSubmit={onSubmit}
              className="relative rounded-xl border border-[var(--brand-sand)] bg-white p-5 shadow-sm space-y-4"
            >
              {submitting && (
                <div className="absolute left-0 top-0 h-1 w-full overflow-hidden rounded-t-xl">
                  <div className="h-full w-full bg-[color:var(--brand-gold)] animate-pulse" />
                </div>
              )}

              {[
                ["name", "book.name"],
                ["contact", "book.email"],
                ["dates", "book.date"],
                ["groupSize", "book.size"],
              ].map(([name, key]) => (
                <div key={name}>
                  <div className="relative">
                    <input
                      id={name}
                      name={name}
                      type={name === "groupSize" ? "number" : "text"}
                      required={["name", "contact", "dates"].includes(name)}
                      min={name === "groupSize" ? 1 : undefined}
                      value={(form as any)[name]}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full rounded-md border border-[var(--brand-sand)] bg-white px-3 py-3 text-sm text-[color:var(--brand-ink)] placeholder-transparent shadow-sm focus-visible:ring-2 focus-visible:ring-[var(--brand-gold)]"
                    />
                    <label
                      htmlFor={name}
                      className="pointer-events-none absolute left-3 top-2.5 text-sm text-[color:var(--muted)] transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-[13px] peer-focus:top-2.5 peer-focus:text-sm"
                    >
                      <Txt k={key as any} />
                    </label>
                  </div>
                  {errors[name] && (
                    <p className="mt-1 text-xs text-red-700">{errors[name]}</p>
                  )}
                </div>
              ))}

              <fieldset className="space-y-2">
                <legend className="text-sm font-medium text-[#3a2b1e]">
                  <Txt k="book.interests" />
                </legend>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm text-[#3a2b1e]">
                  {[
                    ["Ceramics", locale === "zh" ? "陶瓷" : "Ceramics"],
                    ["Tea", locale === "zh" ? "茶叶" : "Tea"],
                    ["Culture", locale === "zh" ? "文化" : "Culture"],
                    ["Nature", locale === "zh" ? "自然" : "Nature"],
                  ].map(([value, label]) => (
                    <label key={value} className="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="interests"
                        value={value}
                        checked={form.interests.includes(value)}
                        onChange={handleChange}
                        className="h-4 w-4 rounded border-[#e4d9cc] text-[#9b7b5f] focus-visible:ring-[#9b7b5f]"
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full rounded-md border border-[var(--brand-sand)] bg-white px-3 py-3 text-sm text-[color:var(--brand-ink)] placeholder-transparent shadow-sm focus-visible:ring-2 focus-visible:ring-[var(--brand-gold)]"
                  />
                  <label
                    htmlFor="message"
                    className="pointer-events-none absolute left-3 top-2.5 text-sm text-[color:var(--muted)] transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-[13px] peer-focus:top-2.5 peer-focus:text-sm"
                  >
                    <Txt k="book.message" />
                  </label>
                </div>
              </div>

              <p className="text-xs text-[color:var(--muted)]">
                {locale === "zh"
                  ? "我们重视您的隐私，仅用于制定行程。"
                  : "We respect your privacy. Your details are only used to prepare your itinerary."}
              </p>

              <div className="pt-2">
                <Button type="submit" disabled={submitting}>
                  {submitting
                    ? locale === "zh"
                      ? "提交中…"
                      : "Submitting…"
                    : t("book.submit")}
                </Button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
