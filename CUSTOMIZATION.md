# Customization Guide

This guide will help you customize the portfolio to make it your own.

## 📝 Personal Information

### Update Your Name and Title
Edit `components/sections/Hero.tsx`:
```tsx
<h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
  Your Name Here
</h1>
<p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
  Your Title | Your Subtitle | Your Focus
</p>
```

### Update App Metadata
Edit `app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your custom description",
};
```

## 🎨 Colors & Theme

Edit `tailwind.config.ts` to customize the color scheme:
```ts
colors: {
  primary: "hsl(var(--primary))",
  // Add your custom colors here
}
```

Also update CSS variables in `app/globals.css`:
```css
:root {
  --primary: 222.2 47.6% 11.2%;
  --secondary: 210 40% 96%;
  // Customize these values
}
```

## 📚 Skills Section

Edit `components/sections/Skills.tsx` to add your skills:
```tsx
const skillCategories = [
  {
    category: "Your Category",
    skills: ["Skill 1", "Skill 2", "Skill 3"]
  }
];
```

## 🎯 Projects

Edit `components/sections/Projects.tsx` to add your projects:
```tsx
const projects = [
  {
    title: "Your Project Title",
    description: "Project description",
    technologies: ["Tech1", "Tech2"],
    link: "https://your-link.com"
  }
];
```

## 🏆 Certifications

Edit `components/sections/Certifications.tsx` to add your certifications:
```tsx
const certifications = [
  {
    title: "Certification Name",
    issuer: "Issuing Organization",
    date: "2024"
  }
];
```

## 📧 Contact Information

Edit `components/sections/Contact.tsx` to update:
- Email address
- Social media links (GitHub, LinkedIn, Twitter, etc.)
- Contact form handling

## 🔗 Social Links

Update the social media links in the Contact section:
```tsx
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
```

## 🖼️ Adding Images

1. Create a `public` folder in the root directory
2. Add your images there
3. Use them in components:
```tsx
import Image from "next/image";

<Image 
  src="/your-image.jpg" 
  alt="Description" 
  width={300} 
  height={300} 
/>
```

## 📱 Responsive Design

The portfolio is responsive by default. To customize breakpoints, edit `tailwind.config.ts`:
```ts
theme: {
  extend: {
    screens: {
      'sm': '640px',
      'md': '768px',
      // Add your custom breakpoints
    }
  }
}
```

## 🎭 Font Customization

To change fonts, edit `app/layout.tsx` and `globals.css`.

For Google Fonts, add to `app/layout.tsx`:
```tsx
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
```

## 💬 Tips

- Use `components/ui/*` components throughout for consistency
- Keep the structure simple and maintainable
- Test on mobile devices frequently
- Validate all links work correctly
- Update contact information with real links

---

For deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)
