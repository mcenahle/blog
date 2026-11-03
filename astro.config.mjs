// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.mcenahle.dev",
  trailingSlash: "always",
  prefetch: true,
  devToolbar: {
    enabled: false,
  },
  server: {
    port: 4500,
  },
  integrations: [icon(), sitemap()],
});
