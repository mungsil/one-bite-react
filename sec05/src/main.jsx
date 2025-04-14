import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(<App />);

// StrictMode: StrictMode is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants. It does not render any visible UI. It is a development tool only, and it does not affect the production build.
