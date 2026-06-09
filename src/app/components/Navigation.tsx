import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import TpsWordmark from "./TpsWordmark";

const navItems = [
  { path: "/", label: "HOME" },
  { path: "/thesis", label: "THESIS" },
  { path: "/architecture", label: "ARCHITECTURE" },
  { path: "/applications", label: "APPLICATIONS" },
  { path: "/value-creation", label: "VALUE CREATION" },
  { path: "/tps", label: "TPS" },
];

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isHome = location.pathname === "/";

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const containerVariants = {
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
    open: {
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between relative z-50">
          <Link to="/" className="flex items-center gap-3 group" style={{ fontSize: "1.05rem" }}>
            <TpsWordmark variant="light" showTagline={false} className="transition-opacity group-hover:opacity-75" />
            {isHome && (
              <motion.div
                layoutId="home-indicator"
                className="absolute -bottom-[17px] left-0 w-8 h-[2px] bg-foreground"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative text-xs tracking-wider font-medium transition-opacity hover:opacity-100 opacity-70"
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-foreground"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggler */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 text-foreground/80 hover:text-foreground focus:outline-none z-50 relative flex items-center justify-center transition-colors"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[100] bg-[#0b0b0d] text-white flex flex-col overflow-hidden"
          >
            {/* Mobile overlay top bar with wordmark */}
            <div className="shrink-0 flex items-center justify-between px-8 pt-8 pb-2">
              <Link to="/" onClick={() => setIsOpen(false)} style={{ fontSize: "1rem" }}>
                <TpsWordmark variant="dark" showTagline={false} />
              </Link>
            </div>

            {/* Scrollable Links Container */}
            <motion.div 
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex-1 overflow-y-auto flex flex-col justify-center px-8 py-8"
            >
              <div className="flex flex-col items-center space-y-6 max-w-sm mx-auto w-full">
                {navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    variants={itemVariants}
                    className="w-full text-center"
                  >
                    <Link
                      to={item.path}
                      className={`block text-2xl tracking-[0.15em] font-light transition-colors ${
                        location.pathname === item.path
                          ? "text-white font-medium"
                          : "text-white/60 hover:text-white"
                      }`}
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Bottom Sections */}
            <motion.div
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="shrink-0"
            >

              <motion.div variants={itemVariants} className="border-t border-white/10 p-6 flex justify-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-xs tracking-[0.2em] text-white/60 hover:text-white transition-colors uppercase py-2 px-4"
                  aria-label="Close Navigation Menu"
                >
                  <X className="w-5 h-5" />
                  Close
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
