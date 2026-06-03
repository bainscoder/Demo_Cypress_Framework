// import { defineConfig } from "cypress";
// import dotenv from "dotenv";

// dotenv.config();

// export default defineConfig({
//   viewportWidth: 1366,
//   viewportHeight: 768,
//   screenshotOnRunFailure: true,

//   reporter: "mochawesome",
//   reporterOptions: {
//     reportDir: "cypress/reports",
//     overwrite: false,
//     html: false,
//     json: true
//   },

//   e2e: {
//     baseUrl: process.env.BASE_URL,
//     specPattern: "cypress/e2e/**/*.spec.ts",
//     setupNodeEvents(on, config) {
//       config.env.email = process.env.EMAIL;
//       config.env.password = process.env.PASSWORD;
//       return config;
//     }
//   }
// });


import { defineConfig } from "cypress";
import dotenv from "dotenv";
import allureWriter from "@shelex/cypress-allure-plugin/writer";

dotenv.config();

export default defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,

  e2e: {
    baseUrl: process.env.BASE_URL,

    specPattern: "cypress/e2e/**/*.spec.ts",

    setupNodeEvents(on, config) {

      allureWriter(on, config);

      config.env.email = process.env.EMAIL;
      config.env.password = process.env.PASSWORD;

      return config;
    }
  },

  env: {
    allure: true,
    allureReuseAfterSpec: true
  }
});