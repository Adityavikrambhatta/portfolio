import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { SectionWrapper } from '../SectionWrapper';
import { CardContent } from '../ui/card';

const experiences = [
  {
    title: 'Lead Software Engineer',
    company: 'Ipsos',
    location: 'Bengaluru',
    period: 'May 2024 – Present',
    achievements: [
      'Leading the Attribution team to deploy advanced attribution methodologies for diverse clients',
      'Spearheaded optimization of attribution engine performance, improving delivery rate by 80%',
      'Built a generalized attribution framework tailored to varying client needs'
    ]
  },
  {
    title: 'Senior Software Engineer',
    company: 'Ipsos',
    location: 'Bengaluru',
    period: 'May 2022 – April 2024',
    achievements: [
      'Established and scaled ELT pipelines, reducing processing time by 75%',
      'Enhanced data quality through robust cleaning and transformation logic'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Ipsos',
    location: 'Bengaluru',
    period: 'Feb 2020 – April 2022',
    achievements: [
      'Developed interactive dashboards and visualizations for marketing mix modeling',
      'Partnered with data scientists to transform complex data insights into actionable visuals'
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience" title="Experience" icon={Briefcase}>
      <CardContent className="p-8">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-12 md:pl-20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-2 md:left-6 w-4 h-4 bg-primary rounded-full border-4 border-background"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                />
                
                <div className="bg-accent/20 hover:bg-accent/30 transition-colors rounded-lg p-6 border border-border/50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground mt-1 md:mt-0">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-lg font-medium text-primary mb-2">
                    <span>{exp.company}</span>
                    <span className="mx-2">•</span>
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{exp.location}</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        className="text-foreground leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.2 + achIndex * 0.1 + 0.5 }}
                      >
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </SectionWrapper>
  );
}; 