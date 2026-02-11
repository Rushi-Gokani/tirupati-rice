import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Brands', path: '/products' },
    { name: 'Heritage', path: '/about' },
    { name: 'Happy Customers', path: '/happy-customers' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';
  
  // Determine navbar text color based on state
  const isDarkText = isScrolled || !isHome || isMobileMenuOpen;

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 py-4',
          isScrolled || !isHome ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent text-white'
        )}
      >
        {/* Traditional tricolor accent line (subtle) */}
        <div
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute left-0 right-0 top-0 h-[2px] opacity-0 transition-opacity duration-500',
            (isScrolled || !isHome) && 'opacity-90'
          )}
        >
          <div className="h-full w-full bg-gradient-to-r from-red-600 via-green-600 to-blue-600" />
        </div>

        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className={cn(
              "text-2xl md:text-3xl font-serif font-bold tracking-widest uppercase z-50 transition-colors duration-300",
              isMobileMenuOpen ? "text-white" : (isDarkText ? "text-stone-900" : "text-white")
            )}
          >
            Tirupati
            <span
              className="ml-1 inline-block align-middle"
              aria-hidden="true"
              style={{
                width: 10,
                height: 10,
                borderRadius: 9999,
                background:
                  'linear-gradient(135deg, rgba(239,68,68,1), rgba(34,197,94,1), rgba(59,130,246,1))',
              }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium tracking-widest uppercase transition-colors relative group",
                  isScrolled || !isHome ? "text-stone-800 hover:text-red-700" : "text-white/90 hover:text-white"
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 via-green-600 to-blue-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 z-50 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <AnimatePresence mode='wait'>
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="text-white w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className={cn("w-6 h-6", isScrolled || !isHome ? "text-stone-900" : "text-white")} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </button>
        </div>
      </nav>

      {/* Modern Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col pt-24 px-6 md:hidden bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950"
          >
            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none bg-red-500/10" />
            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none bg-blue-500/10" />
            <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none bg-green-500/10" />
            
            <div className="flex flex-col h-full justify-between pb-10">
              <motion.div 
                className="flex flex-col space-y-6 mt-8"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                  hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                }}
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-center justify-between text-3xl font-serif text-white/90 hover:text-white transition-colors border-b border-white/10 pb-4"
                    >
                      <span className="relative">
                        {link.name}
                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
                      </span>
                      <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white" />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest font-bold bg-gradient-to-r from-red-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
                    Get in Touch
                  </p>
                  <p className="text-white/80 text-lg font-serif">info@tirupati-rice.com</p>
                  <p className="text-white/80 text-lg font-serif">+1 (555) 123-4567</p>
                </div>
                
                <div className="flex space-x-6 pt-4 border-t border-white/10">
                  <a href="#" className="text-white/60 hover:text-red-300 transition-colors"><Instagram size={24} /></a>
                  <a href="#" className="text-white/60 hover:text-green-300 transition-colors"><Facebook size={24} /></a>
                  <a href="#" className="text-white/60 hover:text-blue-300 transition-colors"><Twitter size={24} /></a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
