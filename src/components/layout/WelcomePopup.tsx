import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, Zap, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const WelcomePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("welcome-popup-seen");
    if (seen) return;

    const showTimer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    sessionStorage.setItem("welcome-popup-seen", "true");
    const hideTimer = setTimeout(() => setIsVisible(false), 5000);
    return () => clearTimeout(hideTimer);
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsVisible(false)}
          />
          <motion.div
            className="relative w-full max-w-md bg-background rounded-2xl shadow-2xl border overflow-hidden"
            initial={{ scale: 0.9, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 30, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="bg-primary p-5 text-primary-foreground">
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-3 right-3 p-1 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="h-8 w-8 shrink-0" />
                <Zap className="h-6 w-6 shrink-0" />
              </div>
              <h2 className="text-lg font-bold leading-tight">
                Welcome to MEP Erictric Technology Ltd
              </h2>
              <p className="text-sm mt-1 opacity-90">
                Professional Mechanical, Electrical and Plumbing Engineering Solutions in Rwanda
              </p>
            </div>

            <div className="p-5">
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                We specialize in elevator installation, electrical systems, generator installation, MV cable infrastructure, and modern building engineering services.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button asChild className="flex-1" onClick={() => setIsVisible(false)}>
                  <Link to="/projects">View Our Projects</Link>
                </Button>
                <Button asChild variant="outline" className="flex-1" onClick={() => setIsVisible(false)}>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomePopup;
