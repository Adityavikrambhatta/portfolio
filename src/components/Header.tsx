import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, MapPin, Mail, Phone, Linkedin, Github } from 'lucide-react';
import { Switch } from './ui/switch';
import { Button } from './ui/button';
import { useTheme } from '../contexts/ThemeContext';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-20">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Theme Toggle */}
      <motion.div 
        className="fixed top-6 left-6 z-50 flex items-center space-x-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Sun className="h-4 w-4" />
        <Switch
          checked={theme === 'dark'}
          onCheckedChange={toggleTheme}
        />
        <Moon className="h-4 w-4" />
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent mb-6">
            Aditya Vikram Bhattacharya
          </h1>
          
          <motion.div
            className="flex items-center justify-center space-x-2 text-xl md:text-2xl text-muted-foreground mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <MapPin className="w-6 h-6" />
            <span>Bengaluru, India</span>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Senior Software Engineer with 5+ years of experience building scalable, 
            distributed systems and data pipelines. Passionate about innovation, 
            AI/ML, and creating impactful solutions.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button variant="outline" size="lg" className="group">
              <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              adi95vb@gmail.com
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              +91 9131636078
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Linkedin className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              GitHub
            </Button>
          </motion.div>

          <motion.div
            className="animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
}; 