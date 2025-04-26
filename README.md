# TypeScript Frontend Boilerplate (React + Vite)

A modern, lightweight frontend boilerplate built with **React**, **TypeScript**, **React Router**, **Redux Toolkit**, and **Tailwind CSS**, using **Vite** as the build tool. This project provides a clean starting point for scalable web applications, with a focus on developer experience and production-ready practices inspired by apps like [Cal.com](https://cal.com) and [Dub.sh](https://dub.sh).

---

## 🚀 Features

- **TypeScript**: Type-safe development with strict typing for components and state.
- **React Router**: Declarative client-side routing with sample routes (`/` and `404`).
- **Redux Toolkit**: Modern state management with slices and TypeScript support.
- **Tailwind CSS**: Utility-first styling with custom design tokens and production optimization.
- **Vite**: Fast development server and optimized production builds.
- **Prettier**: Consistent code formatting for clean, readable code.
- **Structured Architecture**: Organized folder structure for components, pages, and assets.

---

## 📦 Prerequisites

Make sure you have the following installed:

- **Node.js**: Version 18.x or higher (LTS recommended)
- **npm**: Version 9.x or higher (or yarn/pnpm)
- **Git**: To clone the repository

---

## 🛠 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/sinhaniik/fe-ts-boilerplate.git
cd ts-fe-boilerplate
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
- Opens the app at [http://localhost:5173](http://localhost:5173).
- Vite’s hot module replacement (HMR) ensures fast reloads.

### 4. Explore the App
- Visit `/` to see the home page with a Redux-powered counter.
- Visit an invalid route (e.g., `/random`) to see the 404 page.
- Use “Increment” and “Decrement” buttons to test Redux state.

### 5. Format Code (Optional)
```bash
npm run format
```

---

## 🧱 Project Structure
```
ts-fe-boilerplate/
├── public/                    # Static assets served at root (e.g., favicon.ico)
│   ├── index.html            # Main HTML template
│   └── favicon.ico           # Browser favicon
├── src/                      # Source code
│   ├── assets/               # Images, fonts, etc.
│   │   └── images/           # Example: logo.png
│   ├── components/           # Reusable UI components
│   │   ├── Button.tsx
│   │   └── Home.tsx
│   ├── pages/                # Page components for routing
│   │   ├── HomePage.tsx
│   │   └── NotFoundPage.tsx
│   ├── store/                # Redux store and slices
│   │   ├── slices/
│   │   │   └── counterSlice.ts
│   │   └── index.ts
│   ├── App.tsx               # Main app with routing
│   ├── index.tsx             # Entry point
│   ├── styles.css            # Global styles with Tailwind CSS
│   └── react-app-env.d.ts    # Type declarations
├── .gitignore
├── package.json
├── prettier.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

---

## 🔧 Available Scripts

```bash
npm run dev        # Start Vite development server
npm run build      # Build the app for production
npm run preview    # Serve the production build locally
npm run format     # Format files with Prettier
```

---

## 🚢 Building for Production

To create an optimized build:
```bash
npm run build
```
- Outputs to `dist/`
- Tailwind CSS uses PurgeCSS to remove unused styles

### Test the Build:
```bash
npm run preview
```

---

## 🧩 Troubleshooting

### Redux Error:
**Uncaught Error: could not find react-redux context value**

Ensure your `src/index.tsx` wraps `<App />` with `<Provider>`:
```tsx
import { Provider } from 'react-redux';
import store from './store';
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

### Tailwind Not Working:
- Check `src/styles.css` includes:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
- Ensure `styles.css` is imported in `index.tsx`.

### Port Conflict:
- Set a custom port in `vite.config.ts`:
```ts
server: {
  port: 3000
}
```

### Build Issues:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push and open a Pull Request

---

## 📄 License
MIT License

---

## 🙏 Acknowledgments
- Inspired by production apps like [Cal.com](https://cal.com) and [Dub.sh](https://dub.sh)
- Built with Vite, React, and Tailwind CSS

---

Happy hacking! 💻

