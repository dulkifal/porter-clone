# Code Standards Checklist

Use this checklist when creating new components or modifying existing code to ensure consistency with project standards.

## Component Creation Checklist

### Type Safety (Required)
- [ ] Component has explicit return type `React.ReactElement`
- [ ] All props have defined interfaces
- [ ] All function parameters are typed
- [ ] No `any` types used
- [ ] All event handlers properly typed

```typescript
// ✅ Good
export default function Button({ label }: { label: string }): React.ReactElement {
  const handleClick = (): void => { /* */ };
  return <button onClick={handleClick}>{label}</button>;
}

// ❌ Bad
export default function Button(props: any) {
  return <button onClick={props.onClick}>{props.label}</button>;
}
```

### Documentation (Required)
- [ ] Component has JSDoc comment with description
- [ ] Complex logic has inline comments
- [ ] Interfaces documented if not self-explanatory

```typescript
// ✅ Good
/**
 * Header - Main navigation header with logo and links
 * Displays company branding and provides navigation to key sections
 */
export default function Header(): React.ReactElement {
  return (/* JSX */);
}

// ❌ Bad
export default function Header() {
  return (/* JSX */);
}
```

### Data Organization (Required)
- [ ] No hardcoded data in component
- [ ] Static data defined in `src/constants/index.ts`
- [ ] Data properly typed with interface in `src/types/index.ts`
- [ ] Constants use UPPER_SNAKE_CASE naming

```typescript
// ✅ Good - in src/constants/index.ts
export const NAVIGATION_ITEMS = [
  { href: '/about', label: 'About' },
];

// ✅ Good - in component
import { NAVIGATION_ITEMS } from '@/constants';

// ❌ Bad - hardcoded in component
const navItems = [{ href: '/about', label: 'About' }];
```

### Naming Conventions (Required)
- [ ] Component files: PascalCase (Component.tsx)
- [ ] CSS Module files: match component name (Component.module.css)
- [ ] CSS class names: camelCase (heroSection, navLink)
- [ ] Component names: PascalCase (Header, Hero, Services)
- [ ] Functions: camelCase (handleClick, renderContent)
- [ ] Constants: UPPER_SNAKE_CASE (DEFAULT_CITY, SERVICES)
- [ ] Interfaces: PascalCase (Service, Feature, NavLink)

### Styling (Required)
- [ ] Using CSS Modules for component styles
- [ ] No inline styles (except dynamic values)
- [ ] No global styles outside globals.css
- [ ] No ID selectors in CSS
- [ ] BEM-like naming for related styles

```typescript
// ✅ Good
import styles from './Hero.module.css';

export default function Hero(): React.ReactElement {
  return <section className={styles.heroSection}>{/* */}</section>;
}

// ❌ Bad
export default function Hero(): React.ReactElement {
  return <section style={{ padding: '2rem' }}>{/* */}</section>;
}
```

### Accessibility (Required)
- [ ] Interactive elements have aria-label
- [ ] Decorative elements have aria-hidden="true"
- [ ] Semantic HTML used (header, nav, section, footer)
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Links and buttons are keyboard accessible

```typescript
// ✅ Good
<button aria-label="Close modal" onClick={onClose}>
  ✕
</button>

<nav aria-label="Main navigation">
  {/* nav items */}
</nav>

<span aria-hidden="true">🎉</span>

// ❌ Bad
<div onClick={onClose} role="button">{/* */}</div>

<div>{/* nav items */}</div>

<span>🎉</span>
```

### Performance (Recommended)
- [ ] Using unique IDs for key props (not array indices)
- [ ] No unnecessary re-renders through proper prop passing
- [ ] Large lists extracted to constants
- [ ] CSS Modules for scoped styling (prevents bloat)

```typescript
// ✅ Good
{items.map((item) => <div key={item.id}>{item.name}</div>)}

// ❌ Bad
{items.map((item, index) => <div key={index}>{item.name}</div>)}
```

### File Organization (Recommended)
- [ ] Component file < 200 lines (consider splitting if larger)
- [ ] Related styles in corresponding .module.css file
- [ ] Clear folder structure (layout, home, common, etc.)
- [ ] No duplicate functionality across components

### Code Quality (Recommended)
- [ ] No console.log statements in production code
- [ ] No TODO comments without tracking issue
- [ ] No commented-out code (use git history)
- [ ] Linting passes without warnings (`npm run lint`)

```typescript
// ✅ Good
const value = getValue();
return <div>{value}</div>;

// ⚠️ Remove before commit
// const oldValue = getOldValue();
// console.log('Debug value');
```

## Modification Checklist

When modifying existing components:

- [ ] All changes pass TypeScript strict mode
- [ ] No new TypeScript errors introduced
- [ ] Changes don't break existing functionality
- [ ] Proper type updates if interface changed
- [ ] Documentation updated if behavior changed
- [ ] Related tests updated (if applicable)
- [ ] Accessibility maintained or improved
- [ ] Performance not negatively impacted

## Component Structure Template

Use this template for new components:

```typescript
import styles from './ComponentName.module.css';
import type { InterfaceName } from '@/types';
import { CONSTANT_NAME } from '@/constants';

interface ComponentProps {
  prop1: string;
  prop2?: number;
  onAction: () => void;
}

/**
 * ComponentName - Brief description of component purpose
 * Additional details about functionality and use cases
 */
export default function ComponentName({
  prop1,
  prop2,
  onAction,
}: ComponentProps): React.ReactElement {
  // Handler functions
  const handleEvent = (): void => {
    // Implementation
  };

  // Render
  return (
    <section className={styles.container}>
      {/* JSX content */}
    </section>
  );
}
```

## Pre-Commit Checklist

Before committing code:

- [ ] All TypeScript errors resolved
- [ ] ESLint passes (`npm run lint`)
- [ ] Component renders without console errors
- [ ] Responsive design verified (mobile, tablet, desktop)
- [ ] Accessibility tested (keyboard navigation, screen reader)
- [ ] CSS not conflicting with other components
- [ ] No hardcoded values
- [ ] Component documented
- [ ] Naming conventions followed

## Code Review Feedback Examples

### When to Request Changes

**Type Safety Issue**
```
Comment: Please add proper typing for this prop. 
Consider defining an interface or using a union type instead of 'any'.
```

**Documentation Missing**
```
Comment: Please add a JSDoc comment explaining what this component does
and any important implementation details.
```

**Hardcoded Data**
```
Comment: This data should be moved to src/constants/index.ts 
and typed in src/types/index.ts for consistency.
```

**Accessibility Issue**
```
Comment: Please add aria-label to this button so screen readers 
can understand its purpose.
```

## Standards Summary Quick Reference

| Aspect | Standard | Example |
|--------|----------|---------|
| **Return Type** | `React.ReactElement` | `export default function Hero(): React.ReactElement` |
| **Component Names** | PascalCase | `Header`, `Services`, `Features` |
| **Function Names** | camelCase | `handleClick`, `renderContent` |
| **Constants** | UPPER_SNAKE_CASE | `DEFAULT_CITY`, `SERVICES` |
| **Interface Names** | PascalCase | `Service`, `NavLink`, `Testimonial` |
| **CSS Classes** | camelCase | `heroSection`, `cardGrid` |
| **Data Location** | `src/constants/index.ts` | Static data centralized |
| **Type Location** | `src/types/index.ts` | Interfaces centralized |
| **Styling** | CSS Modules | `import styles from './X.module.css'` |
| **HTML Semantics** | Semantic tags | `<header>`, `<nav>`, `<section>` |
| **Accessibility** | ARIA attributes | `aria-label`, `aria-hidden` |
| **List Keys** | Unique IDs | `key={item.id}` not `key={index}` |

## Resources

- [CODE_STANDARDS.md](./CODE_STANDARDS.md) - Comprehensive standards guide
- [DEVELOPMENT.md](./DEVELOPMENT.md) - Development setup and patterns
- [Next.js Docs](https://nextjs.org/docs)
- [React Best Practices](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Last Updated**: January 2026
**Maintained By**: Development Team
