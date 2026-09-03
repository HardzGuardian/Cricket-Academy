import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: "Cricket coaching in Mumbai — book a free trial.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f2ec",
    theme_color: "#14261d",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
