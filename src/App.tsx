import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

// Helper to enforce minimum loading time
const minLoad = (importFunc: () => Promise<any>, minDurationMs = 2000) => {
  return Promise.all([
    importFunc(),
    new Promise(resolve => setTimeout(resolve, minDurationMs))
  ]).then(([moduleExports]) => moduleExports);
};

// Lazy load pages for performance with minimum display time
const Home = React.lazy(() => minLoad(() => import('./pages/Home')));
const Products = React.lazy(() => minLoad(() => import('./pages/Products')));
const About = React.lazy(() => minLoad(() => import('./pages/About')));
const Contact = React.lazy(() => minLoad(() => import('./pages/Contact')));
const CustomersHappiness = React.lazy(() => minLoad(() => import('./pages/CustomersHappiness')));
const TirupatiBrand = React.lazy(() => minLoad(() => import('./pages/TirupatiBrand')));
const MannatBrand = React.lazy(() => minLoad(() => import('./pages/MannatBrand')));

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
  return null;
};

// Page transition wrapper
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

// Animated routes component
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/products"
          element={
            <PageTransition>
              <Products />
            </PageTransition>
          }
        />
        <Route
          path="/brand/tirupati"
          element={
            <PageTransition>
              <TirupatiBrand />
            </PageTransition>
          }
        />
        <Route
          path="/brand/mannat"
          element={
            <PageTransition>
              <MannatBrand />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        <Route
          path="/happy-customers"
          element={
            <PageTransition>
              <CustomersHappiness />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans text-stone-800 bg-stone-50 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <AnimatedRoutes />
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
