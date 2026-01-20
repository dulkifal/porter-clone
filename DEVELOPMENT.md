# Development Guide

## Overview
This guide provides instructions for developers working on the Porter Clone project, maintaining consistency with established code standards.

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Basic understanding of React and Next.js

### Setup
```bash
# Clone repository
git clone <repository-url>
cd porter-clone

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

## File Structure

### Component Location Guide
- **Layout Components**: `src/components/layout/` (Header, Footer, Navigation)
- **Page Sections**: `src/components/home/` (Hero, Services, Features, Testimonials)
- **Page Composition**: `src/app/page.tsx`

### Adding New Components

1. **Create Component File**
```typescript
// src/components/section/YourComponent.tsx
import styles from './YourComponent.module.css';

/**
 * YourComponent - Brief description of what this component does
 */
export default function YourComponent(): React.ReactElement {
  return (
    <div className={styles.container}>
      {/* Your content here */}
    </div>
  );
}
```

2. **Create CSS Module**
```css
/* src/components/section/YourComponent.module.css */
.container {
  /* Your styles here */
}
```

3. **Import and Use**
```typescript
import YourComponent from '@/components/section/YourComponent';

export default function Home(): React.ReactElement {
  return <YourComponent />;
}
```

## Typing Guidelines

### Component Props
Always define interfaces for component props:
```typescript
interface ComponentProps {
  title: string;
  onAction: () => void;
  isActive?: boolean;
}

export default function Component({ title, onAction, isActive }: ComponentProps): React.ReactElement {
  // Implementation
}
```

### Event Handlers
Always type event handlers properly:
```typescript
const handleClick = (): void => {
  // Implementation
};

const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
  // Implementation
};
```

## Working with Constants

### Adding New Constants

1. **Define Type** in `src/types/index.ts`
```typescript
export interface NewType {
  id: string;
  // other properties
}
```

2. **Add Constant** to `src/constants/index.ts`
```typescript
export const NEW_CONSTANT: NewType[] = [
  // data
];
```

3. **Use in Components**
```typescript
import { NEW_CONSTANT } from '@/constants';
import type { NewType } from '@/types';

export default function Component(): React.ReactElement {
  return (
    <>
      {NEW_CONSTANT.map((item) => (
        <div key={item.id}>{/* render */}</div>
      ))}
    </>
  );
}
```

## Styling Guidelines

### CSS Modules
- Use CSS Modules for component-scoped styles
- Name classes descriptively
- Use camelCase for class names
- Group related styles together

```css
/* Good: Descriptive, organized */
.section {
  padding: 2rem;
}

.cardGrid {
  display: grid;
  gap: 1rem;
}

.card {
  padding: 1rem;
}

.cardTitle {
  font-size: 1.25rem;
  font-weight: bold;
}
```

### Avoid
- Global styles (use CSS Modules)
- Inline styles (except dynamic values)
- ID selectors for styling
- Using `!important` (almost never needed)

## Accessibility Guidelines

### Always Include
- `aria-label` on buttons and interactive elements
- `aria-hidden="true"` on decorative elements
- Semantic HTML (`<header>`, `<nav>`, `<section>`, `<footer>`)
- Proper heading hierarchy
- Alt text for images

### Example
```typescript
<button 
  aria-label="Close modal" 
  onClick={onClose}
>
  ✕
</button>

<nav aria-label="Main navigation">
  {/* navigation items */}
</nav>

<div aria-hidden="true">
  🎉 {/* decorative element */}
</div>
```

## Performance Tips

1. **Key Props**: Always use stable, unique keys (IDs, not indices)
```typescript
// ✅ Good
{items.map((item) => <div key={item.id}>{item.name}</div>)}

// ❌ Bad
{items.map((item, index) => <div key={index}>{item.name}</div>)}
```

2. **List Rendering**: Extract repeated lists to constants for reusability
```typescript
// ✅ Good
const DATA = [/* ... */];

export function Component(): React.ReactElement {
  return <>{DATA.map((/* ... */)}</>;
}
```

3. **Avoid Inline Objects**: Define objects outside render
```typescript
// ❌ Bad - creates new object every render
<Component style={{ color: 'red' }} />

// ✅ Good
const containerStyle = { color: 'red' };
<Component style={containerStyle} />
```

## Testing Checklist

Before committing code:
- [ ] Component renders without errors
- [ ] TypeScript shows no errors (`npm run lint`)
- [ ] Props are properly typed
- [ ] Accessibility attributes present
- [ ] Component is responsive (test mobile/desktop)
- [ ] CSS doesn't conflict with other components
- [ ] Component follows naming conventions
- [ ] Component includes JSDoc comment

## Code Review Checklist

When reviewing PRs, verify:
- [ ] TypeScript strict mode compliance
- [ ] Proper component documentation
- [ ] Consistent naming conventions
- [ ] Data centralized in constants when applicable
- [ ] Proper type definitions for all props/data
- [ ] Accessibility considerations
- [ ] CSS Module usage (no global styles)
- [ ] No hardcoded values
- [ ] Proper key usage in lists

## Common Patterns

### Data Display Pattern
```typescript
interface Item {
  id: string;
  title: string;
}

const ITEMS: Item[] = [/* data */];

export default function ItemList(): React.ReactElement {
  return (
    <section>
      <h2>Items</h2>
      <div>
        {ITEMS.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
```

### Button Pattern
```typescript
const handleAction = (): void => {
  console.log('Action performed');
};

<button 
  onClick={handleAction}
  aria-label="Descriptive action label"
>
  Click Me
</button>
```

### Navigation Pattern
```typescript
interface NavItem {
  href: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [/* data */];

<nav aria-label="Navigation name">
  {NAV_ITEMS.map((item) => (
    <Link key={item.href} href={item.href}>
      {item.label}
    </Link>
  ))}
</nav>
```

## Debugging

### TypeScript Errors
```bash
# Check for TypeScript errors
npm run lint

# Watch mode
npx tsc --watch
```

### Common Issues

**Issue**: Styles not applying
- **Solution**: Check CSS Module import and class name spelling

**Issue**: Component not rendering
- **Solution**: Verify return type is `React.ReactElement` and JSX is valid

**Issue**: Props type error
- **Solution**: Ensure interface is properly defined and all required props are passed

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Best Practices](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/)
- [CSS Modules](https://github.com/css-modules/css-modules)

## Questions or Issues?

Refer to CODE_STANDARDS.md for detailed standards documentation.
