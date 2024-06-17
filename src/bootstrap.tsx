import { createRoot } from "react-dom/client";
import "../node_modules/normalize.css/normalize.css";
import "./global.css";
import App from "./app";

const domNode = document.getElementById("app");
const root = createRoot(domNode);
root.render(<App />);
