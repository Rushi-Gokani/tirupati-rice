import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: '-50px' });

  const footerLinks = [
    {
      title: 'Explore',
      links: [
        { name: 'Home', path: '/' },
        { name: 'Our Brands', path: '/products' },
        { name: 'Heritage', path: '/about' },
        { name: 'Contact Us', path: '/contact' },
      ],
    },
    {
      title: 'Our Brands',
      links: [
        { name: 'Tirupati Royal', path: '/products' },
        { name: 'Tirupati Gold', path: '/products' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer ref={footerRef} className="bg-stone-900 text-stone-300 pt-20 pb-10 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"
        animate={isInView ? {
          y: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3],
        } : {}}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-stone-700/20 rounded-full blur-3xl"
        animate={isInView ? {
          y: [0, -20, 0],
          opacity: [0.2, 0.4, 0.2],
        } : {}}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        {/* Brand Column */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="text-3xl font-serif font-bold text-white tracking-widest uppercase inline-block group">
            <motion.span
              whileHover={{ letterSpacing: '0.15em' }}
              transition={{ duration: 0.3 }}
            >
              Tirupati
            </motion.span>
            <span className="text-gold-500 group-hover:text-gold-400 transition-colors">.</span>
          </Link>
          <p className="text-stone-400 leading-relaxed text-sm">
            Delivering the essence of purity since 1985. We are dedicated to bringing the world's finest grains to your kitchen, preserving tradition in every package.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="text-stone-400 hover:text-gold-500 transition-colors relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Link Columns */}
        {footerLinks.map((column, colIndex) => (
          <motion.div
            key={column.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 * (colIndex + 1) }}
          >
            <h4 className="text-white font-serif text-lg mb-6">{column.title}</h4>
            <ul className="space-y-3 text-sm">
              {column.links.map((link, linkIndex) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + colIndex * 0.1 + linkIndex * 0.05 }}
                >
                  <Link 
                    to={link.path} 
                    className="text-stone-400 hover:text-gold-500 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight 
                      size={12} 
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Contact Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="text-white font-serif text-lg mb-6">Headquarters</h4>
          <ul className="space-y-4 text-sm">
            <motion.li 
              className="flex items-start space-x-3 group"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <MapPin size={18} className="text-gold-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-white transition-colors">123 Harvest Lane, Golden Fields,<br />California 90210</span>
            </motion.li>
            <motion.li 
              className="flex items-center space-x-3 group"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <Phone size={18} className="text-gold-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-white transition-colors">+1 (555) 123-4567</span>
            </motion.li>
            <motion.li 
              className="flex items-center space-x-3 group"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <Mail size={18} className="text-gold-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-white transition-colors">info@tirupati-rice.com</span>
            </motion.li>
          </ul>
        </motion.div>
      </div>
      
      {/* Bottom Bar */}
      <motion.div 
        className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500 relative z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p>&copy; {new Date().getFullYear()} Tirupati Rice Co. All rights reserved.</p>
        <p>
          Mindfully crafted by{' '}
          <motion.a 
            href="https://scraft.studio/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-bold text-stone-400 hover:text-gold-500 transition-colors inline-block"
            whileHover={{ scale: 1.05 }}
          >
            Scraft
          </motion.a>
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
