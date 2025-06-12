# Zeynep Salmaz Portfolio 🚀

Modern, responsive, and multilingual portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

- 🌐 **Multilingual Support** - English and Turkish
- 📱 **Fully Responsive** - Mobile-first design
- ⚡ **Performance Optimized** - Next.js 14 with App Router
- 🎨 **Modern UI/UX** - Tailwind CSS with custom animations
- 🔧 **TypeScript** - Full type safety
- 🏗️ **Monorepo Structure** - Organized workspace
- 🎭 **Framer Motion** - Smooth animations
- 🌙 **SEO Optimized** - Meta tags and structured data

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Internationalization:** next-intl
- **Icons:** Lucide React
- **Package Manager:** npm workspaces

## 📁 Project Structure

```
zeynep-portfolio/
├── apps/
│   ├── site/                 # Main portfolio website
│   │   ├── app/
│   │   │   └── [locale]/     # Internationalized routes
│   │   ├── components/       # React components
│   │   ├── messages/         # Translation files
│   │   └── styles/           # Global styles
│   └── admin/                # Future admin panel
├── libs/
│   ├── ui-components/        # Shared UI components
│   ├── shared-types/         # Shared TypeScript types
│   └── utils/                # Shared utilities
└── tools/                    # Development tools
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm 8+

### Installation

1. Clone the repository:
```bash
git clone https://github.com/zeynepsalmaz/zeynep-portfolio.git
cd zeynep-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## 🌐 Internationalization

The website supports English and Turkish languages:

- **English (Default):** `/en`
- **Turkish:** `/tr`

Translation files are located in `apps/site/messages/`.

## 🎨 Customization

### Colors

Update the color scheme in `apps/site/tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your custom color palette
  }
}
```

### Content

- Update translations in `apps/site/messages/`
- Modify components in `apps/site/components/`
- Add new pages in `apps/site/app/[locale]/`

## 📱 Responsive Design

The portfolio is built with mobile-first approach:

- **Mobile:** 320px - 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** 1024px+

## 🔧 Development

### Adding New Languages

1. Create translation file: `apps/site/messages/{locale}.json`
2. Update `locales` array in layout files
3. Add language option to `LanguageSwitcher` component

### Adding New Sections

1. Create component in `apps/site/components/`
2. Add translations to message files
3. Import and use in main page

## 📈 Performance

- Lighthouse Score: 95+
- Core Web Vitals optimized
- Image optimization with Next.js
- Lazy loading implemented

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Manual Deployment

```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Zeynep Salmaz**

- Website: [zeynepsalmaz.dev](https://zeynepsalmaz.dev)
- GitHub: [@zeynepsalmaz](https://github.com/zeynepsalmaz)
- LinkedIn: [zeynepsalmaz](https://linkedin.com/in/zeynepsalmaz)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Icon library

---

⭐ Star this repository if you found it helpful!
