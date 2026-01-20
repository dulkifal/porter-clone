# Porter Clone - Code Standards Documentation

## Project Overview
A modern logistics platform landing page built with Next.js 16, React 19, and TypeScript. This project demonstrates professional coding standards suitable for production-grade applications.

## Technology Stack
- **Framework**: Next.js 16.1.4
- **UI Library**: React 19.2.3
- **Language**: TypeScript 5
- **Styling**: CSS Modules
- **Linting**: ESLint 9

## Code Quality Standards

### 1. Type Safety
- ✅ **Strict TypeScript Enabled**: All components are fully typed
- ✅ **Interface Definitions**: Clear interface definitions for all data structures
- ✅ **Centralized Types**: Shared types in `src/types/index.ts`
- ✅ **React Element Return Types**: All components explicitly return `React.ReactElement`

```typescript
// Example: Properly typed component
export default function Header(): React.ReactElement {
  return (/* JSX */);
}
```

### 2. Data Organization
- ✅ **Centralized Constants**: All static data in `src/constants/index.ts`
- ✅ **No Hardcoded Values**: Dynamic data centralized for easy maintenance
- ✅ **Type-Safe Constants**: All constants properly typed and exported

```typescript
// Example: Using typed constants
import { SERVICES } from '@/constants';

export default function Services(): React.ReactElement {
  return (
    <div>
      {SERVICES.map((service) => (
        <div key={service.id}>{/* content */}</div>
      ))}
    </div>
  );
}
```

### 3. Component Best Practices
- ✅ **Functional Components**: Modern React with hooks and functional components only
- ✅ **JSDoc Documentation**: Every component has a clear purpose comment
- ✅ **Semantic HTML**: Proper use of semantic HTML elements
- ✅ **Accessibility**: ARIA labels and roles for screen reader support
- ✅ **Event Handlers**: Properly typed event handlers with arrow functions

```typescript
/**
 * Hero - Hero section component with main value proposition
 * Allows users to select a service type and get quick estimates
 */
export default function Hero(): React.ReactElement {
  const handleGetEstimate = (): void => {
    // Implementation
  };

  return (/* JSX */);
}
```

### 4. Code Organization
```
src/
├── app/                 # Next.js app router
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page composition
│   └── globals.css     # Global styles
├── components/
│   ├── layout/         # Layout components (Header, Footer)
│   └── home/           # Home page sections
├── constants/
│   └── index.ts        # Centralized constants and data
├── types/
│   └── index.ts        # Shared TypeScript interfaces
└── public/             # Static assets
```

### 5. Naming Conventions
- **Components**: PascalCase (e.g., `Header`, `Hero`, `Services`)
- **Functions**: camelCase (e.g., `handleGetEstimate`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `DEFAULT_CITY`, `SERVICES`)
- **Interfaces**: PascalCase with descriptive names (e.g., `Service`, `Testimonial`)
- **CSS Modules**: camelCase (e.g., `heroSection`, `navLink`)

### 6. Immutability
- ✅ **Const Assertions**: All static data defined as const
- ✅ **No Mutation**: No modifications to imported data
- ✅ **Read-only Props**: Type-safe prop passing

### 7. Performance Optimization
- ✅ **Key Props**: Proper key usage in lists (using unique IDs, not indices)
- ✅ **Image Optimization**: Leveraging Next.js Image component (when needed)
- ✅ **Dynamic Imports**: Code splitting for optimal loading
- ✅ **CSS Modules**: Scoped styles to prevent conflicts

### 8. Accessibility (a11y)
- ✅ **ARIA Labels**: Clear aria-labels for interactive elements
- ✅ **ARIA Hidden**: Decorative elements marked with aria-hidden
- ✅ **Semantic Structure**: Proper heading hierarchy (h1 → h2 → h3)
- ✅ **Navigation Landmarks**: Proper nav elements with aria-label
- ✅ **Link Descriptions**: Meaningful link text and aria-labels

```typescript
<button aria-label="Track your order">
  Track Order
</button>

<nav aria-label="Main navigation">
  {/* Navigation items */}
</nav>
```

### 9. Error Handling
- ✅ **Type Safety**: Prevents most runtime errors via TypeScript
- ✅ **Null Checks**: Proper handling of optional values
- ✅ **Try-Catch Ready**: Structure supports error boundaries (when implemented)

### 10. Documentation
- ✅ **JSDoc Comments**: All components documented
- ✅ **Interface Documentation**: Clear purpose of each type
- ✅ **Inline Comments**: Complex logic explained
- ✅ **README**: Comprehensive project documentation

## Code Examples

### Adding a New Service Component

1. **Define Type** (`src/types/index.ts`):
```typescript
export interface MyFeature {
  id: string;
  title: string;
  description: string;
}
```

2. **Add Constants** (`src/constants/index.ts`):
```typescript
export const MY_FEATURES: MyFeature[] = [
  {
    id: 'feature-1',
    title: 'Feature Title',
    description: 'Feature description',
  },
];
```

3. **Create Component** (`src/components/home/MyComponent.tsx`):
```typescript
import styles from './MyComponent.module.css';
import type { MyFeature } from '@/types';
import { MY_FEATURES } from '@/constants';

/**
 * MyComponent - Description of what this component does
 */
export default function MyComponent(): React.ReactElement {
  return (
    <section className={styles.section}>
      {MY_FEATURES.map((feature) => (
        <div key={feature.id} className={styles.item}>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
}
```

## ESLint Configuration
The project uses ESLint with Next.js recommended rules:
- Core Web Vitals rules enabled
- TypeScript support enabled
- Next.js specific rules applied

To lint: `npm run lint`

## TypeScript Configuration
- Strict mode enabled for maximum type safety
- Module resolution optimized for Next.js
- Path aliases configured (`@/*` → `./src/*`)
- Generated type definitions support

## Best Practices Summary

| Practice | Status | Example |
|----------|--------|---------|
| Type Safety | ✅ Full | All components typed with `React.ReactElement` |
| Component Documentation | ✅ Full | JSDoc comments on all components |
| Data Centralization | ✅ Full | `src/constants/index.ts` for all static data |
| Semantic HTML | ✅ Full | Proper use of `<header>`, `<nav>`, `<section>` |
| Accessibility | ✅ Full | ARIA labels and roles throughout |
| Performance | ✅ Full | Proper key usage, CSS Modules, optimized imports |
| Code Organization | ✅ Full | Clear folder structure and naming conventions |
| Naming Conventions | ✅ Full | PascalCase, camelCase, UPPER_SNAKE_CASE as appropriate |

## Interview Talking Points

1. **Type Safety**: Demonstrates use of TypeScript with strict mode for catching errors at compile time
2. **Component Architecture**: Well-organized component structure with clear separation of concerns
3. **Data Management**: Centralized constants for easy maintenance and scalability
4. **Accessibility**: ARIA labels and semantic HTML show attention to user experience
5. **Code Quality**: Proper naming, documentation, and code organization
6. **Performance**: Key usage in lists, CSS Modules for scoped styling
7. **Scalability**: Structure allows easy addition of new features and components
8. **Best Practices**: Follows React and Next.js best practices and conventions

## Running the Project

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Future Improvements
- Add proper error boundaries for error handling
- Implement proper image components with optimization
- Add environment variables for configuration
- Add unit and integration tests
- Add Storybook for component documentation
- Implement proper state management if needed
- Add form validation for user inputs
