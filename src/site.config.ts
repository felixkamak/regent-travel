export const siteConfig = {
  name: "Regent Travel Services",
  tagline: "Explore Qingyuan, simply.",
  contacts: {
    whatsapp: "85291234567",
    wechat: "RegentTravelCN",
    email: "hello@regenttravel.cn",
  },
} as const;

export type SiteConfig = typeof siteConfig;


