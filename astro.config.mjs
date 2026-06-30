// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";   // ← on importe l'intégration

// https://astro.build/config
export default defineConfig({
  integrations: [react()],   // ← on l'active
});