# Tapps Landing Page

A modern, responsive landing page built with Next.js 16, React 19, and Tailwind CSS. This project showcases a beautiful UI with shadcn/ui components and is designed to provide an engaging user experience.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 16, React 19, and TypeScript
- **Beautiful UI**: Styled with Tailwind CSS and shadcn/ui components
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Mode Support**: Built-in theme switching with next-themes
- **Component Library**: Extensive collection of reusable UI components
- **Form Handling**: React Hook Form with Zod validation
- **Analytics**: Vercel Analytics integration
- **Optimized Performance**: Built with performance in mind

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library

### UI Components
- **Radix UI** - Headless UI primitives
- **Lucide React** - Icon library
- **Class Variance Authority** - Utility for component variants
- **clsx & tailwind-merge** - Utility for conditional classes

### Forms & Validation
- **React Hook Form** - Performant forms
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Validation integration

### Additional Libraries
- **next-themes** - Theme switching
- **sonner** - Toast notifications
- **recharts** - Chart library
- **date-fns** - Date utilities
- **cmdk** - Command menu
- **vaul** - Drawer/modal component

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Appmaniazar-Projects/Tapps-LandingPage.git
cd Tapps-LandingPage
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Build the application
```bash
npm run build
npm start
```

### Deploy to Vercel
The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 📁 Project Structure

```
Tapps-LandingPage/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── hero.tsx          # Hero section
│   ├── features-section.tsx
│   ├── problem-section.tsx
│   ├── how-it-works.tsx
│   ├── screenshots-section.tsx
│   ├── cta-section.tsx
│   └── footer.tsx
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/                # Static assets
└── styles/               # Additional styles
```

## 🎨 Components

The project includes a comprehensive set of UI components:

- **Hero Section** - Eye-catching landing section
- **Features Section** - Showcase key features
- **Problem Section** - Address user pain points
- **How It Works** - Step-by-step explanation
- **Screenshots Section** - Visual demonstrations
- **CTA Section** - Call-to-action area
- **Footer** - Site footer with links

### UI Components
All shadcn/ui components are available in the `components/ui/` directory:
- Accordion, Alert, Avatar, Badge, Button, Card, Checkbox, Dialog, Dropdown, Input, Label, Select, Tabs, and many more.

## 🎯 Usage

### Adding New Components
1. Create your component in the appropriate directory
2. Follow the existing patterns and TypeScript conventions
3. Use Tailwind CSS for styling
4. Export from the main component file if needed

### Customizing Theme
The theme configuration is handled by `next-themes` and Tailwind CSS. You can modify the color scheme and design tokens in the Tailwind configuration.

### Form Handling
Forms use React Hook Form with Zod validation:
```tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const schema = z.object({
  email: z.string().email(),
})

const { register, handleSubmit } = useForm({
  resolver: zodResolver(schema),
})
```

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting (recommended)

## 📊 Analytics

The project includes Vercel Analytics for monitoring performance and user behavior. Analytics data is automatically collected when deployed to Vercel.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - The utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [Radix UI](https://www.radix-ui.com/) - Headless UI primitives

---

Made with ❤️ by [ayabulela12](https://github.com/Appmaniazar-Projects)
