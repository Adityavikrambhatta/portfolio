import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { SectionWrapper } from '../SectionWrapper';
import { CardContent } from '../ui/card';

export const Summary: React.FC = () => {
  return (
    <SectionWrapper id="summary" title="Summary" icon={User}>
      <CardContent className="p-8">
        <motion.div
          className="prose prose-lg max-w-none dark:prose-invert"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg leading-relaxed text-foreground">
            Experienced Software Engineer with <strong>5+ years</strong> in building scalable, 
            distributed systems and data pipelines. Passionate about designing high-performance 
            backend architectures, optimizing cloud-native AI/ML platforms, and leading teams 
            to deliver impactful solutions.
          </p>
          
          <motion.div
            className="grid md:grid-cols-3 gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="text-center p-6 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors">
              <div className="text-3xl font-bold text-primary mb-2">80%</div>
              <div className="text-sm text-muted-foreground">Performance Improvement</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors">
              <div className="text-3xl font-bold text-primary mb-2">75%</div>
              <div className="text-sm text-muted-foreground">Processing Time Reduction</div>
            </div>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-foreground">Core Strengths</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'Innovation', 'Analytics', 'Leadership', 
                'AI/ML', 'Backend Development', 'Cloud Computing',
                'System Architecture', 'Data Engineering'
              ].map((strength, index) => (
                <motion.span
                  key={strength}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                >
                  {strength}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </CardContent>
    </SectionWrapper>
  );
}; 