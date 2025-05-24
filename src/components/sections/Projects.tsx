import React from 'react';
import { motion } from 'framer-motion';
import { FolderOpen, ExternalLink, Github } from 'lucide-react';
import { SectionWrapper } from '../SectionWrapper';
import { CardContent } from '../ui/card';
import { Button } from '../ui/button';

const projects = [
  {
    title: 'Web Crawler and Summarizer',
    description: 'Built a comprehensive web crawling system that extracts and summarizes content from multiple sources using advanced NLP techniques.',
    technologies: ['Python', 'BeautifulSoup', 'NLTK', 'Flask', 'PostgreSQL'],
    features: [
      'Automated content extraction from web pages',
      'Intelligent text summarization using NLP',
      'RESTful API for integration',
      'Scalable architecture for high-volume processing'
    ]
  },
  {
    title: 'Object Detection with YOLOv8',
    description: 'Implemented real-time object detection system using YOLOv8 for various computer vision applications.',
    technologies: ['Python', 'YOLOv8', 'OpenCV', 'PyTorch', 'FastAPI'],
    features: [
      'Real-time object detection and tracking',
      'Custom model training pipeline',
      'Web-based inference interface',
      'Performance optimization for edge devices'
    ]
  },
  {
    title: 'Ariel Cactus Detection',
    description: 'Developed a specialized computer vision model for detecting and classifying cactus species from aerial imagery.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Docker'],
    features: [
      'Aerial image processing and analysis',
      'Species classification with high accuracy',
      'Geospatial data integration',
      'Containerized deployment solution'
    ]
  }
];

export const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects" title="Projects" icon={FolderOpen}>
      <CardContent className="p-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-accent/20 hover:bg-accent/30 transition-all duration-300 rounded-lg p-6 border border-border/50 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.2 + featureIndex * 0.1 }}
                    >
                      <div className="flex items-start">
                        <div className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.2 + techIndex * 0.05 }}
                  >
                    {tech}
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