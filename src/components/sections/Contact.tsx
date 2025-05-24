import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';
import { SectionWrapper } from '../SectionWrapper';
import { CardContent } from '../ui/card';
import { Button } from '../ui/button';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'adi95vb@gmail.com',
    href: 'mailto:adi95vb@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9131636078',
    href: 'tel:+919131636078'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bengaluru, India',
    href: null
  }
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/aditya-vikram-bhattacharya',
    color: 'text-blue-600'
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/adi95vb',
    color: 'text-gray-800 dark:text-gray-200'
  }
];

export const Contact: React.FC = () => {
  return (
    <SectionWrapper id="contact" title="Contact" icon={Mail}>
      <CardContent className="p-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">Get In Touch</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a conversation about technology and innovation.
            </p>
            
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.div
                    key={contact.label}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-accent/20 hover:bg-accent/30 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <Icon className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">{contact.label}</div>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <div className="text-foreground">{contact.value}</div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Social Links & CTA */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">Connect With Me</h3>
            
            <div className="space-y-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-lg bg-accent/20 hover:bg-accent/30 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className={`w-6 h-6 ${social.color}`} />
                      <span className="text-foreground font-medium">{social.label}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-2">Let's Build Something Amazing</h4>
              <p className="text-muted-foreground mb-4">
                Whether you have a project in mind or just want to chat about technology, 
                I'd love to hear from you.
              </p>
              <Button className="w-full group">
                <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Send Message
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </CardContent>
    </SectionWrapper>
  );
}; 