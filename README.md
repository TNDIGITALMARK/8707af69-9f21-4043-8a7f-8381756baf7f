# Westend Club Website

A premium social club website built with Next.js 15, featuring luxury aesthetics with navy blue and gold color scheme.

## Overview

Westend Club is an exclusive social club website showcasing:
- **Homepage**: Hero section with club imagery, upcoming events, member benefits, and gallery
- **Membership Page**: Three membership tiers (Classic, Premium, Executive) with detailed benefits and application form
- **Events Page**: Calendar of upcoming events, member spotlights, and past events gallery

## Design System

### Colors
- **Navy Primary**: `#1a2332` (HSL: 214 35% 15%) - Headers, footers, and primary elements
- **Gold Accent**: `#d4af37` (HSL: 43 65% 52%) - Logo, icons, and accent elements
- **White**: `#ffffff` - Text overlays, cards, and backgrounds
- **Light Gray**: `#f5f5f5` - Section backgrounds
- **Gray Neutral**: `#333333` - Body text

### Typography
- **Headings**: Playfair Display (serif) - Elegant, luxury feel
- **Body Text**: Inter (sans-serif) - Clean, modern readability
- **Logo**: Playfair Display with letter-spacing, uppercase

### Spacing
- 8px grid system throughout
- Generous white space (40-80px margins between sections)
- Card padding: 24-32px
- Consistent component spacing

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── membership/
│   │   └── page.tsx          # Membership tiers and application
│   ├── events/
│   │   └── page.tsx          # Events calendar and community
│   ├── globals.css           # Global styles and design system
│   └── layout.tsx            # Root layout
├── components/
│   └── westend/
│       ├── Header.tsx        # Navigation header
│       └── Footer.tsx        # Footer with contact and social links
public/
└── generated/
    ├── hero-background.png   # Main hero image
    ├── gallery-cocktail.png  # Gallery image
    ├── gallery-event1.png    # Gallery image
    ├── gallery-dining.png    # Gallery image
    └── gallery-lounge.png    # Gallery image
```

## Key Features

### Homepage
- Dramatic hero section with luxury interior imagery
- Upcoming events preview with circular icon badges
- Member benefits showcase
- Image gallery with hover effects

### Membership Page
- Three-tier pricing structure (Classic, Premium, Executive)
- Detailed benefit breakdowns with checkmark icons
- Featured "Popular" badge on Premium tier
- Application form with tier selection

### Events Page
- Event cards with category badges
- Date and time information
- Registration buttons
- Member testimonials
- Past events photo gallery

## Components

### Header
- Responsive navigation with mobile hamburger menu
- Gold "WESTEND" logo with Playfair Display
- Uppercase navigation links with hover effects
- Sticky positioning

### Footer
- Three-column layout (logo, contact, social)
- Social media icons with hover effects
- Contact information
- Copyright notice

## Responsive Design

- Mobile-first approach
- Breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- Hamburger menu on mobile
- Grid layouts adapt to screen size
- Touch-friendly interactions

## Technologies

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS v4**: Utility-first CSS via PostCSS
- **Next/Image**: Optimized image loading
- **Google Fonts**: Playfair Display & Inter

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Color Usage Examples

```tsx
// Navy background
className="bg-navy"

// Gold text
className="text-gold"

// Navy with gold hover
className="bg-navy hover:bg-gold"

// Gold border
className="border-gold"
```

## Font Usage

```tsx
// Playfair Display for headings
className="font-['Playfair_Display']"

// Inter (default for body text via globals.css)
className="font-sans"
```

## Performance

- Unoptimized images for generated content
- Lazy loading for below-the-fold content
- Code splitting via Next.js App Router
- Optimized Google Fonts loading

## Future Enhancements

- Member portal with login
- Online event booking system
- Real-time availability
- Payment integration
- Email notifications
- Member directory
- Photo galleries per event
