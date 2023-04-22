import { Resume } from "./components/Resume.js";
import { Login } from "./components/login.js";
localStorage.setItem("username", "Arkadyuti");
localStorage.setItem("password", "Arkadyuti@1995");
const rootEl = document.getElementById("root");
Login(rootEl, "beforeend", { appState: false });
Resume(rootEl, "afterbegin", { appState: false });
