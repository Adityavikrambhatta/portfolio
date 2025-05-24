# 🚀 Personal Portfolio - Aditya Vikram Bhattacharya

A modern, responsive, and interactive personal portfolio website built with React, TypeScript, and cutting-edge web technologies. This portfolio showcases professional experience, skills, projects, and achievements with smooth animations and an elegant design.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.x-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06B6D4)

## ✨ Features

### 🎨 **Modern Design**
- **Clean & Professional**: Minimal design focused on content and user experience
- **Glassmorphism Effects**: Modern UI with backdrop blur and translucent elements
- **Responsive Layout**: Perfectly optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with persistent storage

### 🎯 **Interactive Navigation**
- **Floating Sidebar**: Always-accessible navigation with smooth scroll to sections
- **Cursor-Based Interactions**: Hover effects, tooltips, and scale animations
- **Active Section Highlighting**: Dynamic navigation state based on scroll position
- **Mobile-Friendly Menu**: Responsive grid layout for smaller screens

### 🌟 **Smooth Animations**
- **Framer Motion**: Professional animations and transitions
- **Scroll-Triggered Animations**: Content reveals as you scroll
- **Staggered Animations**: Sequential element animations for visual appeal
- **Hover Effects**: Interactive feedback on buttons and cards

### 📱 **Content Sections**
- **Professional Summary**: Overview with key metrics and achievements
- **Work Experience**: Timeline layout with detailed accomplishments
- **Technical Skills**: Categorized skill display with visual indicators
- **Education Background**: Academic credentials and highlights
- **Project Showcase**: Interactive project cards with technology stacks
- **Awards & Recognition**: Professional achievements and honors
- **Continuous Learning**: Courses and certifications with completion status
- **Contact Information**: Multiple ways to connect with social links

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 18** with TypeScript for type safety
- **Create React App** for quick setup and development

### **Styling & UI**
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for accessible, customizable components
- **Radix UI** primitives for accessibility-first design
- **Lucide React** for beautiful, consistent icons

### **Animations & Interactions**
- **Framer Motion** for smooth animations and gestures
- **React Scroll** for navigation and smooth scrolling

### **Development Tools**
- **ESLint** for code quality
- **PostCSS** for CSS processing
- **TypeScript** for enhanced development experience

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── ui/                    # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── switch.tsx
│   │   │   └── tabs.tsx
│   │   ├── sections/              # Main content sections
│   │   │   ├── Summary.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Awards.tsx
│   │   │   ├── Courses.tsx
│   │   │   └── Contact.tsx
│   │   ├── FloatingNav.tsx        # Navigation component
│   │   ├── Header.tsx             # Hero section
│   │   └── SectionWrapper.tsx     # Reusable section wrapper
│   ├── contexts/
│   │   └── ThemeContext.tsx       # Dark/light mode management
│   ├── lib/
│   │   └── utils.ts              # Utility functions
│   ├── App.tsx                   # Main application component
│   ├── index.tsx                 # Application entry point
│   └── index.css                 # Global styles
├── tailwind.config.js            # Tailwind configuration
├── postcss.config.js             # PostCSS configuration
└── package.json                  # Dependencies and scripts
```

## 🎨 Customization

### **Update Personal Information**

1. **Content Data**: Modify the data in each section component:
   - `src/components/sections/Experience.tsx` - Work experience
   - `src/components/sections/Projects.tsx` - Project portfolio
   - `src/components/sections/Skills.tsx` - Technical skills
   - `src/components/sections/Contact.tsx` - Contact information

2. **Header Information**: Update personal details in:
   - `src/components/Header.tsx` - Name, title, contact info

### **Styling Customization**

1. **Colors**: Modify the color scheme in `tailwind.config.js`
2. **Typography**: Update font family and sizing in `src/index.css`
3. **Animations**: Customize animation timings and effects in component files

### **Adding New Sections**

1. Create a new component in `src/components/sections/`
2. Use the `SectionWrapper` component for consistency
3. Add the section to `src/App.tsx`
4. Update navigation in `src/components/FloatingNav.tsx`

## 📦 Available Scripts

### Development
```bash
npm start          # Start development server
npm test           # Run tests
npm run build      # Build for production
npm run eject      # Eject from Create React App (irreversible)
```

## 🌐 Deployment

### **Vercel (Recommended)**
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with automatic builds on push

### **Netlify**
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to [Netlify](https://netlify.com)

### **GitHub Pages**
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://your-username.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## 🔧 Performance Optimization

- **Code Splitting**: Automatic with React lazy loading
- **Image Optimization**: Use WebP format for images
- **Bundle Analysis**: Run `npm run build` and analyze bundle size
- **Lighthouse Scores**: Optimized for 90+ scores in all categories

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📧 Contact

**Aditya Vikram Bhattacharya**
- 📧 Email: adi95vb@gmail.com
- 📱 Phone: +91 9131636078
- 💼 LinkedIn: [Aditya Vikram Bhattacharya](https://linkedin.com/in/aditya-vikram-bhattacharya)
- 🐙 GitHub: [adi95vb](https://github.com/adi95vb)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ **If you found this portfolio helpful, please give it a star on GitHub!**

*Built with ❤️ by Aditya Vikram Bhattacharya*
