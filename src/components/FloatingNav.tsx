import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scroller } from 'react-scroll';
import { 
  User, 
  Briefcase, 
  Code, 
  GraduationCap, 
  FolderOpen, 
  Award, 
  BookOpen, 
  Mail,
  Menu,
  X
} from 'lucide-react';
import { Button } from './ui/button';

const navItems = [
  { id: 'summary', label: 'Summary', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'awards', label: 'Awards', icon: Award },
  { id: 'courses', label: 'Courses', icon: BookOpen },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const FloatingNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('summary');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -80,
    });
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.div
        className="fixed top-6 right-6 z-50 md:hidden"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-background/80 backdrop-blur-sm border border-border/50"
        >
          {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </motion.div>

      {/* Desktop Navigation */}
      <motion.nav
        className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:block"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-4 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative p-3 rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-accent text-muted-foreground hover:text-accent-foreground'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                  <motion.div
                    className="absolute left-full ml-4 px-3 py-2 bg-background border border-border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
            <motion.div
              className="relative h-full flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-xl max-w-sm w-full mx-4">
                <div className="grid grid-cols-2 gap-4">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 ${
                          activeSection === item.id
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-accent text-muted-foreground hover:text-accent-foreground'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="w-6 h-6 mb-2" />
                        <span className="text-sm font-medium">{item.label}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}; 