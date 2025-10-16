"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

/** Locales we support */
export type Locale = "en" | "zh";

/** Simple dictionary type */
type Dictionary = Record<string, string>;

/**
 * TRANSLATIONS
 * You can freely add more keys. No need to touch types.
 */
const dictionaries: Record<Locale, Dictionary> = {
  en: {
    // Site / nav / hero
    "site.name": "Regent Travel Services",
    "site.tagline": "Explore Qingyuan, simply.",
    "nav.home": "Home",
    "nav.qingyuan": "About Qingyuan",
    "nav.book": "Book",
    "hero.title": "Explore Qingyuan with Regent Travel",
    "hero.sub":
      "Tea gardens, ceramics, rivers & culture—planned for you.",
    "cta.discover": "Discover Qingyuan",
    "cta.book": "Book Now",

    // About Qingyuan intro (kept as .en/.zh to match your pages if they reference them)
    "qingyuan.intro.en":
      "Qingyuan (清远), in Guangdong’s lush north, blends river canyons, tea gardens, and a living ceramics craft scene. It’s perfect for 2–4 day escapes near the Greater Bay Area.",
    "qingyuan.intro.zh":
      "Qingyuan overview in Chinese is available on the 中文 tab.",
    "qingyuan.ceramics.title": "Ceramics / 陶瓷",
    "qingyuan.tea.title": "Tea / 茶叶（英德红茶）",
    "qingyuan.culture.title": "Culture / 文化",
    "qingyuan.history.title": "History / 历史",
    "qingyuan.planRoute": "Plan a route",

    // Book page
    "book.title": "Book",
    "book.subtitle":
      "Tell us your dates and interests—we’ll propose routes in 24 hours.",
    "book.name": "Name",
    "book.email": "Email or WeChat",
    "book.date": "Travel dates",
    "book.size": "Group size",
    "book.interests": "Interests",
    "book.message": "Message",
    "book.submit": "Request proposal",
    "book.success": "Thanks! We'll get back within 24 hours.",

    // HOME: Featured / Why travel / Testimonials (NEW)
    "home.featured": "Featured",
    "home.ceramics.title": "Ceramics",
    "home.ceramics.desc":
      "Hands-on studio visits and traditional kiln heritage.",
    "home.tea.title": "Tea",
    "home.tea.desc":
      "Walk the terraced fields and taste Yingde black tea at source.",
    "home.river.title": "River & Culture",
    "home.river.desc":
      "Cruise the Beijiang and explore local museums and markets.",

    "home.whyTravel": "Why travel with us",
    "home.localPartners": "Local partners",
    "home.localPartners.desc":
      "Trusted vendors and hosts on the ground.",
    "home.flexible": "Flexible itineraries",
    "home.flexible.desc":
      "Tailored pacing for families and groups.",
    "home.bilingual": "Bilingual guides",
    "home.bilingual.desc":
      "English/中文 support throughout.",

    "home.testimonials": "What travelers say",
    "home.review1.text":
      "Seamless planning and beautiful scenery. The tea tasting was a highlight!",
    "home.review1.author": "— A. Wong",
    "home.review2.text":
      "Thoughtful arrangements and professional guides—our family had a great time.",
    "home.review2.author": "— Ms. Zhang",
  },

  zh: {
    // Site / nav / hero
    "site.name": "丽晶旅游服务有限公司",
    "site.tagline": "轻松游清远。",
    "nav.home": "首页",
    "nav.qingyuan": "关于清远",
    "nav.book": "预订",
    "hero.title": "与 丽晶 一起探索清远",
    "hero.sub":
      "英德红茶、清远陶瓷、北江山水、人文历史——一次玩个够。",
    "cta.discover": "探索清远",
    "cta.book": "立即预订",

    // About Qingyuan intro
    "qingyuan.intro.en":
      "英文简介见 EN 语言。",
    "qingyuan.intro.zh":
      "清远位于广东北部，集山水峡谷、英德茶园与在地陶瓷手作于一身，适合大湾区 2–4 天轻旅行。",
    "qingyuan.ceramics.title": "陶瓷 / Ceramics",
    "qingyuan.tea.title": "茶叶（英德红茶） / Tea",
    "qingyuan.culture.title": "文化 / Culture",
    "qingyuan.history.title": "历史 / History",
    "qingyuan.planRoute": "规划行程",

    // Book page
    "book.title": "预订",
    "book.subtitle":
      "告诉我们你的日期与兴趣，我们会在 24 小时内给出行程建议。",
    "book.name": "姓名",
    "book.email": "邮箱或微信",
    "book.date": "出行日期",
    "book.size": "出行人数",
    "book.interests": "兴趣主题",
    "book.message": "备注",
    "book.submit": "提交行程需求",
    "book.success": "感谢！我们将在 24 小时内与您联系。",

    // HOME: Featured / Why travel / Testimonials (NEW)
    "home.featured": "特色体验",
    "home.ceramics.title": "陶瓷",
    "home.ceramics.desc":
      "走进工作室与传统窑口，亲手体验。",
    "home.tea.title": "英德红茶",
    "home.tea.desc":
      "漫步茶园，在产地品鉴英德红茶。",
    "home.river.title": "江岸与人文",
    "home.river.desc":
      "沿北江巡游，走进博物馆与市集。",

    "home.whyTravel": "为什么选择我们",
    "home.localPartners": "在地合作",
    "home.localPartners.desc":
      "与可信赖的本地商家与东道主合作。",
    "home.flexible": "行程灵活",
    "home.flexible.desc":
      "适合家庭与小团体的节奏安排。",
    "home.bilingual": "双语导游",
    "home.bilingual.desc":
      "全程中英双语服务，沟通无障碍。",

    "home.testimonials": "旅行者怎么说",
    "home.review1.text":
      "行程安排贴心，风景很美，茶园品鉴太棒了！",
    "home.review1.author": "—— A. Wong",
    "home.review2.text":
      "讲解专业、衔接顺畅，家人都玩得很开心。",
    "home.review2.author": "—— 张女士",
  },
};

/**
 * TIP: To avoid you having to maintain a giant union type,
 * we keep the key type as `string`. You can still autocomplete keys.
 */
export type I18nKey = string;

type I18nContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: I18nKey) => string;
};

const LocaleContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "regent.locale";

function getBrowserDefaultLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const lang = window.navigator.language || "en";
  return lang.toLowerCase().startsWith("zh") ? ("zh" as const) : "en";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // initialize from storage or browser
  useEffect(() => {
    try {
      const stored =
        typeof window !== "undefined"
          ? (window.localStorage.getItem(STORAGE_KEY) as Locale | null)
          : null;
      const initial = stored ?? getBrowserDefaultLocale();
      setLocaleState(initial);
    } catch {
      setLocaleState(getBrowserDefaultLocale());
    }
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, l);
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const t = useCallback(
    (key: I18nKey): string => {
      const dict = dictionaries[locale] ?? dictionaries.en;
      return dict[key] ?? dictionaries.en[key] ?? key;
    },
    [locale]
  );

  const value = useMemo<I18nContextValue>(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useI18n must be used within a LocaleProvider");
  return ctx;
}

/** Convenience component: <Txt k="hero.title" /> */
export function Txt({ k }: { k: I18nKey }) {
  const { t } = useI18n();
  return <>{t(k)}</>;
}

export { dictionaries };
