import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { SectionWrapper } from '../SectionWrapper';
import { CardContent } from '../ui/card';

const education = [
  {
    degree: 'Bachelor of Technology',
    institution: 'SRM Institute of Science & Technology',
    location: 'Chennai, India',
    period: 'July 2014 - June 2018',
    highlights: [
      'Completed comprehensive Computer Science curriculum',
      'Developed strong foundation in programming and software engineering',
      'Participated in technical projects and collaborative learning'
    ]
  }
];

export const Education: React.FC = () => {
  return (
    <SectionWrapper id="education" title="Education" icon={GraduationCap}>
      <CardContent className="p-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-accent/20 hover:bg-accent/30 transition-colors rounded-lg p-6 border border-border/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
              <div className="flex items-center text-sm text-muted-foreground mt-2 md:mt-0">
                <Calendar className="w-4 h-4 mr-1" />
                {edu.period}
              </div>
            </div>
            
            <div className="flex items-center text-lg font-medium text-primary mb-4">
              <span>{edu.institution}</span>
              <span className="mx-2">•</span>
              <MapPin className="w-4 h-4 mr-1" />
              <span>{edu.location}</span>
            </div>
            
            <ul className="space-y-2">
              {edu.highlights.map((highlight, highlightIndex) => (
                <motion.li
                  key={highlightIndex}
                  className="text-foreground leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + highlightIndex * 0.1 }}
                >
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{highlight}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </CardContent>
    </SectionWrapper>
  );
}; 