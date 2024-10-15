# Nuxt3 i18n Starter Template

## Overview

This project is a starter template for building multilingual websites using Nuxt 3 and the nuxt/i18n module. It provides a solid foundation for creating internationalized web applications with built-in language switching capabilities and route localization.

## Features

- 🌐 Multi-language support (English, German, French, Italian)
- 🔄 Dynamic language switching
- 🛣️ Localized routing
- 🎨 Tailwind CSS integration
- 📱 Responsive design
- 🏗️ Modular structure for easy expansion

## Prerequisites

- Node.js (v14.x or later)
- npm or yarn

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/AmuraDesign/nuxt3-i18n-starter.git
   cd nuxt3-i18n-starter
   ```

2. Install dependencies:

   ```
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
nuxt3-i18n-starter/
├── assets/
│   └── css/
│       └── tailwind.css
├── components/
│   └── LanguageSwitcher.vue
├── layouts/
│   └── default.vue
├── locales/
│   ├── de.json
│   ├── en.json
│   ├── fr.json
│   └── it.json
├── pages/
│   ├── about.vue
│   ├── contact.vue
│   └── index.vue
├── public/
├── app.vue
├── i18n.config.ts
├── nuxt.config.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Customization

- Add new pages in the `pages/` directory
- Add new translations in the `locales/` directory
- Modify the Tailwind configuration in `tailwind.config.ts`
- Update the i18n settings in `nuxt.config.ts` and `i18n.config.ts`

## Building for Production

```
npm run build
# or
yarn build
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
