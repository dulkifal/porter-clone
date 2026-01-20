# Porter Clone - Logistics Platform Landing Page

A modern, production-ready logistics platform landing page built with **Next.js 16**, **React 19**, **TypeScript**, and **CSS Modules**. This project demonstrates professional-grade code standards suitable for enterprise applications and interviews.

## 🎯 Project Overview

Porter Clone is a fully-functional landing page for a logistics marketplace platform, featuring a responsive design with multiple service offerings, customer testimonials, and a modern UI/UX.

### Technology Stack

- **Framework**: [Next.js 16.1.4](https://nextjs.org) - React meta-framework with SSR/SSG
- **UI Library**: [React 19.2.3](https://react.dev) - Modern React with latest features
- **Language**: [TypeScript 5](https://www.typescriptlang.org) - Static type checking
- **Styling**: CSS Modules - Scoped component styling
- **Linting**: ESLint 9 - Code quality enforcement
- **Node.js**: 18+

## 📋 Features

- ✅ **Type-Safe**: Strict TypeScript mode with explicit typing throughout
- ✅ **Accessible**: WCAG compliant with ARIA labels and semantic HTML
- ✅ **Responsive**: Mobile-first design with responsive layouts
- ✅ **Well-Documented**: Comprehensive JSDoc comments and setup guides
- ✅ **Production-Ready**: Enterprise-grade code standards
- ✅ **Scalable**: Centralized data management and modular components
- ✅ **Performance**: Optimized with CSS Modules and Next.js features

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/dulkifal/porter-clone.git
cd porter-clone

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser. The page auto-updates as you edit files.

## 📦 Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint for code quality
npm run lint
```

## 📁 Project Structure

```
porter-clone/
├── src/
│   ├── app/                          # Next.js app router
│   │   ├── layout.tsx               # Root layout with metadata
│   │   ├── page.tsx                 # Home page composition
│   │   └── globals.css              # Global styles
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx           # Navigation header
│   │   │   ├── Header.module.css
│   │   │   ├── Footer.tsx           # Site footer
│   │   │   └── Footer.module.css
│   │   └── home/
│   │       ├── Hero.tsx             # Hero section
│   │       ├── Services.tsx         # Services display
│   │       ├── Features.tsx         # Key features
│   │       ├── Testimonials.tsx     # Customer testimonials
│   │       └── [component].module.css
│   ├── constants/
│   │   └── index.ts                 # Centralized static data
│   ├── types/
│   │   └── index.ts                 # Shared TypeScript interfaces
│   └── public/                      # Static assets
├── CODE_STANDARDS.md                # Detailed code standards guide
├── DEVELOPMENT.md                   # Development workflow and patterns
├── CODE_CHECKLIST.md                # Pre-commit and review checklist
├── STANDARDS_UPDATE.md              # Summary of improvements
├── package.json
├── tsconfig.json
└── next.config.ts
```

## 🎨 Code Quality Standards

This project follows professional-grade code standards:

### Type Safety
- ✅ All components explicitly typed with `React.ReactElement`
- ✅ Strict TypeScript mode enabled
- ✅ Centralized interfaces in `src/types/index.ts`

### Component Architecture
- ✅ Functional components with modern React patterns
- ✅ JSDoc documentation on all components
- ✅ Semantic HTML elements (`<header>`, `<nav>`, `<section>`)

### Data Management
- ✅ Centralized constants in `src/constants/index.ts`
- ✅ No hardcoded values in components
- ✅ Type-safe data structures

### Accessibility
- ✅ ARIA labels on interactive elements
- ✅ Semantic HTML structure
- ✅ Keyboard navigation support

### Performance
- ✅ CSS Modules for scoped styling
- ✅ Proper key usage in lists (using IDs, not indices)
- ✅ Dynamic imports for code splitting

## 📚 Documentation

### Quick Reference
- **[CODE_STANDARDS.md](./CODE_STANDARDS.md)** - Complete code standards guide (5000+ words)
- **[DEVELOPMENT.md](./DEVELOPMENT.md)** - Development workflow, patterns, and best practices
- **[CODE_CHECKLIST.md](./CODE_CHECKLIST.md)** - Pre-commit and code review checklist
- **[STANDARDS_UPDATE.md](./STANDARDS_UPDATE.md)** - Summary of all improvements

### Key Highlights
- Full type safety with TypeScript
- Centralized data management
- Professional component structure
- Accessibility compliance
- Performance optimization
- Comprehensive documentation

## 🏗️ Component Overview

### Header Component
Navigation header with logo and main menu links. Uses centralized `NAV_LINKS` constant for easy menu updates.

```typescript
<Header />  // Displays navigation with accessibility features
```

### Hero Section
Prominent hero section with call-to-action and service selection widget.

```typescript
<Hero />  // Service selection and estimate button
```

### Services Component
Grid display of available logistics services with descriptions.

```typescript
<Services />  // Service cards (2-Wheeler, Trucks, Packers & Movers, Enterprise)
```

### Features Component
Key benefits and differentiators with icons.

```typescript
<Features />  // On-Time Delivery, Real-time Tracking, Economical Pricing
```

### Testimonials Component
Customer feedback and success stories.

```typescript
<Testimonials />  // Customer testimonials with ratings
```

### Footer Component
Comprehensive footer with links, legal info, and social media.

```typescript
<Footer />  // Navigation, legal links, social media, copyright
```

## 💡 Interview Talking Points

When discussing this project in interviews:

1. **Type Safety**: "I leverage TypeScript with strict mode to catch errors at compile time, ensuring type safety throughout the application."

2. **Component Architecture**: "Components are well-organized with clear separation of concerns, making the codebase maintainable and scalable."

3. **Data Management**: "Static data is centralized in a constants file, making it easy to maintain, update, and scale the application."

4. **Accessibility**: "I include ARIA labels and semantic HTML throughout for full accessibility support, ensuring users of all abilities can navigate the site."

5. **Code Quality**: "All components are documented with JSDoc comments and follow consistent naming conventions (PascalCase for components, camelCase for functions, UPPER_SNAKE_CASE for constants)."

6. **Performance**: "I use proper key usage in lists, CSS Modules for scoped styling, and Next.js features for optimal performance."

7. **Best Practices**: "The project follows React and Next.js official documentation and best practices, making it production-ready."

## 🔧 Development Guidelines

### Adding New Components

1. **Create Component File** with TypeScript typing and documentation
2. **Create CSS Module** with scoped styles
3. **Update Types** if needed in `src/types/index.ts`
4. **Update Constants** if adding data in `src/constants/index.ts`
5. **Import and Use** in parent component

### Naming Conventions

| Item | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `Header`, `Services` |
| Functions | camelCase | `handleClick`, `renderContent` |
| Constants | UPPER_SNAKE_CASE | `DEFAULT_CITY`, `SERVICES` |
| Interfaces | PascalCase | `Service`, `NavLink` |
| CSS Classes | camelCase | `heroSection`, `navLink` |

### Pre-Commit Checklist

Before committing:
- [ ] Code passes ESLint (`npm run lint`)
- [ ] TypeScript has no errors
- [ ] Components render without console errors
- [ ] New components have JSDoc comments
- [ ] Data is centralized in constants when applicable

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Web Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)
- [CSS Modules Documentation](https://github.com/css-modules/css-modules)

## 📈 Performance Metrics

- ✅ Strict TypeScript mode
- ✅ Production build optimization
- ✅ CSS Modules for zero runtime styles
- ✅ Next.js automatic code splitting
- ✅ SEO optimized with metadata

## 🤝 Contributing

1. Review [CODE_STANDARDS.md](./CODE_STANDARDS.md) for coding standards
2. Follow the [CODE_CHECKLIST.md](./CODE_CHECKLIST.md) before submitting changes
3. Ensure all components have JSDoc comments
4. Keep data centralized in `src/constants/index.ts`
5. Maintain TypeScript type safety

## 📝 License

This project is open source and available under the MIT License.

## 🙋 Support

For questions or issues:
1. Check the [DEVELOPMENT.md](./DEVELOPMENT.md) guide
2. Review the [CODE_STANDARDS.md](./CODE_STANDARDS.md) documentation
3. Check component examples in existing components

---

**Project Status**: Production Ready ✅  
**Last Updated**: January 20, 2026  
**Built with**: Next.js 16 • React 19 • TypeScript 5

