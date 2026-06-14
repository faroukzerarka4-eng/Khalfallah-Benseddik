import type { MetadataRoute } from "next";
import { site, basePath } from "@/lib/data";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `حملة ${site.candidate} - ولاية تيارت`,
    short_name: site.candidate,
    description: site.slogan,
    start_url: `${basePath}/`,
    display: "standalone",
    background_color: "#f7f9f7",
    theme_color: "#0e6b3b",
    lang: "ar",
    dir: "rtl",
    icons: [
      {
        src: `${basePath}/images/rnd-logo.png`,
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
