# React + Vite + TypeScript + Tailwind CSS v4

This is a modern React application built with:

- ⚡ **Vite** - Lightning fast build tool and dev server
- 🔷 **TypeScript** - Type safety and better developer experience
- 🎨 **Tailwind CSS v4** - Utility-first CSS framework (latest version)
- ⚛️ **React 18** - Latest React features with hooks

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.13.1 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser and visit:** `http://localhost:5173`

## 📁 Project Structure

```
portfolio-website/
├── public/
├── src/
│   ├── App.tsx          # Main App component with Tailwind CSS
│   ├── main.tsx         # Entry point
│   ├── index.css        # Tailwind CSS v4 with custom colors
│   └── vite-env.d.ts    # Vite type definitions
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── tsconfig.app.json    # App-specific TypeScript config
├── tsconfig.node.json   # Node-specific TypeScript config
├── vite.config.ts       # Vite configuration with Tailwind plugin
└── README.md
```

## 🔧 Configuration Details

### Vite Configuration

The `vite.config.ts` includes the Tailwind CSS v4 plugin:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

### Tailwind CSS v4 Setup

Unlike previous versions, Tailwind CSS v4 uses a simple import statement and theme configuration in `src/index.css`:

```css
@import 'tailwindcss';

@theme {
  /* Custom Brand Colors */
  --color-brand-50: oklch(0.97 0.02 240);
  --color-brand-500: oklch(0.59 0.25 240);
  --color-brand-900: oklch(0.19 0.1 240);

  /* Custom Accent Colors */
  --color-accent-primary: #ff6b6b;
  --color-accent-secondary: #4ecdc4;
  --color-accent-success: #51cf66;
}
```

No configuration files needed! Tailwind v4 automatically detects your template files.

## 🎨 Custom Colors in Tailwind CSS v4

Based on the [official documentation](https://tailwindcss.com/docs/colors) and recent [developer insights](https://medium.com/@dvasquez.422/custom-colours-in-tailwind-css-v4-acc3322cd2da), adding custom colors in Tailwind v4 has changed significantly:

### **Key Changes:**

- **No more `tailwind.config.js`** - Configuration now happens in CSS
- **`@theme` directive** - Define colors directly in your CSS file
- **OKLCH color space** - Better color consistency and perceptual uniformity
- **Simple import** - Just `@import "tailwindcss";`

### **Color Usage Examples:**

The app demonstrates various Tailwind CSS features with custom colors:

- **Brand Colors:** `bg-brand-500`, `text-brand-100`, `hover:bg-brand-700`
- **Accent Colors:** `bg-accent-primary`, `text-accent-warning`
- **Custom Neutrals:** `bg-neutral-dark`, `text-neutral-light`
- **Responsive Design:** `grid-cols-1 md:grid-cols-3`
- **Effects:** `hover:scale-110`, `transition-transform`
- **Gradients:** `bg-gradient-to-r from-brand-400 to-accent-secondary`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🏗️ Building for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized files ready for deployment.

## 🌟 Features

✅ **TypeScript** - Full type safety  
✅ **Hot Module Replacement** - Instant updates during development  
✅ **Tailwind CSS v4** - Latest utility-first CSS framework with custom colors  
✅ **Fast Builds** - Vite's lightning-fast build system  
✅ **Modern React** - React 19 with hooks  
✅ **ESLint** - Code linting and formatting  
✅ **Custom Color Palette** - OKLCH and hex color support

## 🔄 What's Different in Tailwind CSS v4

1. **Simplified Installation:** Just install `tailwindcss` and `@tailwindcss/vite`
2. **No Config File Needed:** Automatic template detection
3. **CSS-based Configuration:** Use `@theme` directive in CSS files
4. **OKLCH Color Space:** Better color consistency
5. **Vite Plugin:** Direct integration with Vite

## 🚀 Deployment

This app can be deployed to any static hosting service:

- **Vercel:** `vercel --prod`
- **Netlify:** Drag and drop the `dist/` folder
- **GitHub Pages:** Use GitHub Actions
- **Any static hosting:** Upload the `dist/` folder

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📚 Learn More

- [Vite Documentation](https://vite.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Custom Colors in Tailwind v4](https://medium.com/@dvasquez.422/custom-colours-in-tailwind-css-v4-acc3322cd2da)

---

Happy coding! 🎉
