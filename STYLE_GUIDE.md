# Job Portal - Style Guide

## Overview
This document outlines the design system and visual language for the Job Portal prototype. Use this guide to maintain consistency across all screens and ensure a cohesive user experience.

---

## Color Palette

### Primary Theme (Modern Blue)

**Primary Colors:**
- Primary Blue: `#3B82F6` (rgb(59, 130, 246))
- Primary Blue Dark: `#2563EB` (rgb(37, 99, 235))
- Primary Blue Light: `#DBEAFE` (rgb(219, 234, 254))

**Accent Colors:**
- Success Green: `#10B981` (rgb(16, 185, 129))
- Success Light: `#D1FAE5` (rgb(209, 250, 229))
- Warning Yellow: `#F59E0B` (rgb(245, 158, 11))
- Warning Light: `#FEF3C7` (rgb(254, 243, 199))
- Error Red: `#EF4444` (rgb(239, 68, 68))
- Error Light: `#FEE2E2` (rgb(254, 226, 226))
- Info Purple: `#8B5CF6` (rgb(139, 92, 246))
- Info Light: `#EDE9FE` (rgb(237, 233, 254))

**Neutral Colors:**
- Gray 50: `#F9FAFB` - Backgrounds
- Gray 100: `#F3F4F6` - Light backgrounds
- Gray 200: `#E5E7EB` - Borders
- Gray 300: `#D1D5DB` - Disabled elements
- Gray 400: `#9CA3AF` - Placeholder text
- Gray 500: `#6B7280` - Secondary text
- Gray 600: `#4B5563` - Body text
- Gray 700: `#374151` - Headings
- Gray 800: `#1F2937` - Dark backgrounds
- Gray 900: `#111827` - Primary text

### Alternative Theme (Dark Mode)
For future implementation or alternative styling:
- Background: `#1F2937`
- Card Background: `#374151`
- Text: `#F9FAFB`
- Primary: `#60A5FA`

---

## Typography

### Font Family
**Primary:** Inter
- Weight: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- Fallback: system-ui, -apple-system, sans-serif

### Type Scale

**Headings:**
- H1: 40px - 48px (2.5rem - 3rem) / Bold / Line height 1.2
- H2: 30px - 36px (1.875rem - 2.25rem) / Semibold / Line height 1.2
- H3: 24px - 30px (1.5rem - 1.875rem) / Semibold / Line height 1.3
- H4: 20px (1.25rem) / Semibold / Line height 1.4
- H5: 18px (1.125rem) / Semibold / Line height 1.4

**Body Text:**
- Large: 18px (1.125rem) / Regular / Line height 1.6
- Regular: 16px (1rem) / Regular / Line height 1.5
- Small: 14px (0.875rem) / Regular / Line height 1.5
- Caption: 12px (0.75rem) / Regular / Line height 1.4

### Usage Guidelines
- Use bold weight for emphasis, not larger sizes
- Maintain consistent line height for readability
- Body text: 150% line height
- Headings: 120% line height
- Maximum 3 font weights per screen

---

## Spacing System

Based on 8px grid system:

- **4px** (0.25rem) - Minimal spacing
- **8px** (0.5rem) - Tight spacing
- **12px** (0.75rem) - Compact spacing
- **16px** (1rem) - Base spacing
- **24px** (1.5rem) - Medium spacing
- **32px** (2rem) - Large spacing
- **48px** (3rem) - XL spacing
- **64px** (4rem) - XXL spacing

### Application
- Card padding: 24px (desktop), 16px (mobile)
- Section spacing: 48px - 64px
- Element spacing: 16px - 24px
- Input padding: 12px (vertical), 16px (horizontal)

---

## Components

### Buttons

**Primary Button:**
- Background: Blue 600 (#3B82F6)
- Text: White
- Padding: 12px 24px
- Border radius: 8px
- Font: 16px, Medium (500)
- Hover: Blue 700 (#2563EB)
- Active: Slightly darker with subtle scale
- Focus: 2px blue ring with 2px offset

**Secondary Button:**
- Background: White
- Border: 2px solid Blue 600
- Text: Blue 600
- Padding: 12px 24px
- Border radius: 8px
- Hover: Blue 50 background
- Focus: 2px blue ring with 2px offset

**Ghost Button:**
- Background: Transparent
- Text: Gray 700
- Padding: 12px 24px
- Border radius: 8px
- Hover: Gray 100 background
- Focus: 2px gray ring

**Button Sizes:**
- Small: 8px 16px, 14px text
- Medium (default): 12px 24px, 16px text
- Large: 16px 32px, 18px text

### Cards

**Default Card:**
- Background: White
- Border radius: 12px
- Shadow: 0 1px 3px rgba(0, 0, 0, 0.1)
- Hover: 0 4px 12px rgba(0, 0, 0, 0.15)
- Padding: 24px
- Transition: shadow 200ms ease

**Job Card:**
- Same as default card
- Clickable with cursor pointer
- Hover elevates with increased shadow
- Includes company logo (48px × 48px rounded)

### Badges

**Status Badges:**
- Border radius: 9999px (fully rounded)
- Padding: 4px 12px
- Font: 14px, Medium (500)
- Line height: 1.2

**Badge Variants:**
- Success: Green 100 background, Green 800 text
- Warning: Yellow 100 background, Yellow 800 text
- Info: Blue 100 background, Blue 800 text
- Gray: Gray 100 background, Gray 800 text

### Form Elements

**Input Fields:**
- Border: 1px solid Gray 300
- Border radius: 8px
- Padding: 12px 16px
- Font: 16px Regular
- Focus: 2px blue ring, border becomes transparent
- Placeholder: Gray 400
- Error: Red border, red ring on focus

**Select Dropdowns:**
- Same styling as input fields
- Chevron icon on right
- Options appear in white dropdown with shadow

**Textareas:**
- Same as input fields
- Min height: 120px
- Resize: vertical only

**Checkboxes & Radio Buttons:**
- Size: 16px × 16px
- Border: 2px solid Gray 300
- Checked: Blue 600 background
- Border radius: 4px (checkbox), 50% (radio)
- Focus: Blue ring

### Modals

**Structure:**
- Max width: 640px (2xl) for most modals
- Background: White
- Border radius: 12px
- Shadow: Large (0 20px 25px rgba(0, 0, 0, 0.15))
- Backdrop: Black with 50% opacity
- Animation: Fade in (backdrop), Slide in from top (modal)

**Header:**
- Padding: 16px 24px
- Border bottom: 1px solid Gray 200
- Title: H3 (20px Semibold)
- Close button: Top right, Gray 400, hover Gray 600

**Content:**
- Padding: 24px
- Max height: 80vh with scroll

### Avatars

**User Avatar:**
- Circular for individuals
- Rounded rectangle (8px radius) for companies
- Sizes: 32px, 48px, 64px, 96px
- Placeholder: Initials on gradient background
- Border: Optional 2px white with shadow

### Icons

**Library:** Lucide React
**Sizes:**
- Small: 16px
- Medium: 20px
- Large: 24px
- XL: 32px

**Usage:**
- Use consistent size within context
- Align vertically centered with text
- Add 8px gap between icon and text
- Use theme colors for icon fills

### Toasts / Notifications

**Position:** Bottom right, 24px margin
**Width:** Max 400px
**Structure:**
- Background: Based on type (Green/Red/Blue)
- Text: White
- Padding: 16px 24px
- Border radius: 8px
- Shadow: Large
- Icon: 20px on left
- Close button: On right
- Animation: Fade in, auto-dismiss after 3s

---

## Layout & Grid

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: ≥ 1024px

### Container
- Max width: 1280px (7xl)
- Padding: 16px (mobile), 24px (tablet), 32px (desktop)
- Centered with auto margins

### Grid System
- Job listings: 1 column (mobile), 2 columns (tablet), 3 columns (desktop)
- Dashboard cards: 1 column (mobile), 2 columns (tablet), 4 columns (desktop)
- Form fields: 1 column (mobile), 2 columns (desktop)

---

## Animations & Transitions

### Timing Functions
- **Ease-out:** Default for entering elements
- **Ease-in:** Exit animations
- **Ease-in-out:** State changes

### Duration
- Fast: 150ms - Hover states, small changes
- Medium: 200ms - Default, button clicks
- Standard: 300ms - Modals, overlays, page transitions
- Slow: 500ms - Large movements, complex animations

### Common Animations
- **Fade In:** Opacity 0 → 1 (300ms ease-in)
- **Slide In:** Transform translateY(-20px) → 0 (300ms ease-out)
- **Scale:** Transform scale(0.95) → 1 (200ms ease-out)
- **Elevation:** Shadow increase on hover (200ms ease)

---

## Accessibility

### Color Contrast
- Body text on white: Minimum 4.5:1 (WCAG AA)
- Large text: Minimum 3:1
- Interactive elements: Clear hover/focus states

### Focus States
- All interactive elements must have visible focus state
- Use 2px ring with 2px offset
- Blue 500 color for focus rings
- Never remove outline without replacement

### Touch Targets
- Minimum 44px × 44px for mobile
- Adequate spacing between interactive elements

### Screen Readers
- Use semantic HTML (nav, main, section, article)
- All images need alt text
- Form labels properly associated
- ARIA labels for icon-only buttons

---

## Responsive Design

### Mobile-First Approach
Start with mobile layout, enhance for larger screens

### Key Considerations
- Stack elements vertically on mobile
- Use hamburger menu for navigation
- Enlarge touch targets
- Simplify complex tables/grids
- Maintain readability at all sizes

### Mobile Specific
- Full-width buttons
- Single column layouts
- Sticky headers where appropriate
- Bottom sheets instead of modals (optional)

---

## Logo Specifications

### Company/User Logo Placeholders
- Format: Initials (2 letters)
- Background: Gradient (Blue 500 to Blue 700)
- Text: White, Bold
- Size: Varies by context (48px, 64px, 96px)
- Shape: Rounded rectangle (8px radius) for companies, circle for users

---

## Iconography

### Style
- Outlined style (Lucide)
- 2px stroke width
- Consistent sizing within context

### Common Uses
- Briefcase: Jobs
- Users: Candidates/Team
- MapPin: Location
- Calendar: Dates
- Mail: Email
- Phone: Contact
- Building: Company
- Search: Search functionality

---

## Empty States

**Structure:**
- Centered content
- Icon (48px, gray 400)
- Heading: H4
- Description: Gray 500 text
- Call-to-action button

**Example Messages:**
- "No jobs found matching your criteria"
- "No saved jobs yet — start browsing"
- "No applications yet — start applying"

---

## Best Practices

1. **Consistency:** Use components as defined, don't create variations
2. **Hierarchy:** Use size, weight, and color to establish importance
3. **White Space:** Don't be afraid of empty space, it improves readability
4. **Alignment:** Use the 8px grid for consistent alignment
5. **Feedback:** Provide visual feedback for all interactions
6. **Performance:** Optimize images and use appropriate formats
7. **Accessibility:** Test with keyboard navigation and screen readers

---

## Do's and Don'ts

### Do's
✓ Use consistent spacing throughout
✓ Maintain clear visual hierarchy
✓ Provide hover states for all interactive elements
✓ Use appropriate color combinations
✓ Test on multiple screen sizes
✓ Keep animations subtle and purposeful

### Don'ts
✗ Don't mix different button styles in the same context
✗ Don't use too many colors
✗ Don't create tiny touch targets on mobile
✗ Don't forget focus states
✗ Don't use animation just for decoration
✗ Don't ignore accessibility requirements

---

**Version:** 1.0
**Last Updated:** October 2024
