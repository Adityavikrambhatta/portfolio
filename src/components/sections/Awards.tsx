import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import { SectionWrapper } from '../SectionWrapper';
import { CardContent } from '../ui/card';

const awards = [
  {
    title: 'Star of the Quarter',
    organization: 'Ipsos',
    year: 'Jan 2025',
    description: 'Recognized for implementing parallel processing, significantly enhancing system efficiency.'
  },
  {
    title: 'Star of the Quarter',
    organization: 'Ipsos',
    year: 'Mar 2024',
    description: 'Honored for contributions to the Attribution Engine\'s performance and scalability.'
  },
  {
    title: 'Athena Award',
    organization: 'Ipsos',
    year: 'Sep 2020',
    description: 'Awarded for early excellence and innovation as a new team member.'
  }
];

export const Awards: React.FC = () => {
  return (
    <SectionWrapper id="awards" title="Awards" icon={Award}>
      <CardContent className="p-8">
        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="bg-accent/20 hover:bg-accent/30 transition-colors rounded-lg p-6 border border-border/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-lg font-semibold text-foreground">{award.title}</h3>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-1" />
                  {award.year}
                </div>
              </div>
              
              <div className="text-primary font-medium mb-3">{award.organization}</div>
              
              <p className="text-muted-foreground leading-relaxed">{award.description}</p>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </SectionWrapper>
  );
}; 