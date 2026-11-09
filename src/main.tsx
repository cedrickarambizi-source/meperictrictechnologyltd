import { createRoot } from "react-dom/client";
import "@fontsource-variable/inter";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root");
if (root) createRoot(root).render(<App />);
