import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/250781175264?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20engineering%20services.";

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex items-center gap-2">
      <AnimatePresence>
        {showTooltip && (
          <motion.span
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            className="hidden sm:block bg-foreground text-background text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap"
          >
            Chat with us on WhatsApp
          </motion.span>
        )}
      </AnimatePresence>

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg"
        style={{ backgroundColor: "#25D366" }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: "#25D366" }} />

        <svg viewBox="0 0 32 32" className="w-7 h-7 text-white fill-current">
          <path d="M16.004 3.2C9.158 3.2 3.6 8.73 3.6 15.544c0 2.18.573 4.307 1.66 6.178L3.2 28.8l7.308-1.917a12.37 12.37 0 0 0 5.496 1.29h.005c6.84 0 12.4-5.53 12.4-12.346S22.85 3.2 16.004 3.2Zm0 22.615a10.28 10.28 0 0 1-5.236-1.433l-.376-.223-3.893 1.021 1.04-3.795-.244-.39A10.2 10.2 0 0 1 5.7 15.544c0-5.68 4.63-10.27 10.31-10.27 2.751 0 5.338 1.07 7.284 3.016a10.21 10.21 0 0 1 3.016 7.27c-.005 5.68-4.635 10.256-10.306 10.256Zm5.653-7.685c-.31-.155-1.835-.905-2.12-1.008-.284-.103-.491-.155-698.155s-.336.413-.698.516c-.362.103-.69.052-.965-.052-.276-.103-1.163-.428-2.215-1.367-.819-.73-1.372-1.632-1.533-1.907-.16-.276-.017-.425.121-.563.124-.124.276-.323.414-.484.138-.16.184-.276.276-.46.092-.183.046-.344-.023-.484-.069-.138-.698-1.683-.956-2.304-.252-.605-.508-.523-.698-.533l-.595-.01a1.14 1.14 0 0 0-.827.389c-.284.31-1.084 1.06-1.084 2.583 0 1.525 1.11 2.997 1.264 3.204.155.207 2.183 3.332 5.29 4.674.74.319 1.317.51 1.767.652.742.236 1.418.203 1.952.123.595-.089 1.835-.75 2.094-1.474.259-.724.259-1.345.181-1.474-.076-.133-.283-.212-.594-.367Z" />
        </svg>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
