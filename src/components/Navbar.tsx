import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import Logo from '../Logo/Logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Products', path: '/products' },
    { name: 'Heritage', path: '/about' },
    { name: 'Happy Customers', path: '/happy-customers' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';

  // Visual state helpers
  const isFloating = isScrolled;
  const isDarkText = isScrolled || !isHome;

  // Variants for the navbar container animation
  const navVariants = {
    top: {
      width: "100%",
      y: 0,
      borderRadius: 0,
      backgroundColor: "rgba(0, 0, 0, 0)",
      backdropFilter: "blur(0px)",
      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      paddingTop: "1rem",
      paddingBottom: "1rem",
    },
    scrolled: {
      width: "92%",
      y: 10,
      borderRadius: "9999px",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(255, 255, 255, 0)",
      paddingTop: "0.75rem",
      paddingBottom: "0.75rem",
      boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)",
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 pointer-events-none">
        <motion.nav
          initial="top"
          animate={isFloating ? "scrolled" : !isHome ? "scrolled" : "top"}
          variants={navVariants}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "pointer-events-auto flex items-center justify-between px-6 md:px-8 max-w-7xl mx-auto"
          )}
        >
          {/* Logo Section */}
          <Link to="/" className="flex-shrink-0 z-50 relative">
            <motion.div
              layout
              className="relative"
            >
              <img
                src={Logo}
                alt="Tirupati Rice"
                className={cn(
                  "h-20 md:h-28 w-auto object-contain transition-all duration-300",
                )}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors duration-300",
                  isDarkText ? "text-stone-800" : "text-white"
                )}
              >
                <span className="relative z-10">{link.name}</span>
                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="nav-pill"
                    className={cn(
                      "absolute inset-0 rounded-full -z-0",
                      isDarkText ? "bg-stone-200/50" : "bg-white/20"
                    )}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Action / Mobile Toggle */}
          <div className="flex items-center space-x-4">
            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md",
                  isDarkText
                    ? "bg-[#005e2a] text-white hover:bg-[#004b21] shadow-[#005e2a]/20"
                    : "bg-white text-[#005e2a] hover:bg-zinc-100 shadow-black/10"
                )}
              >
                Inquire Now
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-1 z-50 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className={cn(
                "p-2 rounded-full transition-colors",
                isDarkText ? "bg-stone-100/50 text-stone-900" : "bg-white/10 text-white"
              )}>
                <AnimatePresence mode='wait'>
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={20} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden flex flex-col pt-32 px-6"
          >
            {/* Gradient Orbs for background ambience */}
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-[#005e2a]/10 rounded-full blur-3xl pointer-events-none" />

            <nav className="flex flex-col space-y-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, type: 'spring', stiffness: 100 }}
                >
                  <Link
                    to={link.path}
                    className="group flex items-center justify-between text-2xl font-serif text-stone-800 py-3 border-b border-stone-100"
                  >
                    <span className="group-hover:text-[#005e2a] transition-colors duration-300">
                      {link.name}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#005e2a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-auto mb-12 space-y-8"
            >
              <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                <h4 className="text-sm font-bold text-[#005e2a] uppercase tracking-wider mb-2">Contact Us</h4>
                <p className="text-stone-600">info@tirupati-rice.com</p>
                <p className="text-stone-600">+91 123 456 7890</p>
              </div>

              <div className="flex justify-center space-x-8">
                <SocialIcon icon={Instagram} href="#" color="text-pink-600" />
                <SocialIcon icon={Facebook} href="#" color="text-blue-600" />
                <SocialIcon icon={Twitter} href="#" color="text-sky-500" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Helper component for social icons
const SocialIcon = ({ icon: Icon, href, color }: { icon: any, href: string, color: string }) => (
  <a
    href={href}
    className={`p-3 rounded-full bg-stone-100 hover:bg-white hover:shadow-lg transition-all duration-300 ${color}`}
  >
    <Icon size={24} />
  </a>
);

export default Navbar;
