import { Login } from "./components/login.js";
import { appState } from "./state/StateSlice.js";
localStorage.setItem("username", "Arkadyuti");
localStorage.setItem("password", "Arkadyuti@1995");
const rootEl = document.getElementById("root");
Login(rootEl, "beforeend");
appState.setState(false);
appState.addListener((state) => {
    console.log(appState.getState());
    Login(rootEl, "beforeend", { appState: state });
});
//# sourceMappingURL=index.js.map