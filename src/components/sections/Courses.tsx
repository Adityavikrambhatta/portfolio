import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import { SectionWrapper } from '../SectionWrapper';
import { CardContent } from '../ui/card';
import { Button } from '../ui/button';

const courses = [
  {
    title: 'Machine Learning Nanodegree',
    provider: 'Udacity',
    status: 'Completed',
    period: 'Dec 2018 – Sep 2019',
    description: 'Comprehensive program covering supervised learning, unsupervised learning, and deep learning fundamentals.',
    skills: ['Machine Learning', 'Python', 'TensorFlow', 'Neural Networks', 'Data Analysis']
  },
  {
    title: 'Airtribe Backend Engineering Bootcamp',
    provider: 'Airtribe',
    status: 'Completed',
    period: 'July 2024',
    description: 'Intensive bootcamp focused on backend development, system design, and scalable architecture patterns.',
    skills: ['Backend Development', 'System Design', 'API Development', 'Database Design']
  }
];

export const Courses: React.FC = () => {
  return (
    <SectionWrapper id="courses" title="Courses" icon={BookOpen}>
      <CardContent className="p-8">
        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-accent/20 hover:bg-accent/30 transition-colors rounded-lg p-6 border border-border/50 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <div className="text-primary font-medium">{course.provider}</div>
                <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 text-xs rounded-full">
                  {course.status}
                </span>
              </div>

              <div className="text-sm text-muted-foreground mb-3">{course.period}</div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">{course.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {course.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.2 + skillIndex * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </SectionWrapper>
  );
}; 