import { passwordState, formState } from "../state/State.js";
import { EyeEl } from "./EyeEL.js";
export const Form = (host, insertPosition, props) => {
    let count = 0;
    const htmlValid = `<input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <div class="show-password">
          </div>
          <button type="submit">Login</button>`;
    const htmlInvalid = `<h1 style="color:#e03131;">Username and Password invalid</h1>
    <button id="btn-ok">Ok</button>`;
    const html = `${props?.fState ? htmlValid : htmlInvalid}`;
    host.innerHTML = "";
    host.insertAdjacentHTML(insertPosition, html);
    if (props?.fState) {
        const eyeElHost = document.querySelector(".show-password");
        EyeEl(eyeElHost, "afterbegin", props);
        eyeElHost.addEventListener("click", updataePasswordState);
        if (count === 0) {
            passwordState.addListener(updatePasswordStateListener);
            count++;
        }
    }
    else {
        document.getElementById("btn-ok").addEventListener("click", () => {
            formState.setState(true);
        });
    }
};
function updatePasswordStateListener(state) {
    EyeEl(document.querySelector(".show-password"), "beforeend", {
        pState: state,
    });
}
function updataePasswordState() {
    let pState = passwordState.getState();
    if (!pState)
        document.getElementById("password").setAttribute("type", "text");
    else
        document.getElementById("password").setAttribute("type", "password");
    passwordState.setState(!pState);
}
//# sourceMappingURL=form.js.map