import { appState, formState } from "../state/StateSlice.js";
import { Form } from "./form.js";
export const Login = (host, insertPosition, props) => {
    let count = 0;
    const html = props?.appState
        ? "<h1>Welome<h1>"
        : `<article class="login">
   <div class="login__hero-box">
          <img src="./src/assets/img/login-page-bg.webp" alt="" />
        </div>
        <form class="login__form">
        </form>
      </article>`;
    host.innerHTML = "";
    host.insertAdjacentHTML(insertPosition, html);
    if (!props?.appState) {
        const formHost = document.querySelector("form");
        Form(formHost, "beforeend", { pState: false, fState: true });
        formHost.addEventListener("submit", formStateUpdate);
        if (count === 0) {
            formState.addListener(formStateUpdateListener);
            count++;
        }
    }
};
function formStateUpdate(event) {
    event.preventDefault();
    if (document.getElementById("username").value !==
        localStorage.getItem("username") ||
        document.getElementById("password").value !==
            localStorage.getItem("password")) {
        formState.setState(false);
        return;
    }
    appState.setState(true);
}
function formStateUpdateListener(state) {
    Form(document.querySelector("form"), "beforeend", {
        pState: false,
        fState: state,
    });
}
//# sourceMappingURL=login.js.map