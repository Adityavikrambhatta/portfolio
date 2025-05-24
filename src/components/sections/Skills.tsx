import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { SectionWrapper } from '../SectionWrapper';
import { CardContent } from '../ui/card';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'R', 'Scala']
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['Django', 'Flask', 'React', 'Node.js', 'Spring Boot', 'Pandas', 'NumPy', 'Scikit-learn']
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Git', 'CI/CD']
  },
  {
    title: 'Databases & Big Data',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Apache Spark', 'Hadoop', 'Elasticsearch']
  },
  {
    title: 'AI/ML & Analytics',
    skills: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'Data Visualization', 'Statistical Analysis']
  }
];

export const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" title="Skills" icon={Code}>
      <CardContent className="p-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="flex items-center justify-between p-3 bg-accent/20 rounded-lg hover:bg-accent/30 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-foreground font-medium">{skill}</span>
                    <motion.div
                      className="w-2 h-2 bg-primary rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2 
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-muted-foreground">
            Continuously learning and adapting to new technologies and industry best practices
          </p>
        </motion.div>
      </CardContent>
    </SectionWrapper>
  );
}; 