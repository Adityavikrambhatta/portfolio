import React from 'react';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { Card } from './ui/card';

interface SectionWrapperProps {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  className?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  title,
  icon: Icon,
  children,
  className = '',
}) => {
  return (
    <Element name={id} className="element">
      <motion.section
        id={id}
        className={`py-20 px-4 ${className}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-center mb-4">
              <Icon className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                {title}
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
          </motion.div>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
            {children}
          </Card>
        </div>
      </motion.section>
    </Element>
  );
}; 