# Cypress TypeScript Framework Setup Guide

## Step 1: Create Project Folder

```bash
mkdir Demo_Cypress_Project
cd Demo_Cypress_Project
```

---

## Step 2: Initialize Node Project

```bash
npm init -y
```

---

## Step 3: Install Cypress

```bash
npm install cypress --save-dev
```

---

## Step 4: Open Cypress for Initial Setup

```bash
npx cypress open
```

Select:

```text
E2E Testing
Browser of your choice
```

Cypress will generate the default project structure.

---

## Step 5: Install TypeScript

```bash
npm install typescript @types/node --save-dev
```

---

## Step 6: Create TypeScript Configuration

Create `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "types": ["cypress", "node"],
    "strict": true,
    "resolveJsonModule": true,
    "esModuleInterop": true
  },
  "include": [
    "**/*.ts"
  ]
}
```

---

## Step 7: Install dotenv

```bash
npm install dotenv --save-dev
```

---

## Step 8: Create Environment File

Create:

```text
.env
```

Add:

```env
BASE_URL=https://demowebshop.tricentis.com
EMAIL=your_email
PASSWORD=your_password
```

---

## Step 9: Configure Cypress

Update `cypress.config.ts`

```ts
import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,

  e2e: {
    baseUrl: process.env.BASE_URL,

    specPattern: "cypress/e2e/**/*.spec.ts",

    setupNodeEvents(on, config) {

      config.env.email = process.env.EMAIL;
      config.env.password = process.env.PASSWORD;

      return config;
    }
  }
});
```

---

## Step 10: Create Framework Structure

```text
cypress
│
├── e2e
├── pages
├── locators
├── utils
├── fixtures
└── support
```

---

## Step 11: Create Utility Environment File

Create:

```text
cypress/utils/env.ts
```

```ts
export const env = {

  get email(): string {
    return Cypress.env('email');
  },

  get password(): string {
    return Cypress.env('password');
  }

};
```

---

## Step 12: Add NPM Scripts

Update `package.json`

```json
"scripts": {
  "cy:open": "cypress open",
  "cy:run": "cypress run",
  "cy:chrome": "cypress run --browser chrome",
  "cy:firefox": "cypress run --browser firefox"
}
```

---

## Step 13: Open Cypress Test Runner

```bash
npm run cy:open
```

---

## Step 14: Run All Tests

```bash
npm run cy:run
```

---

## Step 15: Run Tests in Chrome

```bash
npm run cy:chrome
```

---

## Step 16: Run Tests in Firefox

```bash
npm run cy:firefox
```

---

## Step 17: Run Specific Spec File

```bash
npx cypress run --spec "cypress/e2e/login.spec.ts"
```

---

## Step 18: Run Specific Spec in Chrome

```bash
npx cypress run --browser chrome --spec "cypress/e2e/login.spec.ts"
```

---

## Step 19: Verify Installed Cypress Version

```bash
npx cypress -v
```

---

## Step 20: Verify Available Browsers

```bash
npx cypress info
```

---

## Step 21: Configure Git Ignore

Add to `.gitignore`

```text
node_modules/
.env

cypress/screenshots/
cypress/videos/
cypress/downloads/

coverage/

.vscode/
.idea/

.DS_Store
```

---

## Step 22: Install Project Dependencies After Clone

```bash
npm install
```

---

## Step 23: Execute Framework

Headed Mode:

```bash
npm run cy:open
```

Headless Mode:

```bash
npm run cy:chrome
```
