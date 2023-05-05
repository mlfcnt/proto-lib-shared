/// <reference types="vitest" />

import { defineConfig } from "vitest/config";
// import react from '@vitejs/plugin-react';

export default defineConfig({
  // plugins: [react()],
  test: {
    exclude: ["**/build/**", "**/node_modules/**"],
    globals: true,
    environment: "jsdom",
    threads: false, // temporaire en attendant fix lié à canvas.node https://github.com/vitest-dev/vitest/issues/740
    setupFiles: "src/setupTests.js",
  },
});
