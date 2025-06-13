// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightBlog from "starlight-blog";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://tkurzydym.dev",
  integrations: [
    starlight({
      title: "TKurzydym",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/tkurzydym",
        },
        {
          icon: "linkedin",
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/tkurzydym/",
        },
      ],
      customCss: ["./src/components/style/style.css"],
      components: {
        Footer: "./src/components/ImpressumFooter.astro",
        SiteTitle: "./src/overrides/SiteTitle.astro",
      },
      plugins: [
        starlightBlog({
          metrics: {
            readingTime: true,
          },
          navigation: "none",
        }),
      ],
      sidebar: [
        {
          label: "About",
          link: "/about",
        },
        {
          label: "Short Stories",
          autogenerate: { directory: "stories" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
      ],
    }),
    react(),
  ],
});
