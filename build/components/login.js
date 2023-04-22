import { appState } from "../state/StateSlice.js";
import { Form } from "./form.js";
export const Login = (host, insertPosition, props) => {
    const componentCallBackfn = (state) => {
        const html = state
            ? ""
            : `<article class="login">
   <div class="login__hero-box">
          <img src="./build/assets/img/login-page-bg.webp" alt="" />
        </div>
        <form class="login__form" autocomplete="off">
        </form>
      </article>`;
        host.innerHTML = "";
        host.insertAdjacentHTML(insertPosition, html);
        if (!state) {
            const formHost = document.querySelector("form");
            Form(formHost, "beforeend", { fState: true });
        }
    };
    componentCallBackfn(props.appState);
    appState.addListener(componentCallBackfn);
};
