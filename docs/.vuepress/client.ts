import { defineClientConfig } from "vuepress/client";
import CWDLayout from "./layouts/CWDLayout.vue";

import "./theme/styles/custom.css";

export default defineClientConfig({
  layouts: {
    Layout: CWDLayout,
  },
});
