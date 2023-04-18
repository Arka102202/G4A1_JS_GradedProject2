import { Resume } from "./components/Resume.js";
import { Login } from "./components/login.js";
import { appState } from "./state/StateSlice.js";
localStorage.setItem("username", "Arkadyuti");
localStorage.setItem("password", "Arkadyuti@1995");
const rootEl = document.getElementById("root");
Login(rootEl, "beforeend");
Resume(rootEl, "afterbegin");
appState.setState(false);
appState.addListener((state) => {
    Login(rootEl, "beforeend", { appState: state });
    Resume(rootEl, "beforeend", { appState: state });
});
//# sourceMappingURL=index.js.map