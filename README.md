# Edenred Test Project

This project is a React application built with TypeScript and Vite. It follows a hexagonal
structure for scalability and maintainability.

## Features

- ⚡️ Fast development with Vite
- ⚛️ React with TypeScript
- 📁 Hexagonal folder structure (application, domain, infrastructure, ui)
- 🌍 i18n support
- 🛠 ESLint and Prettier for code quality
- ✅ End-to-end testing with Playwright

## Getting Started

> **Note:** Before running the app, copy `.env.example` to `.env` and update the variables
> as needed.

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Build for production:**

   ```bash
   npm run build
   ```

4. **Preview the production build:**
   ```bash
   npm run preview
   ```

## Project Structure

- `src/` - Main source code
  - `Home/` - Main feature module
    - `application/` - Application logic
    - `domain/` - Domain models and logic
    - `infrastructure/` - Data and API handling
    - `ui/` - UI components and pages
  - `Shared/` - Shared components, hooks, and context
  - `i18n/` - Localization files
  - `assets/` - Static assets
  - `lib/` - Utility libraries
  - `router/` - App routing
  - `components/` - UI shared components

## Environment Variables

Copy `.env.example` to `.env` and update as needed.

## Linting & Formatting

- Lint: `npm run lint`
- Format: `npm run format`

## Testing

This project uses [Playwright](https://playwright.dev/) for end-to-end testing.

- Tests are located in the `tests/` directory.

### Running Tests

You also need to install the Playwright browsers:

```bash
npx playwright install
```

To run the tests, use:

```bash
npm test
```

This will launch Playwright and execute all defined tests.

## License

MIT
