# reactjs-starter

## Overview

reactjs-starter is a ReactJS application bootstrapped with Vite and styled using Tailwind CSS. It serves as a foundation for building scalable and maintainable web applications with a comprehensive design system.

This application now features an in-depth article titled "How a Game Business Empire Was Built", providing insights into the steps taken to build a successful game business.

## User Journeys

1. [Welcome Screen](docs/user-journeys.md#welcome-screen) - Navigate through the initial welcome interface.
2. [Get Started](docs/user-journeys.md#get-started) - Begin using the app with a guided setup.
3. [Reading the Article](docs/journeys/reading-article.md) - Explore the detailed article on building a game business empire.

## Design System

Refer to the [Design System](docs/design-system.md) for details on color palette, typography, spacing, and responsive design.

## External APIs

- **Progressier:** Adds PWA functionality, enabling offline capabilities and a seamless user experience.
- **Umami Analytics:** Tracks website statistics for performance monitoring.

## Environment Variables

Ensure the following environment variables are set in the `.env` file:

- `COCKROACH_DB_URL`
- `NPM_TOKEN`
- `VITE_PUBLIC_APP_ID`
- `VITE_PUBLIC_APP_ENV`
- `VITE_PUBLIC_SENTRY_DSN`
- `VITE_PUBLIC_UMAMI_WEBSITE_ID`

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the development server with `npm run dev`.
4. Build for production using `npm run build`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.