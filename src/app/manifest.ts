import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CreditBuddy Learn",
    short_name: "CreditBuddy",
    description: "Master Credit Scores, Loan Math & Personal Finance",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f4f4",
    theme_color: "#21105b",
    icons: [
      {
        src: "/assets/s_logo.png",
        sizes: "192x192 512x512",
        type: "image/png",
      },
    ],
  };
}
