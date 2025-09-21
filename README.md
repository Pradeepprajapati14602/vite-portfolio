# Portfolio Website - Pradeepkumar Prajapati# React + TypeScript + Vite



A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features dark/light mode, smooth animations, and a professional design showcasing my skills, experience, and projects.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



## 🚀 Live DemoCurrently, two official plugins are available:



The portfolio is built and ready for deployment. Access the local development server at `http://localhost:5173/` after running the setup commands below.- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## ✨ Features

## Expanding the ESLint configuration

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

- **Dark/Light Mode**: Seamless theme switching with smooth transitionsIf you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- **Smooth Animations**: Powered by Framer Motion for engaging user interactions

- **Modern UI**: Clean, professional design with gradient backgrounds and hover effects```js

- **Performance Optimized**: Built with Vite for fast loading and optimal performanceexport default defineConfig([

- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation  globalIgnores(['dist']),

  {

## 🎨 Sections    files: ['**/*.{ts,tsx}'],

    extends: [

### Hero Section      // Other configs...

- Animated gradient background

- Professional introduction with tagline      // Remove tseslint.configs.recommended and replace with this

- Call-to-action buttons (Download Resume, Contact Me)      tseslint.configs.recommendedTypeChecked,

- Smooth scroll navigation      // Alternatively, use this for stricter rules

      tseslint.configs.strictTypeChecked,

### About Section      // Optionally, add this for stylistic rules

- Professional journey overview      tseslint.configs.stylisticTypeChecked,

- Technical expertise highlights

- Mission and vision statement      // Other configs...

- Floating profile image placeholder    ],

    languageOptions: {

### Skills Section      parserOptions: {

- Categorized technical skills (Frontend, Backend, Database, Cloud & DevOps, etc.)        project: ['./tsconfig.node.json', './tsconfig.app.json'],

- Interactive skill cards with hover effects        tsconfigRootDir: import.meta.dirname,

- Additional technologies as floating tags      },

      // other options...

### Experience Section    },

- Timeline layout for work history  },

- Detailed role description at OPS Combinator Pvt. Ltd.])

- Key achievements and technologies used```

- Performance metrics and impact

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

### Projects Section

- Showcase of 5 major projects```js

- Expandable project cards with detailed information// eslint.config.js

- Technology stack for each projectimport reactX from 'eslint-plugin-react-x'

- Links to live demos and source code (placeholders)import reactDom from 'eslint-plugin-react-dom'



### Education & Certificationsexport default defineConfig([

- B.Sc. Computer Science details  globalIgnores(['dist']),

- Professional certifications (AWS, MySQL, ML)  {

- Continuous learning section    files: ['**/*.{ts,tsx}'],

- Key subjects and achievements    extends: [

      // Other configs...

### Contact Section      // Enable lint rules for React

- Contact form with validation      reactX.configs['recommended-typescript'],

- Professional contact information      // Enable lint rules for React DOM

- Direct links to LinkedIn and email      reactDom.configs.recommended,

- Success/error messaging    ],

    languageOptions: {

### Footer      parserOptions: {

- Social media links with animations        project: ['./tsconfig.node.json', './tsconfig.app.json'],

- Quick navigation links        tsconfigRootDir: import.meta.dirname,

- Scroll-to-top functionality      },

- Professional copyright notice      // other options...

    },

## 🛠️ Built With  },

])

- **Framework**: [React 19](https://react.dev/) with TypeScript```

- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 20.19+ or 22.12+ (currently running on 22.9.0 with warnings)
- **npm**: Version 10+ (comes with Node.js)
- **Git**: For version control

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/pradeepkumarp14/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will open at `http://localhost:5173/`

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── ThemeToggle.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   ├── hooks/
│   │   └── useTheme.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 🎨 Customization

### Colors and Themes

The color palette is defined in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    // ... more shades
  },
  purple: {
    50: '#faf5ff',
    500: '#a855f7',
    600: '#9333ea',
    // ... more shades
  },
}
```

### Animations

Custom animations are defined in the Tailwind config:

```javascript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.5s ease-out',
  'float': 'float 3s ease-in-out infinite',
}
```

### Personal Information

Update the following files to customize with your information:

1. **Hero Section**: `src/components/Hero.tsx`
2. **About Section**: `src/components/About.tsx`
3. **Experience**: `src/components/Experience.tsx`
4. **Projects**: `src/components/Projects.tsx`
5. **Contact Info**: `src/components/Contact.tsx` and `src/components/Footer.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

## 🌙 Dark Mode

Dark mode is implemented using:

- Tailwind CSS `dark:` variants
- React Context for state management
- Local storage persistence
- System preference detection

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically deploy on every push

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: prajapatipradeep14602@gmail.com
- **LinkedIn**: [linkedin.com/in/pradeepkumarp14](https://linkedin.com/in/pradeepkumarp14)
- **GitHub**: [github.com/pradeepkumarp14](https://github.com/pradeepkumarp14)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons provided by [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- UI components styled with [Tailwind CSS](https://tailwindcss.com/)

---

Built with ❤️ by Pradeepkumar Prajapati