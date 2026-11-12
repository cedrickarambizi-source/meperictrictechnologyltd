import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { X, ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";

const WelcomePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const reduceMotion = useReducedMotion();

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
          transition={{ duration: reduceMotion ? 0 : 0.25 }}
        >
          <div
            className="absolute inset-0 bg-welcome/60 backdrop-blur-sm"
            onClick={() => setIsVisible(false)}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="welcome-title"
            aria-describedby="welcome-description"
            className="relative w-full max-w-[560px] max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-lg border border-welcome-foreground/15 bg-welcome text-welcome-foreground shadow-welcome"
            initial={{ y: reduceMotion ? 0 : 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: reduceMotion ? 0 : 8, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
          >
            <div className="flex items-center justify-between border-b border-welcome-foreground/15 px-6 py-5 sm:px-9">
              <div className="flex items-center gap-3">
                <img src={logo} alt="MEP Erictric" className="h-10 w-10 rounded-sm object-contain" />
                <div className="text-xs font-medium leading-relaxed">
                  <p>MEP ERICTRIC</p>
                  <p className="text-welcome-muted">TECHNOLOGY LTD</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsVisible(false)}
                className="shrink-0 rounded-md text-welcome-muted hover:bg-welcome-foreground/10 hover:text-welcome-foreground"
                aria-label="Close welcome popup"
                title="Close"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="px-6 pb-8 pt-7 sm:px-9 sm:pb-9 sm:pt-9">
              <p className="mb-4 text-xs font-medium uppercase text-welcome-muted">Welcome to</p>
              <h2 id="welcome-title" className="max-w-[400px] text-2xl leading-tight sm:text-3xl">
                MEP Erictric<br />Technology Ltd
              </h2>
              <p className="mt-5 max-w-[400px] text-base leading-relaxed">
                Professional Mechanical, Electrical and Plumbing Engineering Solutions in Rwanda
              </p>
              <p id="welcome-description" className="mt-4 text-sm leading-relaxed text-welcome-muted">
                We specialize in elevator installation, electrical systems, generator installation, MV cable infrastructure, and modern building engineering services.
              </p>
              <div className="mt-7 flex flex-col gap-2 border-t border-welcome-foreground/15 pt-6 sm:flex-row sm:items-center sm:gap-4">
                <Button asChild className="h-11 rounded-md px-5" onClick={() => setIsVisible(false)}>
                  <Link to="/projects">View Our Projects <ArrowUpRight aria-hidden="true" /></Link>
                </Button>
                <Button asChild variant="ghost" className="h-11 rounded-md px-4 text-welcome-foreground hover:bg-welcome-foreground/10 hover:text-welcome-foreground" onClick={() => setIsVisible(false)}>
                  <Link to="/contact">Contact Us <ArrowRight aria-hidden="true" /></Link>
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
